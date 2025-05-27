import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseDetails, InstructorModel } from '../Model/course';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private baseUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  getCourseById(courseId: number): Observable<CourseDetails> {
    var data = this.http.get<CourseDetails>(
      `${this.baseUrl}/Course/Detail/${courseId}`
    );
    return data;
  }

  getCourseByCategoryId(categoryId: number): Observable<Course[]> {
    var data = this.http.get<Course[]>(
      `${this.baseUrl}/Course/Category/${categoryId}`
    );
    return data;
  }

  getInstructor(): Observable<InstructorModel[]> {
    return this.http.get<InstructorModel[]>(`${this.baseUrl}/Instructors`);
  }
}
