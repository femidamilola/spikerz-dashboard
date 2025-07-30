import { Component, input } from '@angular/core';
import { DiagramNode } from '../../asset-diagram';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.html',
  styleUrl: './arrow.scss',
})
export class Arrow {
  from = input.required<DiagramNode>();
  to = input.required<DiagramNode>();
  isMultiple = input<boolean>(false);

  getArrowImage() {
    return this.isMultiple() ? '/images/arrow-double.png' : '/images/arrow.png';
  }
}
