// src/app/components/layout/vulnerabilities-drawer/vulnerabilities-drawer.component.ts
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Asset,
  DashboardStateService,
} from '../../../services/dashboard-state';
// import { VulnerabilityPreviewCardComponent } from '../../shared/vulnerability-preview-card/vulnerability-preview-card';

@Component({
  selector: 'app-vulnerabilities-drawer',
  templateUrl: './vulnerabilities-drawer.html',
  styleUrls: ['./vulnerabilities-drawer.scss'],
  // imports: [VulnerabilityPreviewCardComponent],
})
export class VulnerabilitiesDrawerComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean | null = false;
  @Output() drawerClosed = new EventEmitter<void>();

  selectedAsset: Asset | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private dashboardStateService: DashboardStateService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.dashboardStateService.selectedAsset$.subscribe((asset) => {
        this.selectedAsset = asset;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeDrawer() {
    this.drawerClosed.emit();
  }
}
