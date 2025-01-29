import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  // Liste des cours
  courses: CourseModel[] = [];
  newCourseAdded = false; // Indicateur pour les nouveaux cours ajoutés

  // Fonction pour ajouter un cours
  addCourse(
    course: { name: string; description: string; duration: number },
    form: any
  ) {
    const newCourse: CourseModel = {
      id: this.courses.length + 1,
      name: course.name,
      description: course.description,
      duration: `${course.duration} hours`,
    };
    this.courses.push(newCourse);
    this.newCourseAdded = true; // Mettre à jour l'indicateur
    form.reset();
  }
}
