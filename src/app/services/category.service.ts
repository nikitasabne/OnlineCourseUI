import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseCategory } from '../Model/category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private baseUrl = `${environment.apiUrl}/CourseCategory`;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<CourseCategory[]> {
    var data = this.http.get<CourseCategory[]>(`${this.baseUrl}`);
    return data;
  }
}
