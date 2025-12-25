import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Login {
  // Student login fields
  email: string = '';
  password: string = '';
  
  // Admin login fields
  adminEmail: string = 'admin@admin.com';
  adminPassword: string = '';
  
  // UI State
  loading: boolean = false;
  adminLoading: boolean = false;
  error: string = '';
  adminError: string = '';
  showAdmin: boolean = false;
  
  // Password visibility
  showPassword: boolean = false;
  showAdminPassword: boolean = false;

  private cdr = inject(ChangeDetectorRef);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Student Login - FIXED VERSION
  async login() {
    this.error = '';
    this.cdr.detectChanges();
    
    // Validation
    if (!this.email || !this.password) {
      this.error = 'Please enter email and password';
      this.cdr.detectChanges();
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.error = 'Please enter a valid email address';
      this.cdr.detectChanges();
      return;
    }
    
    this.loading = true;
    this.cdr.detectChanges();
    
    try {
      console.log('Attempting login for:', this.email);
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Login timeout')), 10000);
      });
      
      await Promise.race([
        this.authService.login(this.email, this.password),
        timeoutPromise
      ]);
      
      console.log('Login successful, checking status...');
      
      // Check if user is approved
      const status = await this.authService.getUserStatus();
      console.log('User status:', status);
      
      this.loading = false;
      this.cdr.detectChanges();
      
      if (status === 'approved') {
        this.router.navigate(['/dashboard']);
      } else if (status === 'pending') {
        // Show immediate message
        this.error = 'Account not approved yet. Please wait for admin approval.';
        this.cdr.detectChanges();
        
        // Redirect after showing message
        setTimeout(() => {
          this.router.navigate(['/pending']);
        }, 2000);
      } else {
        this.error = 'Account not approved. Please contact admin.';
        this.cdr.detectChanges();
      }
      
    } catch (error: any) {
      this.loading = false;
      console.error('Login error details:', error);
      
      // Better error messages with immediate feedback
     if (error.message?.includes('not approved')) {
  this.error = 'Account not approved yet. Please wait for admin approval.';
  this.cdr.detectChanges();
  setTimeout(() => {
    this.router.navigate(['/pending']);
  }, 1500);
} else if (error.code === 'auth/user-not-found') {
  this.error = 'No account found with this email. Please register first.';
} else if (error.code === 'auth/wrong-password') {
  this.error = 'Incorrect password. Please try again.';
} else if (error.code === 'auth/invalid-email') {
  this.error = 'Invalid email address';
} else if (error.code === 'auth/too-many-requests') {
  this.error = 'Too many failed attempts. Please try again later.';
} else if (error.message === 'Login timeout') {
  this.error = 'Login timed out. Please check your connection and try again.';
} else if (error.code === 'auth/invalid-credential') {
  // Handle the new Firebase error code
  this.error = 'Invalid email or password. Please check your credentials and try again.';
} else {
  this.error = error.message || 'Login failed. Please try again.';
}
      
      this.cdr.detectChanges();
    }
  }

  // Admin Login - FIXED VERSION
  async adminLogin() {
    this.adminError = '';
    this.cdr.detectChanges();
    
    if (!this.adminPassword) {
      this.adminError = 'Please enter admin password';
      this.cdr.detectChanges();
      return;
    }
    
    this.adminLoading = true;
    this.cdr.detectChanges();
    
    // SIMPLE ADMIN CHECK
    if (this.adminPassword === 'admin123') {
      // Set admin token
      localStorage.setItem('adminToken', 'true');
      console.log('Admin token set');
      
      // Small delay for better UX
      setTimeout(() => {
        this.adminLoading = false;
        this.cdr.detectChanges();
        this.router.navigate(['/admin']);
      }, 300);
    } else {
      this.adminLoading = false;
      this.adminError = 'Invalid admin password';
      this.cdr.detectChanges();
    }
  }

  // Toggle between student/admin login
  toggleAdmin(event: Event) {
    event.preventDefault();
    this.showAdmin = !this.showAdmin;
    this.error = '';
    this.adminError = '';
    
    if (this.showAdmin && !this.adminEmail) {
      this.adminEmail = 'admin@admin.com';
    }
    
    this.adminPassword = '';
    this.showAdminPassword = false;
    this.cdr.detectChanges();
  }

  // Toggle password visibility
  togglePasswordVisibility(field: 'password' | 'adminPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showAdminPassword = !this.showAdminPassword;
    }
    this.cdr.detectChanges();
  }

  forgotPassword() {
    if (this.email) {
      this.authService.resetPassword(this.email);
      this.error = 'Password reset email sent. Check your inbox.';
      this.cdr.detectChanges();
    } else {
      this.error = 'Please enter your email address first.';
      this.cdr.detectChanges();
    }
  }
}