import { Component, input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICON_REGISTRY } from './icon-registry';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-icon',
  imports: [],
  templateUrl: './custom-icon.html',
  styleUrl: './custom-icon.scss',
})
export class CustomIcon implements OnInit {
  size = input<string>('20px');
  label = input.required<string>();
  svgContent: SafeHtml | null = null;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    const rawSvg = ICON_REGISTRY[this.label()];
    if (!rawSvg) {
      console.warn(`Icon "${this.label()}" not found in registry`);
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 12h3v8h14v-8h3L12 2z"/>
      </svg>
    `);
      return;
    }

    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }
}
