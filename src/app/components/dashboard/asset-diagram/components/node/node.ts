import { Component, input, ElementRef, viewChild } from '@angular/core';
import { Badge } from '../badge/badge';
import { CustomIcon } from '../../../../core/custom-icon/custom-icon';
import { Popover, PopoverData } from '../../../../core/popover/popover';

export type IBadge = {
  color: string;
  icon: string;
};

@Component({
  selector: 'app-node',
  imports: [Badge, CustomIcon, Popover],
  templateUrl: './node.html',
  styleUrl: './node.scss',
})
export class Node {
  title = input.required<string>();
  color = input.required<string>();
  icon = input.required<string>();
  badge = input<IBadge>();
  ip = input<string>();
  popoverData = input<PopoverData>();

  // View references
  nodeContainer = viewChild.required<ElementRef<HTMLElement>>('nodeContainer');

  // Popover state
  isPopoverVisible = false;

  get referenceElement(): HTMLElement {
    return this.nodeContainer().nativeElement;
  }

  onMouseEnter() {
    if (this.popoverData()) {
      this.isPopoverVisible = true;
    }
  }

  onMouseLeave() {
    this.isPopoverVisible = false;
  }

  onPopoverClose() {
    this.isPopoverVisible = false;
  }
}
