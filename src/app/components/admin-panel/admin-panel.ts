import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Firestore, collection, getDocs, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminPanel implements OnInit {
  // User data
  pendingUsers: any[] = [];
  recentApproved: any[] = [];
  recentActivity: any[] = [];
  
  // Statistics
  pendingCount: number = 0;
  approvedCount: number = 0;
  totalUsers: number = 0;
  todayApprovals: number = 0;
  
  // Loading state
  loading: boolean = true;
  error: string = '';

  private firestore = inject(Firestore);
  private cdr = inject(ChangeDetectorRef);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('AdminPanel ngOnInit called');
    this.initializePanel();
  }

  async initializePanel() {
    // Check admin access first
    const hasAccess = await this.checkAdminAccess();
    if (!hasAccess) {
      this.loading = false;
      this.cdr.detectChanges();
      return;
    }
    
    // Load data
    await this.loadAllData();
    
    // CRITICAL: Set loading to false and trigger change detection
    this.loading = false;
    this.cdr.detectChanges();
    console.log('✅ Loading complete, UI should now display');
  }

  async checkAdminAccess(): Promise<boolean> {
    const adminToken = localStorage.getItem('adminToken');
    
    console.log('Admin check - adminToken:', adminToken);
    
    if (adminToken !== 'true') {
      this.showModal('Access Denied', 'You do not have admin privileges.', 'error', () => {
        this.router.navigate(['/login']);
      });
      return false;
    }
    
    return true;
  }

  async loadAllData() {
    console.log('Loading all data...');
    this.error = '';
    
    try {
      // Load all users
      const usersCol = collection(this.firestore, 'users');
      const usersSnapshot = await getDocs(usersCol);
      
      const allUsers = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      console.log('✅ Loaded users:', allUsers.length);
      
      // Process users
      this.processUsers(allUsers);
      
      // Load notifications
      await this.loadNotifications();
      
      console.log('✅ Data loaded successfully');
      console.log('Pending:', this.pendingCount, 'Approved:', this.approvedCount, 'Total:', this.totalUsers);
      
    } catch (error: any) {
      console.error('❌ Error loading data:', error);
      this.error = `Failed to load data: ${error.message || 'Unknown error'}`;
      this.showModal('Error', this.error, 'error');
    }
  }

  processUsers(users: any[]) {
    console.log('Processing users...', users.length);
    
    // Filter pending users
    this.pendingUsers = users
      .filter(user => user['status'] === 'pending')
      .sort((a, b) => {
        const dateA = this.getDate(a['createdAt']);
        const dateB = this.getDate(b['createdAt']);
        return dateB.getTime() - dateA.getTime();
      });
    this.pendingCount = this.pendingUsers.length;
    
    console.log('Pending users:', this.pendingCount);
    
    // Filter approved users
    const approvedUsers = users.filter(user => user['status'] === 'approved');
    this.recentApproved = approvedUsers
      .sort((a, b) => {
        const dateA = this.getDate(a['approvedAt']);
        const dateB = this.getDate(b['approvedAt']);
        return dateB.getTime() - dateA.getTime();
      })
      .slice(0, 10);
    this.approvedCount = approvedUsers.length;
    
    console.log('Approved users:', this.approvedCount);
    
    // Total users
    this.totalUsers = users.length;
    
    // Today's approvals
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.todayApprovals = approvedUsers.filter(user => {
      if (!user['approvedAt']) return false;
      const approvedDate = this.getDate(user['approvedAt']);
      return approvedDate >= today;
    }).length;
    
    console.log('Today approvals:', this.todayApprovals);
  }

  getDate(timestamp: any): Date {
    if (!timestamp) return new Date(0);
    if (timestamp.toDate) return timestamp.toDate();
    if (timestamp.seconds) return new Date(timestamp.seconds * 1000);
    if (timestamp instanceof Date) return timestamp;
    return new Date(timestamp);
  }

  async loadNotifications() {
    try {
      console.log('Loading notifications...');
      const notificationsCol = collection(this.firestore, 'notifications');
      const notificationsSnapshot = await getDocs(notificationsCol);
      
      this.recentActivity = notificationsSnapshot.docs
        .map(doc => {
          const data = doc.data();
          return {
            email: data['email'] || 'Unknown',
            message: this.getActivityMessage(data['type']),
            timestamp: data['createdAt'],
            type: data['type']
          };
        })
        .sort((a, b) => {
          const dateA = this.getDate(a.timestamp);
          const dateB = this.getDate(b.timestamp);
          return dateB.getTime() - dateA.getTime();
        })
        .slice(0, 15);
      
      console.log('Loaded notifications:', this.recentActivity.length);
      
    } catch (error) {
      console.error('Error loading notifications:', error);
      this.recentActivity = [];
    }
  }

  formatDate(timestamp: any): string {
    try {
      const date = this.getDate(timestamp);
      if (date.getTime() === 0) return 'Unknown';
      
      const today = new Date();
      const diffMs = today.getTime() - date.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      
      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 7) return `${diffDays}d ago`;
      
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return 'Unknown';
    }
  }

  // Actions
  async approveUser(userId: string) {
    const user = this.pendingUsers.find(u => u['id'] === userId);
    if (!user) {
      this.showModal('Error', 'User not found', 'error');
      return;
    }
    
    this.showConfirmModal(
      `Approve ${user['email']}?`,
      'This will grant them access to all courses. Continue?',
      'warning',
      async () => {
        try {
          const userDoc = doc(this.firestore, 'users', userId);
          await updateDoc(userDoc, {
            status: 'approved',
            hasAccess: true,
            approvedAt: new Date(),
            updatedAt: new Date()
          });
          
          console.log('User approved:', user['email']);
          
          // Refresh data
          await this.refreshData();
          
          this.showModal('Success', `${user['email']} has been approved!`, 'success');
        } catch (error) {
          console.error('Error approving user:', error);
          this.showModal('Error', 'Error approving user. Please try again.', 'error');
        }
      }
    );
  }

  async rejectUser(userId: string) {
    const user = this.pendingUsers.find(u => u['id'] === userId);
    if (!user) {
      this.showModal('Error', 'User not found', 'error');
      return;
    }
    
    this.showPromptModal(
      `Reject ${user['email']}?`,
      'Please enter reason for rejection:',
      'warning',
      async (reason) => {
        if (reason === null) return; // User cancelled
        
        try {
          const userDoc = doc(this.firestore, 'users', userId);
          await updateDoc(userDoc, {
            status: 'rejected',
            hasAccess: false,
            rejectedAt: new Date(),
            rejectionReason: reason || 'No reason provided',
            updatedAt: new Date()
          });
          
          console.log('User rejected:', user['email']);
          
          // Refresh data
          await this.refreshData();
          
          this.showModal('Success', `${user['email']} has been rejected.`, 'warning');
        } catch (error) {
          console.error('Error rejecting user:', error);
          this.showModal('Error', 'Error rejecting user. Please try again.', 'error');
        }
      }
    );
  }

  async deleteUser(userId: string) {
    this.showConfirmModal(
      'Delete User?',
      'This will permanently delete the user and all their data. This action cannot be undone.',
      'error',
      async () => {
        try {
          const userDoc = doc(this.firestore, 'users', userId);
          await deleteDoc(userDoc);
          
          console.log('User deleted:', userId);
          
          // Refresh data
          await this.refreshData();
          
          this.showModal('Success', 'User has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting user:', error);
          this.showModal('Error', 'Error deleting user.', 'error');
        }
      }
    );
  }

  async refreshData() {
    console.log('Manual refresh triggered');
    this.loading = true;
    this.cdr.detectChanges();
    
    await this.loadAllData();
    
    this.loading = false;
    this.cdr.detectChanges();
    this.showModal('Refreshed', 'Data has been refreshed successfully.', 'info');
  }

  getActivityMessage(type: string): string {
    const messages: any = {
      'new_registration': '📝 New user registration',
      'user_approved': '✅ User account approved',
      'user_rejected': '❌ User account rejected'
    };
    return messages[type] || '❓ Unknown activity';
  }

  // Modal System
  showModal(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info', callback?: () => void) {
    const modalId = 'modal-' + Date.now();
    
    const modalHTML = `
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title d-flex align-items-center">
                <i class="bi ${this.getModalIcon(type)} me-2 text-${this.getModalColor(type)}"></i>
                ${title}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center py-4">
              <div class="mb-3">
                <i class="bi ${this.getModalIcon(type)} display-4 text-${this.getModalColor(type)}"></i>
              </div>
              <p class="mb-0">${message}</p>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-${this.getModalColor(type)} w-100" data-bs-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Add modal to DOM
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Show modal
    const modalElement = document.getElementById(modalId) as any;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
    
    // Handle modal close
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalElement.remove();
      if (callback) callback();
    });
  }

  showConfirmModal(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info', 
                  confirmCallback: () => void, cancelCallback?: () => void) {
    const modalId = 'confirm-modal-' + Date.now();
    
    const modalHTML = `
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title d-flex align-items-center">
                <i class="bi ${this.getModalIcon(type)} me-2 text-${this.getModalColor(type)}"></i>
                ${title}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center py-4">
              <div class="mb-3">
                <i class="bi ${this.getModalIcon(type)} display-4 text-${this.getModalColor(type)}"></i>
              </div>
              <p class="mb-0">${message}</p>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-${this.getModalColor(type)}" id="confirm-btn">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Add modal to DOM
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Show modal
    const modalElement = document.getElementById(modalId) as any;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
    
    // Handle confirm button
    modalElement.querySelector('#confirm-btn').addEventListener('click', () => {
      modal.hide();
      confirmCallback();
    });
    
    // Handle modal close
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalElement.remove();
      if (cancelCallback) cancelCallback();
    });
  }

  showPromptModal(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info', 
                 confirmCallback: (value: string | null) => void) {
    const modalId = 'prompt-modal-' + Date.now();
    
    const modalHTML = `
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title d-flex align-items-center">
                <i class="bi ${this.getModalIcon(type)} me-2 text-${this.getModalColor(type)}"></i>
                ${title}
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body py-4">
              <div class="mb-3 text-center">
                <i class="bi ${this.getModalIcon(type)} display-4 text-${this.getModalColor(type)}"></i>
              </div>
              <p class="text-center mb-3">${message}</p>
              <div class="form-group">
                <textarea class="form-control" id="prompt-input" rows="3" placeholder="Enter reason..."></textarea>
              </div>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-${this.getModalColor(type)}" id="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Add modal to DOM
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Show modal
    const modalElement = document.getElementById(modalId) as any;
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
    
    // Handle submit button
    modalElement.querySelector('#submit-btn').addEventListener('click', () => {
      const input = (modalElement.querySelector('#prompt-input') as HTMLTextAreaElement).value;
      modal.hide();
      confirmCallback(input);
    });
    
    // Handle Enter key
    modalElement.querySelector('#prompt-input')?.addEventListener('keypress', (e: any) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        modalElement.querySelector('#submit-btn')?.click();
      }
    });
    
    // Handle modal close
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalElement.remove();
      confirmCallback(null);
    });
  }

  private getModalIcon(type: string): string {
    switch (type) {
      case 'success': return 'bi-check-circle-fill';
      case 'error': return 'bi-x-circle-fill';
      case 'warning': return 'bi-exclamation-triangle-fill';
      default: return 'bi-info-circle-fill';
    }
  }

  private getModalColor(type: string): string {
    switch (type) {
      case 'success': return 'success';
      case 'error': return 'danger';
      case 'warning': return 'warning';
      default: return 'primary';
    }
  }

  async logout() {
    this.showConfirmModal(
      'Logout?',
      'Are you sure you want to logout from admin panel?',
      'warning',
      async () => {
        console.log('Admin logging out');
        localStorage.removeItem('adminToken');
        await this.authService.logout();
      }
    );
  }
}