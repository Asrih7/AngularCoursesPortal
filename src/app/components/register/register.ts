import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this line

})
export class RegisterComponent {
  // Form fields
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  adminNote: string = '';
  
  // UI State
  submitted: boolean = false;
  loading: boolean = false;
  error: string = '';
  
  // Password visibility
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async register() {
    // Reset error
    this.error = '';
    
    // Validation
    if (!this.email || !this.password) {
      this.error = 'Please fill in all required fields';
      return;
    }
    
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    
    if (this.password.length < 6) {
      this.error = 'Password must be at least 6 characters';
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.error = 'Please enter a valid email address';
      return;
    }
    
    // Check terms acceptance
    const termsCheck = document.getElementById('termsCheck') as HTMLInputElement;
    if (!termsCheck?.checked) {
      this.error = 'Please accept the Terms of Service and Privacy Policy';
      return;
    }
    
    // Start loading
    this.loading = true;
    
    try {
      // Call registration service
      await this.authService.register(this.email, this.password, this.adminNote);
      
      // Registration successful
      this.submitted = true;
      this.loading = false;
      
      // Clear sensitive data
      this.password = '';
      this.confirmPassword = '';
      
    } catch (error: any) {
      // Handle errors
      this.loading = false;
      
      if (error.code === 'auth/email-already-in-use') {
        this.error = 'This email is already registered. Please login instead.';
      } else if (error.code === 'auth/invalid-email') {
        this.error = 'Invalid email address';
      } else if (error.code === 'auth/weak-password') {
        this.error = 'Password is too weak. Use at least 6 characters.';
      } else {
        this.error = error.message || 'Registration failed. Please try again.';
      }
      
      console.error('Registration error:', error);
    }
  }

  // Toggle password visibility
  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToPending() {
    this.router.navigate(['/pending']);
  }
}