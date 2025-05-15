import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Course } from '../../../Model/course';
import { MOCK_COURSES } from '../../../mock-data/mock-courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-course',
  imports: [CommonModule],
  templateUrl: './browse-course.component.html',
  styleUrl: './browse-course.component.css',
})
export class BrowseCourseComponent implements OnInit, OnChanges {
  courses: Course[] = [];
  @Input() categoryId: number = 0;
  constructor() {
    this.courses = MOCK_COURSES;
  }

  getCourseByCategory(categoryId: number) {
    this.courses = MOCK_COURSES.filter((x) => x.categoryId == categoryId);
  }

  processCourse() {
    this.getCourseByCategory(this.categoryId);
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
