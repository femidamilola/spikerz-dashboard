import { Injectable } from '@angular/core';
import { TEXT_CONSTANTS, TextConstants } from '../constants/text-constants';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private currentLanguage = 'en';
  private texts: TextConstants = TEXT_CONSTANTS;

  constructor() {}

  getText(keyPath: string): string {
    const keys = keyPath.split('.');
    let value: any = this.texts;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Text key not found: ${keyPath}`);
        return keyPath;
      }
    }

    return typeof value === 'string' ? value : keyPath;
  }

  getNavTexts() {
    return this.texts.NAV;
  }

  getDashboardTexts() {
    return this.texts.DASHBOARD;
  }

  getDescriptionTexts() {
    return this.texts.DESCRIPTION;
  }

  getExtraTexts() {
    return this.texts.EXTRA;
  }

  getRiskSummaryTexts() {
    return this.texts.RISK_SUMMARY;
  }

  getContextualRiskTexts() {
    return this.texts.CONTEXTUAL_RISK;
  }

  getAssetFlowTexts() {
    return this.texts.ASSET_FLOW;
  }

  getAssetNames() {
    return this.texts.ASSETS;
  }

  getCommonTexts() {
    return this.texts.COMMON;
  }

  getErrorTexts() {
    return this.texts.ERRORS;
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
