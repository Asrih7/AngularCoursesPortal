import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { AdminPanel } from './components/admin-panel/admin-panel';
import { Pending } from './components/pending/pending';
import { ApprovedGuard } from './guards/approved-guard';
import { AuthGuard } from './guards/auth-guard';
import { AdminGuard } from './guards/admin.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: Login },
  { 
    path: 'pending', 
    component: Pending,
    canActivate: [AuthGuard]
  },
  { 
    path: 'dashboard', 
    component: Dashboard,
    canActivate: [AuthGuard, ApprovedGuard]
  },
  { 
    path: 'admin', 
    component: AdminPanel,
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '/login' }
];