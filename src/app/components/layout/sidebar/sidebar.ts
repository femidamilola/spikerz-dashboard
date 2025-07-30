import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomIcon } from '../../core/custom-icon/custom-icon';

interface NavItem {
  label: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CustomIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  userName = input<string>('User Name');

  collapsed = signal<boolean>(true);
  toggleCollapse() {
    this.collapsed.set(!this.collapsed());
  }

  menuItems: NavItem[] = [
    { label: 'Lorem', icon: 'dashboard', routerLink: '/dashboard' },
    { label: 'Lorem', icon: 'bug', routerLink: '/assets' },
    { label: 'Lorem', icon: 'wysiwyg', routerLink: '/reports' },
    { label: 'Lorem', icon: 'vulnerabilities', routerLink: '/vulnerabilities' },
    { label: 'Lorem', icon: 'bug_report', routerLink: '/remediations' },
    { label: 'Lorem', icon: 'notifications', routerLink: '/alerts' },
  ];

  settingsNavItems: NavItem[] = [
    { label: 'Lorem', icon: 'settings', routerLink: '/settings' },
    { label: 'Lorem', icon: 'help_outline', routerLink: '/help' },
  ];
}
