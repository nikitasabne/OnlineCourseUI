import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { ContactUsComponent } from './components/core/contact-us/contact-us.component';
import { PlansAndPricingComponent } from './components/plans-and-pricing/plans-and-pricing.component';
import { BrowseCourseComponent } from './components/course/browse-course/browse-course.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'plans-and-price', component: PlansAndPricingComponent },
  { path: 'course/browse', component: BrowseCourseComponent },
];
