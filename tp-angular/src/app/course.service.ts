import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: string[] = ['Cours 1', 'Cours 2', 'Cours 3'];

  getCourses() {
    return this.courses;
  }
}
