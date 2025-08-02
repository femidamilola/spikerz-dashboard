import {
  Component,
  input,
  AfterViewInit,
  ElementRef,
  viewChild,
} from '@angular/core';
import { ICON_REGISTRY } from './icon-registry';

@Component({
  selector: 'app-custom-icon',
  imports: [],
  templateUrl: './custom-icon.html',
  styleUrl: './custom-icon.scss',
})
export class CustomIcon implements AfterViewInit {
  private readonly DEFAULT_ICON_SIZE = '20px';
  private readonly DEFAULT_FALLBACK_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L2 12h3v8h14v-8h3L12 2z"/>
    </svg>
  `;

  size = input<string>(this.DEFAULT_ICON_SIZE);
  label = input.required<string>();

  iconContainer = viewChild<ElementRef<HTMLDivElement>>('iconContainer');

  constructor() {}

  async ngAfterViewInit() {
    const rawSvg = ICON_REGISTRY[this.label()];
    if (!rawSvg) {
      // this.svgContent = this.sanitizer.bypassSecurityTrustHtml(
      //   this.DEFAULT_FALLBACK_ICON
      // );
      this.renderIcon(this.DEFAULT_FALLBACK_ICON);
      return;
    }

    // this.svgContent = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
    this.renderIcon(rawSvg);
  }

  async renderIcon(rawSvg: string) {
    this.iconContainer()!.nativeElement.innerHTML = '';
    const div = this.iconContainer()!.nativeElement;
    div.innerHTML = rawSvg.trim();
    const svg = div.querySelector('svg');
    if (svg) {
      svg.classList.add('custom-icon-svg'); // Ensure class is applied
    }
  }
}
