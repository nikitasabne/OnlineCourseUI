import { CourseCategory } from './category';

export interface UserRating {
  courseId: number;
  averageRating: number;
  totalRating: number;
}

export interface Course {
  courseId: number;
  title: string;
  description: string;
  thumbnail?: string;
  price: number;
  courseType: 'Online' | 'Offline';
  seatsAvailable: number | null;
  duration: number; // Duration in hours
  categoryId: number;
  instructorId: number;
  instructorUserId: number;
  startDate: string | null;
  endDate: string | null;
  category?: CourseCategory;
  userRating?: UserRating;
  sessionDetails?: SessionDetail[];
}

export interface SessionDetail {
  sessionId: number;
  courseId: number;
  title: string;
  description: string;
  videoUrl: string;
  videoOrder: number;
}
