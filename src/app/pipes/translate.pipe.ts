import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  private readonly i18nService = inject(I18nService);

  transform(key: string, ...args: any[]): string {
    const text = this.i18nService.getText(key);

    if (args.length > 0) {
      return this.replacePlaceholders(text, args);
    }

    return text;
  }

  private replacePlaceholders(text: string, args: any[]): string {
    return text.replace(/\{(\d+)\}/g, (match, index) => {
      const argIndex = parseInt(index, 10);
      return args[argIndex] !== undefined ? String(args[argIndex]) : match;
    });
  }
}
