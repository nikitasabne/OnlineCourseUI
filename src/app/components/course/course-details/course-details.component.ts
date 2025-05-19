import { Component, OnInit } from '@angular/core';
import { CourseDetails } from '../../../Model/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  selectedCourseId: number;
  courseDetail: CourseDetails | null;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedCourseId = Number(params.get('courseId'));

      if (this.selectedCourseId) {
        this.courseService
          .getCourseById(this.selectedCourseId)
          .subscribe((data) => {
            this.courseDetail = data;
          });
      }
    });
  }
}
