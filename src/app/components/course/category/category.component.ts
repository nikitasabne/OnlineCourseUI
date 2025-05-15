import { Component } from '@angular/core';
import { CourseCategory } from '../../../Model/category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock-data/mock-course-categories';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: CourseCategory[] = [];

  constructor() {
    this.categories = MOCK_COURSE_CATEGORIES;
  }
}
