// src/app/services/dashboard-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define a simple type for our asset data
export type Asset = {
  name: string;
  ip: string;
  isCritical: boolean;
  vulnerabilities: string[];
};

@Injectable({
  providedIn: 'root',
})
export class DashboardStateService {
  private readonly _isDrawerOpen = new BehaviorSubject<boolean>(false);
  readonly isDrawerOpen$ = this._isDrawerOpen.asObservable();

  private readonly _selectedAsset = new BehaviorSubject<Asset | null>(null);
  readonly selectedAsset$ = this._selectedAsset.asObservable();

  constructor() {}

  openDrawerWithAsset(asset: Asset) {
    this._selectedAsset.next(asset);
    this._isDrawerOpen.next(true);
  }

  closeDrawer() {
    this._isDrawerOpen.next(false);
    this._selectedAsset.next(null);
  }
}
