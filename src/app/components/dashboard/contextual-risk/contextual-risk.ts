// src/app/components/dashboard/contextual-risk/contextual-risk.component.ts
import { Component } from '@angular/core';
import {
  Asset,
  DashboardStateService,
} from '../../../services/dashboard-state';
import { CustomIcon } from '../../core/custom-icon/custom-icon';

@Component({
  selector: 'app-contextual-risk',
  templateUrl: './contextual-risk.html',
  styleUrls: ['./contextual-risk.scss'],
  imports: [CustomIcon],
})
export class ContextualRisk {
  risks: Asset[] = [
    {
      name: 'Loremipsumdolorsit',
      ip: '192.168.1.1',
      isCritical: true,
      vulnerabilities: ['1.2.3.4', '1.2.3.5', '1.2.3.6'],
    },
    {
      name: 'Loremipsumdolorsit002',
      ip: '192.168.1.2',
      isCritical: true,
      vulnerabilities: ['2.3.4.5', '2.3.4.6'],
    },
  ];

  constructor(private dashboardStateService: DashboardStateService) {}

  onAssetClick(asset: Asset) {
    this.dashboardStateService.openDrawerWithAsset(asset);
  }
}
