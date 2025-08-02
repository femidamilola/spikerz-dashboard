import { Component } from '@angular/core';
import { AssetDiagram } from '../asset-diagram/asset-diagram';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-asset-flow',
  imports: [AssetDiagram],
  templateUrl: './asset-flow.html',
  styleUrl: './asset-flow.scss',
})
export class AssetFlow {
  constructor(public i18nService: I18nService) {}
}
