import { Component } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,

  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  courses:  Course[] = []; // Liste des cours

  addCourse(course: Course) {
    this.courses.push(course); // Ajouter le cours à la liste
  }

  // Méthode pour modifier et supprimer des cours peuvent être ajoutées ici..
}
