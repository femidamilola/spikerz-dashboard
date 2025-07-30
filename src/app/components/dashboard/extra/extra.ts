import { Component, input } from '@angular/core';

@Component({
  selector: 'app-extra',
  imports: [],
  templateUrl: './extra.html',
  styleUrl: './extra.scss',
})
export class Extra {
  content = input.required<string>();
}
