import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  
  // User data
  user: any = null;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userStatus: string = '';
  
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    // Subscribe to user changes
    const userSub = this.authService.currentUser$.subscribe(async (user) => {
      this.user = user;
      this.isLoggedIn = !!user;
      
      if (user) {
        // Subscribe to user data changes
        const dataSub = this.authService.userData$.subscribe((userData) => {
          if (userData) {
            this.userStatus = userData.status || '';
            this.checkAdminStatus();
          }
        });
        this.subscriptions.push(dataSub);
      } else {
        this.userStatus = '';
        this.isAdmin = false;
      }
    });
    
    this.subscriptions.push(userSub);
  }

  async checkAdminStatus() {
    this.isAdmin = await this.authService.isAdmin();
  }

  async logout(event: Event) {
    event.preventDefault();
    
    if (this.isAdmin) {
      localStorage.removeItem('adminToken');
    }
    
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToDashboard() {
    if (this.userStatus === 'approved') {
      this.router.navigate(['/dashboard']);
    } else if (this.isLoggedIn) {
      this.router.navigate(['/pending']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToAdminPanel() {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}