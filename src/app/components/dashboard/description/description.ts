import { Component, input } from '@angular/core';
import { I18nService } from '../../../services/i18n.service';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {
  content = input.required<string>();

  constructor(public i18nService: I18nService) {}
}
