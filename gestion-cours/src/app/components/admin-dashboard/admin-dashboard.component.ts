import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,

  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
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

  addCourse(course: CourseModel): void {
    this.courseService.addCourse(course).subscribe(() => {
      this.loadCourses();
    });
  }

  updateCourse(course: CourseModel): void {
    this.courseService.updateCourse(course).subscribe(() => {
      this.loadCourses();
    });
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.loadCourses();
    });
  }
}
