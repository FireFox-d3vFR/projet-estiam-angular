import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  // Liste des cours
  courses: CourseModel[] = [];
  newCourseAdd: number[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadNewCourseAdd();
  }

  loadCourses(): void {
    this.courseService.getPublishedCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses;
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

  addCourse(courseData: any, form: any): void {
    const newCourse: CourseModel = {
      id: this.courses.length +1,
      name: courseData.name,
      description: courseData.description,
      duration: courseData.duration,
      createdAt: new Date().toISOString(),
      published: false,
      image: courseData.image
    };

    this.courseService.addCourse(newCourse).subscribe((course: CourseModel) => {
      this.courses.push(course);
      this.newCourseAdd.push(course.id);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('newCourseAdd', JSON.stringify(this.newCourseAdd));
      }
      form.resetForm();
      this.loadCourses();
    });
  }

  isNewCourse(courseId: number): boolean {
    return this.newCourseAdd.includes(courseId);
  }

}
