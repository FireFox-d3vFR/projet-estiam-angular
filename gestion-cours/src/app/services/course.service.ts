import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.apiUrl);
  }

  getPublishedCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.apiUrl).pipe(
      map(courses => courses.filter(course => course.published))
    );
  }

  getCourseById(id: number): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${this.apiUrl}/${id}`);
  }

  addCourse(course: CourseModel): Observable<CourseModel> {
    return this.http.post<CourseModel>(this.apiUrl, course);
  }

  updateCourse(course: CourseModel): Observable<CourseModel> {
    return this.http.put<CourseModel>(`${this.apiUrl}/${course.id}`, course);
  }

  deleteCourse(courseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${courseId}`);
  }
}
