import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule, DatePipe } from '@angular/common';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pending',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe], 
  templateUrl: './pending.html',
  styleUrls: ['./pending.css']
})
export class Pending implements OnInit, OnDestroy {
  // Status tracking
  status: string = 'pending'; // pending, approved, rejected
  checkedStatus: boolean = false;
  lastChecked: Date = new Date();
  userEmail: string = 'Loading...';
  
  // Loading state
  checking: boolean = false;
  
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loadUserInfo();
    await this.checkStatus();
    this.startAutoCheck();
  }

  async loadUserInfo() {
    const userSub = this.authService.userData$.subscribe((userData) => {
      if (userData) {
        this.userEmail = userData.email || 'Unknown';
      }
    });
    
    this.subscriptions.push(userSub);
  }

  async checkStatus() {
    this.checking = true;
    
    try {
      // Get user status
      this.status = await this.authService.getUserStatus();
      this.checkedStatus = true;
      this.lastChecked = new Date();
      
      console.log('User status:', this.status);
      
      // If approved, redirect to dashboard
      if (this.status === 'approved') {
        setTimeout(() => {
          this.goToDashboard();
        }, 1500);
      }
      
      // If rejected, show message
      if (this.status === 'rejected') {
        this.showMessage(
          'Account Rejected',
          'Your account has been rejected by admin. Please contact support for more information.',
          'error'
        );
      }
      
    } catch (error) {
      console.error('Error checking status:', error);
      this.status = 'error';
    } finally {
      this.checking = false;
    }
  }

  startAutoCheck() {
    // Check status every 30 seconds
    const intervalSub = interval(30000).subscribe(() => {
      if (this.status === 'pending') {
        this.checkStatus();
      }
    });
    
    this.subscriptions.push(intervalSub);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  contactSupport() {
    const email = 'support@yourdomain.com';
    const subject = `Account Approval Inquiry - ${this.userEmail}`;
    const body = `Hello,\n\nI need help with my account approval.\n\nEmail: ${this.userEmail}\nStatus: ${this.status}`;
    
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  }

  showMessage(title: string, message: string, type: 'success' | 'error' | 'info' | 'warning') {
    // Create message modal
    const modal = document.createElement('div');
    modal.className = 'modal fade show';
    modal.style.display = 'block';
    modal.style.zIndex = '1050';
    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title">
              <i class="bi ${this.getMessageIcon(type)} me-2 text-${this.getMessageColor(type)}"></i>
              ${title}
            </h5>
          </div>
          <div class="modal-body text-center">
            <i class="bi ${this.getMessageIcon(type)} display-4 text-${this.getMessageColor(type)} mb-3"></i>
            <p>${message}</p>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-${this.getMessageColor(type)} w-100" onclick="this.closest('.modal').remove()">
              OK
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  private getMessageIcon(type: string): string {
    switch (type) {
      case 'success': return 'bi-check-circle-fill';
      case 'error': return 'bi-x-circle-fill';
      case 'warning': return 'bi-exclamation-triangle-fill';
      default: return 'bi-info-circle-fill';
    }
  }

  private getMessageColor(type: string): string {
    switch (type) {
      case 'success': return 'success';
      case 'error': return 'danger';
      case 'warning': return 'warning';
      default: return 'primary';
    }
  }

  async logout() {
    await this.authService.logout();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}