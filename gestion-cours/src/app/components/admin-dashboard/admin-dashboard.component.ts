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
  showAddCourseForm: boolean = false;
  editingCourse: CourseModel | null = null;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((courses: CourseModel[]) => {
      this.courses = courses;
    });
  }

  toggleAddCourseForm(): void {
    this.showAddCourseForm = !this.showAddCourseForm;
    this.editingCourse = null;
  }

  addCourse(courseData: any): void {
    const newCourse: CourseModel = {
      id: this.courses.length + 1,
      name: courseData.name,
      description: courseData.description,
      duration: courseData.duration,
      createdAt: new Date().toISOString(),
      published: false,
      image: courseData.image,
    };

    this.courseService.addCourse(newCourse).subscribe((course: CourseModel) => {
      this.courses.push(course);
      this.showAddCourseForm = false;
    });
  }

  editCourse(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: CourseModel) => {
      this.editingCourse = course;
      this.showAddCourseForm = true;
    });
  }

  updateCourse(courseData: any): void {
    if (this.editingCourse) {
      const updatedCourse: CourseModel = {
        ...this.editingCourse,
        name: courseData.name,
        description: courseData.description,
        duration: courseData.duration,
        published: courseData.published,
        image: courseData.image,
      };

      this.courseService.updateCourse(updatedCourse).subscribe((course: CourseModel) => {
        const index = this.courses.findIndex(c => c.id === course.id);
        this.courses[index] = course;
        this.showAddCourseForm = false;
        this.editingCourse = null;
      });
    }
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== courseId);
    });
  }

  togglePublication(course: CourseModel): void {
    const updatedCourse = { ...course, published: !course.published };
    this.courseService.updateCourse(updatedCourse).subscribe((updated: CourseModel) => {
      const index = this.courses.findIndex(c => c.id === updated.id);
      this.courses[index] = updated;
    });
  }
}
