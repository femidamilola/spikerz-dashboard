import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asset } from '../constants/app-constants';

@Injectable({
  providedIn: 'root',
})
export class DashboardState {
  private readonly _isDrawerOpen = new BehaviorSubject<boolean>(false);
  readonly isDrawerOpen$ = this._isDrawerOpen.asObservable();

  private readonly _selectedAsset = new BehaviorSubject<Asset | null>(null);
  readonly selectedAsset$ = this._selectedAsset.asObservable();

  private readonly _isSidebarCollapsed = new BehaviorSubject<boolean>(false);
  readonly isSidebarCollapsed$ = this._isSidebarCollapsed.asObservable();

  setSidebarCollapsed(collapsed: boolean) {
    this._isSidebarCollapsed.next(collapsed);
  }

  openDrawerWithAsset(asset: Asset) {
    this._selectedAsset.next(asset);
    this._isDrawerOpen.next(true);
  }

  closeDrawer() {
    this._isDrawerOpen.next(false);
    this._selectedAsset.next(null);
  }
}
