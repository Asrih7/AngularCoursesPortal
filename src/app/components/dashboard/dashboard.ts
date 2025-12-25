import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { Firestore, collection, doc, getDoc, addDoc, getDocs } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

interface AccessLog {
  id: string;
  userId?: string;
  email?: string;
  course?: string;
  accessedAt?: any;
  userAgent?: string;
}

interface UserData {
  email?: string;
  status?: string;
  approvedAt?: any;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit, OnDestroy {
  // User information
  userEmail: string = 'Loading...';
  userStatus: string = 'pending';
  accessDate: string = '';
  
  // Activity tracking
  lastAccess: string = '';
  coursesAccessed: number = 0;
  
  // Recent activity
  recentActivity: any[] = [];
  
  // Loading states
  loading: boolean = true;
  loadingActivity: boolean = true;
  
  // Course URLs
  private courseUrls = {
    angular: 'https://asrihangularacademy.netlify.app/',
    interview: 'https://angularquestionscards.netlify.app/'
  };

  private subscriptions: Subscription[] = [];
  private firestore = inject(Firestore);
  private cdr = inject(ChangeDetectorRef);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    console.log('Dashboard ngOnInit');
    await this.loadUserData();
    await this.loadActivity();
    this.cdr.detectChanges();
  }

  async loadUserData() {
    try {
      console.log('Loading user data...');
      
      // Get user from auth service
      const userSub = this.authService.currentUser$.subscribe(async (user) => {
        if (user) {
          this.userEmail = user.email || 'Unknown';
          console.log('User email:', this.userEmail);
          
          // Get user data from Firestore
          const userDocRef = doc(this.firestore, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data() as UserData;
            this.userStatus = userData.status || 'pending';
            console.log('User status:', this.userStatus);
            
            if (userData.approvedAt) {
              const approvedDate = this.getDateFromFirestore(userData.approvedAt);
              this.accessDate = this.formatDate(approvedDate);
              console.log('Access date:', this.accessDate);
            }
          }
        } else {
          // Try localStorage
          const cachedData = localStorage.getItem('userData');
          if (cachedData) {
            const userData = JSON.parse(cachedData) as UserData;
            this.userEmail = userData.email || 'Unknown';
            this.userStatus = userData.status || 'pending';
            if (userData.approvedAt) {
              this.accessDate = this.formatDate(new Date(userData.approvedAt));
            }
          }
        }
        
        this.loading = false;
        this.cdr.detectChanges();
      });
      
      this.subscriptions.push(userSub);
      
    } catch (error) {
      console.error('Error loading user data:', error);
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  async loadActivity() {
    try {
      console.log('Loading activity...');
      
      // Get current user
      const user = await this.getCurrentUser();
      if (!user) {
        this.loadingActivity = false;
        this.cdr.detectChanges();
        return;
      }
      
      // Get all access logs
      const accessLogsCol = collection(this.firestore, 'accessLogs');
      const logsSnapshot = await getDocs(accessLogsCol);
      
      // Filter logs for this user and convert to typed array
      const allLogs: AccessLog[] = [];
      logsSnapshot.docs.forEach(doc => {
        const data = doc.data();
        const log: AccessLog = {
          id: doc.id,
          userId: data['userId'],
          email: data['email'],
          course: data['course'],
          accessedAt: data['accessedAt'],
          userAgent: data['userAgent']
        };
        
        if (log.userId === user.uid) {
          allLogs.push(log);
        }
      });
      
      console.log('User activity logs:', allLogs.length);
      
      // Sort by accessedAt
      allLogs.sort((a, b) => {
        const dateA = this.getDateFromFirestore(a.accessedAt);
        const dateB = this.getDateFromFirestore(b.accessedAt);
        return dateB.getTime() - dateA.getTime();
      });
      
     
      
      // Update last access
      if (allLogs.length > 0 && allLogs[0].accessedAt) {
        this.lastAccess = this.formatDate(this.getDateFromFirestore(allLogs[0].accessedAt));
      }
      
      // Update course count
      this.coursesAccessed = allLogs.length;
      
      this.loadingActivity = false;
      this.cdr.detectChanges();
      console.log('Activity loaded:', this.recentActivity.length, 'items');
      
    } catch (error) {
      console.error('Error loading activity:', error);
      this.loadingActivity = false;
      this.cdr.detectChanges();
    }
  }

  private async getCurrentUser() {
    return new Promise<any>((resolve) => {
      const sub = this.authService.currentUser$.subscribe(user => {
        resolve(user);
        sub.unsubscribe();
      });
    });
  }

  private getDateFromFirestore(timestamp: any): Date {
    if (!timestamp) return new Date(0);
    if (timestamp.toDate) return timestamp.toDate();
    if (timestamp.seconds) return new Date(timestamp.seconds * 1000);
    return new Date(timestamp);
  }

  private formatDate(date: Date): string {
    if (!date || date.getTime() === 0) return 'Never';
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private getTimeAgo(date: Date): string {
    if (!date || date.getTime() === 0) return '';
    
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return this.formatDate(date);
  }

  async accessCourse(courseType: 'angular' | 'interview') {
    try {
      console.log('Accessing course:', courseType);
      
      // Get current user
      const user = await this.getCurrentUser();
      if (!user) {
        this.router.navigate(['/login']);
        return;
      }
      
      // Check if approved
      const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
      const userData = userDoc.data() as UserData;
      
      if (!userData || userData.status !== 'approved') {
        this.showModal(
          'Access Denied',
          'Your account is not approved yet. Please wait for admin approval.',
          'error'
        );
        return;
      }
      
      // Log access
      const accessLogsCol = collection(this.firestore, 'accessLogs');
      await addDoc(accessLogsCol, {
        userId: user.uid,
        email: user.email,
        course: courseType,
        accessedAt: new Date(),
        userAgent: navigator.userAgent
      });
      
      console.log('Course access logged');
      
      // Open course
      const courseUrl = this.courseUrls[courseType];
      this.showModal(
        'Opening Course',
        `Redirecting to ${courseType === 'angular' ? 'Angular Course' : 'Interview Questions'}...`,
        'success',
        () => {
          window.open(courseUrl, '_blank');
        }
      );
      
      // Refresh activity
      setTimeout(() => {
        this.loadActivity();
      }, 500);
      
    } catch (error) {
      console.error('Error accessing course:', error);
      this.showModal('Error', 'Error accessing course. Please try again.', 'error');
    }
  }

  showModal(title: string, message: string, type: 'success' | 'error' | 'info' | 'warning', callback?: () => void) {
    const modalId = 'modal-' + Date.now();
    
    const modalHTML = `
      <div class="modal fade" id="${modalId}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <i class="bi ${this.getModalIcon(type)} me-2 text-${this.getModalColor(type)}"></i>
                ${title}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              ${message}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-${this.getModalColor(type)}" data-bs-dismiss="modal">
                ${type === 'error' ? 'OK' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    const modalElement = document.getElementById(modalId) as any;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
    
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalElement.remove();
      if (callback) callback();
    });
  }

  private getModalIcon(type: string): string {
    switch (type) {
      case 'success': return 'bi-check-circle-fill';
      case 'error': return 'bi-x-circle-fill';
      default: return 'bi-info-circle-fill';
    }
  }

  private getModalColor(type: string): string {
    switch (type) {
      case 'success': return 'success';
      case 'error': return 'danger';
      default: return 'primary';
    }
  }

  async refresh() {
    console.log('Refreshing activity...');
    this.loadingActivity = true;
    this.cdr.detectChanges();
    await this.loadActivity();
    this.showModal('Refreshed', 'Activity data has been refreshed.', 'info');
  }

  async logout() {
    await this.authService.logout();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}