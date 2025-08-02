import { Component } from '@angular/core';
import { I18nService } from '../../../services/i18n.service';
import { MOCK_ASSETS, Asset } from '../../../constants/app-constants';

@Component({
  selector: 'app-risk-summary',
  imports: [],
  templateUrl: './risk-summary.html',
  styleUrl: './risk-summary.scss',
})
export class RiskSummary {
  allAssets: Asset[] = MOCK_ASSETS;

  get riskData() {
    return this.computeRiskSummary();
  }

  private computeRiskSummary() {
    const summary = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    };

    this.allAssets.forEach((asset) => {
      if (asset.isCritical) {
        summary.critical++;
      } else if (asset.vulnerabilities.length > 2) {
        summary.high++;
      } else if (asset.vulnerabilities.length === 2) {
        summary.medium++;
      } else if (asset.vulnerabilities.length === 1) {
        summary.low++;
      }
    });

    return summary;
  }

  get totalRisks(): number {
    const data = this.riskData;
    return data.critical + data.high + data.medium + data.low;
  }

  get donutChartStyle(): string {
    const data = this.riskData;
    const total = this.totalRisks;

    if (total === 0) {
      return 'background: #e0e0e0;'; // Gray color for no data
    }

    const criticalPercent = (data.critical / total) * 100;
    const highPercent = (data.high / total) * 100;
    const mediumPercent = (data.medium / total) * 100;
    const lowPercent = (data.low / total) * 100;

    let currentPercent = 0;
    const segments = [];

    if (data.critical > 0) {
      segments.push(
        `#c62828 ${currentPercent}% ${currentPercent + criticalPercent}%`
      );
      currentPercent += criticalPercent;
    }

    if (data.high > 0) {
      segments.push(
        `#f57c00 ${currentPercent}% ${currentPercent + highPercent}%`
      );
      currentPercent += highPercent;
    }

    if (data.medium > 0) {
      segments.push(
        `#ffb300 ${currentPercent}% ${currentPercent + mediumPercent}%`
      );
      currentPercent += mediumPercent;
    }

    if (data.low > 0) {
      segments.push(
        `#43a047 ${currentPercent}% ${currentPercent + lowPercent}%`
      );
    }

    return `background: conic-gradient(${segments.join(', ')});`;
  }

  constructor(public i18nService: I18nService) {}
}
