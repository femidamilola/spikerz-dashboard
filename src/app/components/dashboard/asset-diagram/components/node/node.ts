import { Component, input } from '@angular/core';
import { Badge } from '../badge/badge';
import { CustomIcon } from '../../../../core/custom-icon/custom-icon';

export type IBadge = {
  color: string;
  icon: string;
};

@Component({
  selector: 'app-node',
  imports: [Badge, CustomIcon],
  templateUrl: './node.html',
  styleUrl: './node.scss',
})
export class Node {
  title = input.required<string>();
  color = input.required<string>();
  icon = input.required<string>();
  badge = input<IBadge>();
  ip = input<string>();
}
