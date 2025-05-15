import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { ContactUsComponent } from './components/core/contact-us/contact-us.component';
import { PlansAndPricingComponent } from './components/plans-and-pricing/plans-and-pricing.component';
import { BrowseCourseComponent } from './components/course/browse-course/browse-course.component';
import { HomeComponent } from './components/home/home.component';
import { CourseByCategoryComponent } from './components/course/course-by-category/course-by-category.component';
import { CategoryComponent } from './components/course/category/category.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'course/category', component: CategoryComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'plans-and-price', component: PlansAndPricingComponent },
  { path: 'course/category/:categoryId', component: CourseByCategoryComponent },
  { path: 'course/category/:categoryId', component: BrowseCourseComponent },
  { path: 'category', component: CategoryComponent },
];
