import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    
    // Wait for auth to initialize completely
    await this.authService.waitForAuthInit();
    
    // Check if user is logged in first
    const user = await firstValueFrom(this.authService.currentUser$);
    
    if (!user) {
      // User not logged in
      this.router.navigate(['/login']);
      return false;
    }
    
    // Now check if user has access (approved)
    const hasAccess = await this.authService.hasAccess();
    
    if (hasAccess) {
      return true; // Allow access to dashboard
    }
    
    // User is logged in but not approved
    this.router.navigate(['/pending']);
    return false;
  }
}