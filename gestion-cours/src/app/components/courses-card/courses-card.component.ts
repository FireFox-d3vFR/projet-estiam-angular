import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  standalone: false,

  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss']
})
export class CoursesCardComponent {
  @Input() course!: { id: number, name: string, description: string, duration: string, image: string };
  @Input() isNew: boolean = false;

  getImagePath(image: string): string {
    return `assets/images/${image}`;
  }
}
