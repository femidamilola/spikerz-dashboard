import { Component } from '@angular/core';
import { DashboardState } from '../../../services/dashboard-state';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { I18nService } from '../../../services/i18n.service';
import { Asset, MOCK_ASSETS } from '../../../constants/app-constants';

@Component({
  selector: 'app-contextual-risk',
  templateUrl: './contextual-risk.html',
  styleUrl: './contextual-risk.scss',
  imports: [CustomIcon],
})
export class ContextualRisk {
  allRisks: Asset[] = MOCK_ASSETS;

  // Pagination properties
  currentPage = 1;
  itemsPerPage = 2;

  get risks(): Asset[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allRisks.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.allRisks.length / this.itemsPerPage);
  }

  get totalItems(): number {
    return this.allRisks.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get canGoToPrevious(): boolean {
    return this.currentPage > 1;
  }

  get canGoToNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  previousPage(): void {
    if (this.canGoToPrevious) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.canGoToNext) {
      this.currentPage++;
    }
  }

  constructor(
    private dashboardStateService: DashboardState,
    public i18nService: I18nService
  ) {}

  onAssetClick(asset: Asset) {
    this.dashboardStateService.openDrawerWithAsset(asset);
  }
}
