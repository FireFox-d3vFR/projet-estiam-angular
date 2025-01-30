import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-detail',
  standalone: false,

  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: CourseModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.courseService.getCourseById(id).subscribe((course: CourseModel) => {
        this.course = course;
      });
  }
}
