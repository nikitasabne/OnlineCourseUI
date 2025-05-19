import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Course, CourseDetails } from '../../../Model/course';
import { MOCK_COURSES } from '../../../mock-data/mock-courses';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../services/course.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-browse-course',
  imports: [CommonModule, RouterModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css',
})
export class BrowseCourseComponent implements OnInit, OnChanges {
  courses: Course[] = [];
  @Input() categoryId: number = 0;
  constructor(private courseService: CourseService) {}

  getCourseByCategoryId(categoryId: number) {
    this.courseService.getCourseByCategoryId(categoryId).subscribe((data) => {
      this.courses = data;
    });
  }

  processCourse() {
    this.getCourseByCategoryId(this.categoryId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.processCourse();
  }
  ngOnInit(): void {
    this.processCourse();
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}
