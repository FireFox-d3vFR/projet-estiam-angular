import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  // Liste des cours
  courses = [
    { id: 1, title: 'Angular Basics', description: 'Introduction to Angular', duration: '3 hours'},
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular', duration: '5 hours'},
    // Ajoutez d'autres cours ici
  ];
}
