import { Component, input } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {
  content = input.required<string>();
}
