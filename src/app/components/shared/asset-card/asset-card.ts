// src/app/components/shared/asset-card/asset-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.html',
  styleUrls: ['./asset-card.scss'],
})
export class AssetCardComponent {
  @Input() title: string = 'Lorem T';
  @Input() serverName: string = 'Server';
  @Input() description: string = 'Lorem Ipsum Dolor Sit Amet Consectetur.';
}
