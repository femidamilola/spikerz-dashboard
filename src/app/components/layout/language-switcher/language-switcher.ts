import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../services/i18n.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import {
  SupportedLanguage,
  APP_CONFIG,
} from '../../../constants/app-constants';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="language-switcher">
      <label for="language-select">{{ 'nav.language' | translate }}:</label>
      <select
        id="language-select"
        [value]="i18nService.currentLanguage()"
        (change)="onLanguageChange($event)"
        class="language-select"
      >
        @for (lang of supportedLanguages; track lang) {
        <option [value]="lang">{{ getLanguageName(lang) }}</option>
        }
      </select>
    </div>
  `,
  styles: [
    `
      .language-switcher {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
      }

      .language-select {
        padding: 0.25rem 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
      }
    `,
  ],
})
export class LanguageSwitcher {
  supportedLanguages = APP_CONFIG.SUPPORTED_LANGUAGES;

  constructor(public i18nService: I18nService) {}

  onLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value as SupportedLanguage;
    this.i18nService.switchLanguage(language).subscribe();
  }

  getLanguageName(lang: SupportedLanguage): string {
    const names: Record<SupportedLanguage, string> = {
      en: 'English',
      es: 'Español',
      fr: 'Français',
      de: 'Deutsch',
    };
    return names[lang] || lang;
  }
}
