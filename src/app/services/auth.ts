import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, onAuthStateChanged, sendPasswordResetEmail } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injector, runInInjectionContext } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private injector = inject(Injector);
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private userDataSubject = new BehaviorSubject<any>(null);
  
  // Track auth initialization
  private authInitialized = new BehaviorSubject<boolean>(false);
  authInitialized$ = this.authInitialized.asObservable();
  
  // Public observables
  currentUser$ = this.currentUserSubject.asObservable();
  userData$ = this.userDataSubject.asObservable();

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.initializeAuthState();
  }

   private initializeAuthState() {
    runInInjectionContext(this.injector, () => {
      onAuthStateChanged(
        this.auth,
        async (user) => {
          this.currentUserSubject.next(user);
          if (user) {
            await this.loadUserData(user.uid);
          } else {
            this.userDataSubject.next(null);
          }
          this.authInitialized.next(true);
        },
        (error) => {
          console.error('Auth state error:', error);
          this.authInitialized.next(true);
        }
      );
    });
  }

   async waitForAuthInit(): Promise<void> {
    if (this.authInitialized.value) {
      return;
    }
    
    return new Promise((resolve) => {
      const subscription = this.authInitialized$.subscribe((initialized) => {
        if (initialized) {
          subscription.unsubscribe();
          resolve();
        }
      });
      
      // Timeout fallback
      setTimeout(() => {
        subscription.unsubscribe();
        resolve();
      }, 2000);
    });
  }

  private async loadUserData(uid: string) {
    try {
      const docRef = await getDoc(doc(this.firestore, 'users', uid));
      if (docRef.exists()) {
        const userData = docRef.data();
        this.userDataSubject.next(userData);
        
        // Store in localStorage for persistence
        localStorage.setItem('userData', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  }

  // Register user - FIXED VERSION
  async register(email: string, password: string, adminNote: string = ''): Promise<any> {
    try {
      // IMPORTANT: First check if user exists in Firestore by EMAIL (not UID)
      const usersCol = collection(this.firestore, 'users');
      const emailQuery = query(usersCol, where('email', '==', email));
      const emailQuerySnapshot = await getDocs(emailQuery);
      
      if (!emailQuerySnapshot.empty) {
        // User exists in Firestore with this email
        // This is an orphaned document (user deleted from Auth but not from Firestore)
        console.warn('Orphaned user found in Firestore with email:', email);
        
        // Delete the orphaned Firestore document first
        const orphanDoc = emailQuerySnapshot.docs[0];
        await updateDoc(doc(this.firestore, 'users', orphanDoc.id), {
          email: email + '_deleted_' + Date.now(), // Change email to avoid conflict
          status: 'deleted',
          deletedAt: new Date()
        });
        
        console.log('Marked orphaned user as deleted:', email);
      }
      
      // Now try to register the user
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const userId = userCredential.user.uid;
      
      const userData = {
        email: email,
        userId: userId,
        status: 'pending',
        hasAccess: false,
        adminNote: adminNote,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await setDoc(doc(this.firestore, 'users', userId), userData);
      
      // Create notification
      await addDoc(collection(this.firestore, 'notifications'), {
        type: 'new_registration',
        userId: userId,
        email: email,
        adminNote: adminNote,
        read: false,
        createdAt: new Date()
      });
      
      // Load user data immediately
      this.userDataSubject.next(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      return userCredential;
      
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Better error handling
      if (error.code === 'auth/email-already-in-use') {
        // Try to recover by checking if we can login
        try {
          await this.login(email, password);
          return { success: true, message: 'Logged in with existing account' };
        } catch (loginError) {
          // If login fails, suggest password reset
          throw new Error(
            'This email is already registered. ' +
            'If this is your account, try resetting your password. ' +
            'Otherwise, use a different email address.'
          );
        }
      }
      
      throw error;
    }
  }

  // Login user
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const userId = userCredential.user.uid;
      
      const userDoc = await getDoc(doc(this.firestore, 'users', userId));
      if (!userDoc.exists()) {
        // User exists in Auth but not in Firestore - create document
        await setDoc(doc(this.firestore, 'users', userId), {
          email: email,
          userId: userId,
          status: 'pending', // Default status
          hasAccess: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        
        throw new Error('Account created but pending admin approval');
      }
      
      const userData = userDoc.data() as any;
      
      if (userData.status !== 'approved') {
        await this.logout();
        throw new Error('Account not approved yet. Please wait for admin approval.');
      }
      
      // Load user data
      this.userDataSubject.next(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      return userCredential;
      
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Logout user
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.currentUserSubject.next(null);
      this.userDataSubject.next(null);
      localStorage.removeItem('userData');
      localStorage.removeItem('adminToken');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // Get user status
  // Get user status with retry logic
async getUserStatus(): Promise<string> {
  const user = this.auth.currentUser;
  if (!user) return 'not_logged_in';
  
  // Check cached data first
  const cachedData = localStorage.getItem('userData');
  if (cachedData) {
    const userData = JSON.parse(cachedData);
    if (userData?.status) return userData.status;
  }
  
  try {
    // Try to get from Firestore with retry
    let retries = 0;
    while (retries < 3) {
      const docRef = await getDoc(doc(this.firestore, 'users', user.uid));
      if (docRef.exists()) {
        const data = docRef.data() as any;
        return data?.status || 'pending';
      }
      retries++;
      await new Promise(resolve => setTimeout(resolve, 100 * retries));
    }
  } catch (error) {
    console.error('Error getting user status:', error);
  }
  
  return 'pending';
}

  // Check if user has access
  async hasAccess(): Promise<boolean> {
    const status = await this.getUserStatus();
    return status === 'approved';
  }

  // Check if admin - FIXED VERSION
  async isAdmin(): Promise<boolean> {
    // Check localStorage first (this is for admin123 password)
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken === 'true') {
      console.log('Admin access granted via localStorage token');
      return true;
    }
    
    // Check Firestore admin status
    const user = this.auth.currentUser;
    if (!user) {
      console.log('No user logged in for admin check');
      return false;
    }
    
    try {
      const docRef = await getDoc(doc(this.firestore, 'users', user.uid));
      if (docRef.exists()) {
        const data = docRef.data() as any;
        const isAdmin = data?.isAdmin === true;
        console.log('User admin status from Firestore:', isAdmin);
        return isAdmin;
      }
      console.log('User document not found in Firestore');
      return false;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  }

  // Reset password
  async resetPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(this.auth, email);
  }

  // NEW METHOD: Force cleanup for testing
  async forceCleanupUser(email: string): Promise<void> {
    console.warn('Force cleanup for email:', email);
    
    try {
      // Find user by email in Firestore
      const usersCol = collection(this.firestore, 'users');
      const emailQuery = query(usersCol, where('email', '==', email));
      const snapshot = await getDocs(emailQuery);
      
      if (!snapshot.empty) {
        // Delete from Firestore
        const userDoc = snapshot.docs[0];
        await updateDoc(doc(this.firestore, 'users', userDoc.id), {
          email: email + '_cleaned_' + Date.now(),
          status: 'cleaned',
          cleanedAt: new Date()
        });
        console.log('Cleaned Firestore user:', email);
      }
    } catch (error) {
      console.error('Cleanup error:', error);
    }
  }
}