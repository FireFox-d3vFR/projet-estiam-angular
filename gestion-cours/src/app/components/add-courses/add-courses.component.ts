import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-courses',
  standalone: false,

  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent {
  newCourse: CourseModel = { id: 0, name: '', description: '', duration: '' };
  successMessage: string | null = null;

  constructor(private courseService: CourseService, private router: Router) {}

  addCourse(): void {
    this.courseService.addCourse(this.newCourse).subscribe(() => {
      this.successMessage = 'Le cours a été ajouté avec succès !';
      this.router.navigate(['/courses']);
    })
  }
}
