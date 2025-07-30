import { Component, input } from '@angular/core';
import { CustomIcon } from '../../core/custom-icon/custom-icon';

@Component({
  selector: 'app-extra',
  imports: [CustomIcon],
  templateUrl: './extra.html',
  styleUrl: './extra.scss',
})
export class Extra {
  content = input.required<string>();

  infoList = [
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
}
