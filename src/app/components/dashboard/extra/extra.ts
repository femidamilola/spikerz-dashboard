import { Component, input } from '@angular/core';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { IInfoCard, InfoCard } from '../info-card/info-card';

type InfoListItem = {
  label: string;
  value: string;
  icon?: string;
};

@Component({
  selector: 'app-extra',
  imports: [CustomIcon, InfoCard],
  templateUrl: './extra.html',
  styleUrl: './extra.scss',
})
export class AdditionalInformation {
  content = input.required<string>();

  informationList: InfoListItem[] = [
    { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { label: 'Lorem Ipsum Dolor', value: 'Ut' },
    { label: 'Lorem Ipsum Dolor', value: 'Eros' },
    {
      label: 'Lorem Ipsum Dolor',
      icon: 'checkmark',
      value: 'Yes',
    },
    { label: 'Lorem Ipsum Dolor', value: 'Sit' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
  ];

  cards: IInfoCard[] = [
    {
      title: 'Card Title 1',
      title2: 'Server',
      subtitle: 'Server',
      icon: 'server',
      content: 'Card Content 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
    },
    {
      title: 'Card Title 2',
      title2: 'Server',
      subtitle: 'Server',
      icon: 'server',
      content: 'Card Content 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
    },
  ];
}
