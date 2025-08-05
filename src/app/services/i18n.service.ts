import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APP_CONFIG, SupportedLanguage } from '../constants/app-constants';

// Type definitions for i18n structure
export interface I18nTexts {
  nav: {
    dashboard: string;
    assets: string;
    reports: string;
    vulnerabilities: string;
    integration: string;
    report: string;
    help: string;
    settings: string;
    alerts: string;
    profile: string;
    user_name_1: string;
    user_name_2: string;
  };
  dashboard: {
    title: string;
    lorem_ipsum_dolor_sit: string;
    lorem_lorem_lorem: string;
  };
  description: {
    title: string;
    content: string;
  };
  extra: {
    title: string;
    subtitle: string;
    content: string;
    info: {
      label1: string;
      label2: string;
      label3: string;
      label4: string;
      label5: string;
      label6: string;
      value1: string;
      value2: string;
      value3: string;
      value4: string;
      value5: string;
      value6: string;
    };
    cards: {
      title1: string;
      title2: string;
      server: string;
      content1: string;
      content2: string;
      description1: string;
      description2: string;
    };
  };
  risk_summary: {
    title: string;
    levels: {
      critical: string;
      high: string;
      medium: string;
      low: string;
    };
  };
  contextual_risk: {
    title: string;
    table_headers: {
      asset: string;
      contextual_risk: string;
    };
    pagination: {
      showing: string;
      of: string;
    };
  };
  asset_flow: {
    title: string;
    legend: {
      critical: string;
      warning: string;
      low: string;
    };
  };
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    close: string;
    previous: string;
    next: string;
  };
  errors: {
    generic: string;
    network: string;
    not_found: string;
    unauthorized: string;
    validation: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly http = inject(HttpClient);

  readonly currentLanguage = signal<SupportedLanguage>(
    APP_CONFIG.DEFAULT_LANGUAGE
  );

  private readonly textsSubject = new BehaviorSubject<I18nTexts | null>(null);
  public readonly texts$ = this.textsSubject.asObservable();

  readonly texts = signal<I18nTexts | null>(null);

  constructor() {
    this.loadLanguage(this.currentLanguage()).subscribe();
  }

  /**
   * Load translations for a specific language
   */
  loadLanguage(language: SupportedLanguage): Observable<I18nTexts> {
    return this.http.get<I18nTexts>(`/app/i18n/${language}.json`).pipe(
      map((translations) => {
        this.currentLanguage.set(language);
        this.texts.set(translations);
        this.textsSubject.next(translations);
        return translations;
      }),
      catchError((error) => {
        console.error(`Failed to load language ${language}:`, error);
        // Fallback to embedded English translations
        return of(this.getFallbackTranslations());
      })
    );
  }

  /**
   * Switch language and reload translations
   */
  switchLanguage(language: SupportedLanguage): Observable<I18nTexts> {
    return this.loadLanguage(language);
  }

  /**
   * Get text by nested key path (e.g., 'nav.dashboard')
   */
  getText(keyPath: string): string {
    const currentTexts = this.texts();
    if (!currentTexts) {
      return keyPath; // Return key if no translations loaded
    }

    const keys = keyPath.split('.');
    let value: any = currentTexts;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Translation key not found: ${keyPath}`);
        return keyPath;
      }
    }

    return typeof value === 'string' ? value : keyPath;
  }

  get nav() {
    return this.texts()?.nav || this.getFallbackTranslations().nav;
  }

  get dashboard() {
    return this.texts()?.dashboard || this.getFallbackTranslations().dashboard;
  }

  get description() {
    return (
      this.texts()?.description || this.getFallbackTranslations().description
    );
  }

  get extra() {
    return this.texts()?.extra || this.getFallbackTranslations().extra;
  }

  get riskSummary() {
    return (
      this.texts()?.risk_summary || this.getFallbackTranslations().risk_summary
    );
  }

  get contextualRisk() {
    return (
      this.texts()?.contextual_risk ||
      this.getFallbackTranslations().contextual_risk
    );
  }

  get assetFlow() {
    return (
      this.texts()?.asset_flow || this.getFallbackTranslations().asset_flow
    );
  }

  get common() {
    return this.texts()?.common || this.getFallbackTranslations().common;
  }

  get errors() {
    return this.texts()?.errors || this.getFallbackTranslations().errors;
  }

  private getFallbackTranslations(): I18nTexts {
    return {
      nav: {
        dashboard: 'Dashboard',
        assets: 'Lorem',
        reports: 'Lorem',
        vulnerabilities: 'Vulnerabilities',
        integration: 'Integration',
        report: 'Report',
        help: 'Help',
        settings: 'Settings',
        alerts: 'Alerts',
        profile: 'Profile',
        user_name_1: 'Lorem',
        user_name_2: 'Lorem',
      },
      dashboard: {
        title: 'Dashboard',
        lorem_ipsum_dolor_sit: 'Lorem Ipsum Dolor Sit',
        lorem_lorem_lorem: 'Lorem Lorem Lorem',
      },
      description: {
        title: 'Description',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      },
      extra: {
        title: 'Extra',
        subtitle: 'Lorem Ipsum Dolor Sit',
        content:
          'Additional information about the system configuration and security posture. This section provides comprehensive details about the current state of the infrastructure and any relevant technical specifications that may impact security assessments.',
        info: {
          label1: 'Lorem Ipsum Dolor',
          label2: 'Lorem Ipsum Dolor',
          label3: 'Lorem Ipsum Dolor',
          label4: 'Lorem Ipsum Dolor',
          label5: 'Lorem Ipsum Dolor',
          label6: 'Lorem Ipsum Dolor',
          value1: '10/19/2017',
          value2: 'Ut',
          value3: 'Eros',
          value4: 'Yes',
          value5: 'Sit',
          value6: 'Lorem Ipsum Dolor',
        },
        cards: {
          title1: 'Card Title 1',
          title2: 'Card Title 2',
          server: 'Server',
          content1: 'Card Content 1',
          content2: 'Card Content 2',
          description1:
            'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
          description2:
            'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
        },
      },
      risk_summary: {
        title: 'Contextual Risk',
        levels: {
          critical: 'Critical',
          high: 'High',
          medium: 'Medium',
          low: 'Low',
        },
      },
      contextual_risk: {
        title: 'Contextual Risk Assessment',
        table_headers: {
          asset: 'Asset',
          contextual_risk: 'Contextual Risk',
        },
        pagination: {
          showing: 'Showing',
          of: 'of',
        },
      },
      asset_flow: {
        title: 'Asset Flow Diagram',
        legend: {
          critical: 'Critical Risk',
          warning: 'Warning',
          low: 'Low Risk',
        },
      },
      common: {
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        cancel: 'Cancel',
        confirm: 'Confirm',
        save: 'Save',
        edit: 'Edit',
        delete: 'Delete',
        close: 'Close',
        previous: 'Previous',
        next: 'Next',
      },
      errors: {
        generic: 'An unexpected error occurred',
        network: 'Network connection error',
        not_found: 'Resource not found',
        unauthorized: 'Unauthorized access',
        validation: 'Validation error',
      },
    };
  }
}
