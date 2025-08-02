import { Pipe, PipeTransform } from '@angular/core';
import { TextService } from '../services/text.service';

@Pipe({
  name: 'text',
  pure: true,
})
export class TextPipe implements PipeTransform {
  constructor(private textService: TextService) {}

  transform(keyPath: string): string {
    return this.textService.getText(keyPath);
  }
}
