import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { DashboardState } from '../../../services/dashboard-state';
import { I18nService } from '../../../services/i18n.service';
import {
  NavItem,
  NAV_MENU_ITEMS,
  NAV_SETTINGS_ITEMS,
} from '../../../constants/app-constants';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CustomIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly collapseButtonSize = '11px';
  userName = input<string>('User Name');

  collapsed = signal<boolean>(false);

  constructor(
    private dashboardState: DashboardState,
    public i18nService: I18nService
  ) {}

  toggleCollapse() {
    const newCollapsedState = !this.collapsed();
    this.collapsed.set(newCollapsedState);
    this.dashboardState.setSidebarCollapsed(newCollapsedState);
  }

  get menuItems(): NavItem[] {
    return NAV_MENU_ITEMS.map((item) => ({
      ...item,
      label: this.i18nService.getText(item.key || ''),
    }));
  }

  get settingsNavItems(): NavItem[] {
    const nav = this.i18nService.nav;
    return NAV_SETTINGS_ITEMS.map((item) => ({
      ...item,
      label: this.i18nService.getText(item.key || ''),
    }));
  }
}
