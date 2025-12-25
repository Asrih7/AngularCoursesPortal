import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
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
    
    const user = await firstValueFrom(this.authService.currentUser$);
    
    if (user) {
      return true; // User is logged in
    }
    
    // User not logged in, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}