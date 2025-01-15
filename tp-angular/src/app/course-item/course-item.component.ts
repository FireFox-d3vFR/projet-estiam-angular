import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  standalone: false,

  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {
  @Input() course!: string; // Utiliser le point d'exclamation pour indiquer que la propriété sera initialisée plus tard
  @Output() courseSelected = new EventEmitter<string>();

  selectCourse() {
    this.courseSelected.emit(this.course);
  }
}
