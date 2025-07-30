import { Component } from '@angular/core';
import { AssetDiagram } from '../asset-diagram/asset-diagram';

@Component({
  selector: 'app-asset-flow',
  imports: [AssetDiagram],
  templateUrl: './asset-flow.html',
  styleUrl: './asset-flow.scss',
})
export class AssetFlow {}
