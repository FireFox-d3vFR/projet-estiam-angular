import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseName: string = 'Angular Avancé';
  isDisabled: boolean = true;
  courseDescription: string = '';
  courses: string[];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  startCourse() {
    console.log('Cours commencé !');
  }

  onCourseSelected(course: string) {
    console.log('Cours sélectionné:', course);
  }
}
