import { Component, input, signal, computed } from '@angular/core';
import { CustomIcon } from '../../core/custom-icon/custom-icon';

export type IInfoCard = {
  title: string;
  title2: string;
  subtitle: string;
  icon: string;
  content: string;
  description: string;
};

@Component({
  selector: 'app-info-card',
  imports: [CustomIcon],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
})
export class InfoCard {
  content = input.required<IInfoCard>();

  isExpanded = signal(false);

  hasDescription = computed(() => {
    return (
      this.content().description && this.content().description.trim().length > 0
    );
  });

  isClickable = computed(() => {
    return this.hasDescription();
  });

  toggleExpanded() {
    if (this.isClickable()) {
      this.isExpanded.update((expanded) => !expanded);
    }
  }
}
