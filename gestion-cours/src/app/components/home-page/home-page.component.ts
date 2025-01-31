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
  newCourseAdd: number[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadNewCourseAdd();
  }

  loadCourses(): void {
    this.courseService.getPublishedCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3);
    });
  }

  loadNewCourseAdd(): void {
    if (typeof localStorage !== 'undefined') {
      const storeAdd = localStorage.getItem('newCourseAdd');
      if (storeAdd) {
        this.newCourseAdd = JSON.parse(storeAdd);
      }
    }
  }

  isNewCourse(courseId: number): boolean {
    return this.newCourseAdd.includes(courseId);
  }
}
