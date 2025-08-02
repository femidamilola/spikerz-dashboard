import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Description } from '../../components/dashboard/description/description';
import { AdditionalInformation } from '../../components/dashboard/extra/extra';
import { AssetFlow } from '../../components/dashboard/asset-flow/asset-flow';
import { ContextualRisk } from '../../components/dashboard/contextual-risk/contextual-risk';
import { RiskSummary } from '../../components/dashboard/risk-summary/risk-summary';
import { DashboardState } from '../../services/dashboard-state';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    Description,
    AdditionalInformation,
    AssetFlow,
    ContextualRisk,
    RiskSummary,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  isSidebarCollapsed = signal<boolean>(true);

  constructor(
    private dashboardState: DashboardState,
    public i18nService: I18nService
  ) {}

  get description(): string {
    return this.i18nService.description.content;
  }

  get extra(): string {
    return this.i18nService.extra.content;
  }

  ngOnInit() {
    this.dashboardState.isSidebarCollapsed$
      .pipe(takeUntil(this.destroy$))
      .subscribe((collapsed) => {
        this.isSidebarCollapsed.set(collapsed);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
