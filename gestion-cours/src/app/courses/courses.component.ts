import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses =  [
    { name: 'Developpement Frontend', description: "Cours de frontend avec l'utilisation de Angular" },
    { name: 'Developpement Backend', description: "Introduction sur l'utilisation de Next.js"}
  ]
}
