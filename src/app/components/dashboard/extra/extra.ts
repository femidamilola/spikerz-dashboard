import { Component, input } from '@angular/core';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { IInfoCard, InfoCard } from '../info-card/info-card';
import { I18nService } from '../../../services/i18n.service';
import {
  InfoListItem,
  MOCK_INFO_LIST_STRUCTURE,
  MOCK_CARDS_STRUCTURE,
} from '../../../constants/app-constants';

@Component({
  selector: 'app-extra',
  imports: [CustomIcon, InfoCard],
  templateUrl: './extra.html',
  styleUrl: './extra.scss',
})
export class AdditionalInformation {
  content = input.required<string>();

  constructor(public i18nService: I18nService) {}

  get informationList(): InfoListItem[] {
    const extra = this.i18nService.extra;
    return MOCK_INFO_LIST_STRUCTURE.map((item) => ({
      label: this.i18nService.getText(item.labelKey),
      value: this.i18nService.getText(item.valueKey),
      icon: item.icon,
    }));
  }

  get cards(): IInfoCard[] {
    const extra = this.i18nService.extra;
    return MOCK_CARDS_STRUCTURE.map((cardStructure) => ({
      title: this.i18nService.getText(cardStructure.titleKey),
      title2: this.i18nService.getText(cardStructure.title2Key),
      subtitle: this.i18nService.getText(cardStructure.subtitleKey),
      icon: cardStructure.icon,
      content: this.i18nService.getText(cardStructure.contentKey),
      description: this.i18nService.getText(cardStructure.descriptionKey),
    }));
  }
}
