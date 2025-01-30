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
  newCourseAdded: boolean[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses;
      this.newCourseAdded = new Array(courses.length).fill(false);
    });
  }

  addCourse(courseData: any, form: any): void {
    const newCourse: CourseModel = {
      id: this.courses.length +1,
      name: courseData.name,
      description: courseData.description,
      duration: courseData.duration,
    };

    this.courseService.addCourse(newCourse).subscribe((course: CourseModel) => {
      this.courses.push(course);
      this.newCourseAdded.push(true);
      form.reset();
    });
  }

}
