import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { DashboardState } from '../../../services/dashboard-state';

type NavItem = {
  label: string;
  icon: string;
  routerLink: string;
};

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CustomIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  userName = input<string>('User Name');

  collapsed = signal<boolean>(false);

  constructor(private dashboardState: DashboardState) {}

  toggleCollapse() {
    const newCollapsedState = !this.collapsed();
    this.collapsed.set(newCollapsedState);
    this.dashboardState.setSidebarCollapsed(newCollapsedState);
  }

  menuItems: NavItem[] = [
    { label: 'Lorem', icon: 'dashboard', routerLink: '/dashboard' },
    { label: 'Lorem', icon: 'bug', routerLink: '/assets' },
    { label: 'Lorem', icon: 'wysiwyg', routerLink: '/reports' },
    {
      label: 'Vulnerabilities',
      icon: 'vulnerabilities',
      routerLink: '/vulnerabilities',
    },
    { label: 'Integration', icon: 'integration', routerLink: '/remediations' },
    { label: 'Report', icon: 'report', routerLink: '/report' },
    { label: 'Help', icon: 'help_outline', routerLink: '/help' },
  ];

  settingsNavItems: NavItem[] = [
    { label: 'Settings', icon: 'settings', routerLink: '/settings' },
    { label: 'Alerts', icon: 'notifications', routerLink: '/alerts' },
  ];
}
