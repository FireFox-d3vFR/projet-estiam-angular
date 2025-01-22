import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  standalone: false,

  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.scss'
})
export class CoursesCardComponent {
  @Input() course!: { id: number, title: string, description: string, duration: string };
}
