import { Injectable } from '@angular/core';
import { TEXT_CONSTANTS, TextConstants } from '../constants/text-constants';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private currentLanguage = 'en';
  private texts: TextConstants = TEXT_CONSTANTS;

  constructor() {}

  /**
   * Get text by nested key path (e.g., 'NAV.DASHBOARD')
   */
  getText(keyPath: string): string {
    const keys = keyPath.split('.');
    let value: any = this.texts;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Text key not found: ${keyPath}`);
        return keyPath; // Return the key path if not found
      }
    }

    return typeof value === 'string' ? value : keyPath;
  }

  /**
   * Get navigation texts
   */
  getNavTexts() {
    return this.texts.NAV;
  }

  /**
   * Get dashboard texts
   */
  getDashboardTexts() {
    return this.texts.DASHBOARD;
  }

  /**
   * Get description texts
   */
  getDescriptionTexts() {
    return this.texts.DESCRIPTION;
  }

  /**
   * Get extra section texts
   */
  getExtraTexts() {
    return this.texts.EXTRA;
  }

  /**
   * Get risk summary texts
   */
  getRiskSummaryTexts() {
    return this.texts.RISK_SUMMARY;
  }

  /**
   * Get contextual risk texts
   */
  getContextualRiskTexts() {
    return this.texts.CONTEXTUAL_RISK;
  }

  /**
   * Get asset flow texts
   */
  getAssetFlowTexts() {
    return this.texts.ASSET_FLOW;
  }

  /**
   * Get asset names
   */
  getAssetNames() {
    return this.texts.ASSETS;
  }

  /**
   * Get common texts
   */
  getCommonTexts() {
    return this.texts.COMMON;
  }

  /**
   * Get error messages
   */
  getErrorTexts() {
    return this.texts.ERRORS;
  }

  /**
   * Set current language (for future multilingual support)
   */
  setLanguage(language: string): void {
    this.currentLanguage = language;
    // In the future, this would load different language files
  }

  /**
   * Get current language
   */
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
