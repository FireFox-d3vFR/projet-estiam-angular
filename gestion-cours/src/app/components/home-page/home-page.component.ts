import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  courses: CourseModel[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses;
    });
  }
}
