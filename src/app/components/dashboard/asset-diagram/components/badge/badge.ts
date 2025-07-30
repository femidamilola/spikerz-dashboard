import { Component, input } from '@angular/core';
import { CustomIcon } from '../../../../core/custom-icon/custom-icon';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  imports: [CustomIcon],
})
export class Badge {
  color = input.required<string>();
  icon = input.required<string>();
}
