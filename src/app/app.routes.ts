import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'vulnerabilities', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'vulnerabilities', component: Dashboard },
  { path: 'profile', component: Dashboard },
];
