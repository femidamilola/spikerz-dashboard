import {
  Component,
  ElementRef,
  input,
  output,
  viewChild,
  effect,
  DestroyRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';
import { CustomIcon } from '../custom-icon/custom-icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IBadge } from '../../dashboard/asset-diagram/components/node/node';
import { Badge } from '../../dashboard/asset-diagram/components/badge/badge';

export type PopoverType = 'vulnerability' | 'normal';

export interface PopoverData {
  title: string;
  content: string;
  type: PopoverType;
  vulnerabilityLevel?: 'critical' | 'high' | 'medium' | 'low';
  additionalInfo?: { label: string; value: string; isHtml?: boolean }[];
  badge?: IBadge;
}

@Component({
  selector: 'app-popover',
  imports: [CommonModule, CustomIcon, Badge],
  templateUrl: './popover.html',
  styleUrl: './popover.scss',
  standalone: true,
})
export class Popover {
  private destroyRef = inject(DestroyRef);
  private sanitizer = inject(DomSanitizer);

  // Inputs
  data = input.required<PopoverData>();
  referenceElement = input.required<HTMLElement>();
  isVisible = input.required<boolean>();

  // Outputs
  onClose = output<void>();

  // View references
  popoverElement = viewChild.required<ElementRef<HTMLElement>>('popover');
  arrowElement = viewChild<ElementRef<HTMLElement>>('arrow');

  constructor() {
    // Update position when visibility or reference element changes
    effect(() => {
      if (this.isVisible() && this.referenceElement()) {
        this.updatePosition();
      }
    });
  }

  private async updatePosition() {
    const popoverEl = this.popoverElement().nativeElement;
    const referenceEl = this.referenceElement();
    const arrowEl = this.arrowElement()?.nativeElement;

    if (!popoverEl || !referenceEl) return;

    const middleware = [offset(10), flip(), shift({ padding: 8 })];

    if (arrowEl) {
      middleware.push(arrow({ element: arrowEl }));
    }

    const { x, y, placement, middlewareData } = await computePosition(
      referenceEl,
      popoverEl,
      {
        placement: 'top',
        middleware,
      }
    );

    // Apply position to popover
    Object.assign(popoverEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    // Position arrow if it exists
    if (arrowEl && middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]] as string;

      Object.assign(arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      });
    }
  }

  getVulnerabilityIcon(): string {
    const level = this.data().vulnerabilityLevel;
    switch (level) {
      case 'critical':
        return 'shield_x';
      case 'high':
        return 'shield_exclamation';
      case 'medium':
        return 'shield_alert';
      case 'low':
        return 'shield_check';
      default:
        return 'shield';
    }
  }

  getVulnerabilityClass(): string {
    return `vulnerability-${this.data().vulnerabilityLevel || 'medium'}`;
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
