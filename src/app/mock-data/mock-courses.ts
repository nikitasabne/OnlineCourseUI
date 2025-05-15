import { Course } from '../Model/course';

export const MOCK_COURSES: Course[] = [
  {
    courseId: 1,
    title: 'Full-Stack Web Development',
    thumbnail:
      'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=',
    description:
      'Learn to build complete web applications using frontend and backend technologies.',
    price: 199.99,
    courseType: 'Online',
    seatsAvailable: 25,
    duration: 12,
    categoryId: 12,
    instructorId: 101,
    instructorUserId: 1001,
    startDate: '2025-06-01T10:00:00Z',
    endDate: '2025-08-24T10:00:00Z',
    category: {
      categoryId: 12,
      categoryName: 'Web Development',
      description:
        'Learn to build responsive websites using HTML, CSS, JavaScript, and modern frameworks.',
    },
    userRating: {
      courseId: 1,
      averageRating: 4.5,
      totalRating: 120,
    },
  },
  {
    courseId: 2,
    title: 'Machine Learning with Python',
    thumbnail:
      'https://media.istockphoto.com/id/2200981238/photo/futuristic-robotic-hand-displaying-programming-codes-and-languages-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=3w35NwcXrrYnbS1yo-iw-Vg0Sn0Atp2PpzsD-nwXxp4=',
    description:
      'Master machine learning concepts with practical implementation using Python.',
    price: 249.99,
    courseType: 'Online',
    seatsAvailable: 30,
    duration: 10,
    categoryId: 11,
    instructorId: 102,
    instructorUserId: 1002,
    startDate: '2025-07-10T09:30:00Z',
    endDate: '2025-09-18T09:30:00Z',
    category: {
      categoryId: 11,
      categoryName: 'Data Scientiest',
      description: 'Course covering data analyst, machine learning, and AI.',
    },
    userRating: {
      courseId: 2,
      averageRating: 4.7,
      totalRating: 85,
    },
  },
  {
    courseId: 3,
    title: 'Cloud Fundamentals with Azure',
    thumbnail:
      'https://media.istockphoto.com/id/1254718662/photo/cloud-computing-technology-and-online-data-storage-for-business-network-concept.jpg?s=612x612&w=0&k=20&c=9qKGNWQ-bPlYF1bO2nLebRNGbfHJcw3LPgeUq7tu2S0=',
    description:
      'Gain practical experience with Azure cloud services and deployment techniques.',
    price: 179.0,
    courseType: 'Online',
    seatsAvailable: 20,
    duration: 8,
    categoryId: 14,
    instructorId: 103,
    instructorUserId: 1003,
    startDate: '2025-05-20T11:00:00Z',
    endDate: '2025-07-15T11:00:00Z',
    category: {
      categoryId: 14,
      categoryName: 'DevOps & Cloud',
      description:
        'Master CI/CD pipelines, infrastructure automation, and cloud services like AWS and Azure.',
    },
    userRating: {
      courseId: 3,
      averageRating: 4.3,
      totalRating: 64,
    },
  },
  {
    courseId: 4,
    title: 'Advanced React and Redux',
    thumbnail:
      'https://media.istockphoto.com/id/1918987312/photo/ux-graphic-designer-planning-application-process-development-prototype.jpg?s=612x612&w=0&k=20&c=3BWV4mJmM2ogVqIdG1MOQiRG7i_uOfjrpxl1ME38iLU=',
    description:
      'Deep dive into React hooks, context, and state management with Redux for building scalable apps.',
    price: 249.0,
    courseType: 'Online',
    seatsAvailable: 15,
    duration: 10,
    categoryId: 12,
    instructorId: 104,
    instructorUserId: 1004,
    startDate: '2025-06-01T09:00:00Z',
    endDate: '2025-08-10T09:00:00Z',
    category: {
      categoryId: 12,
      categoryName: 'Frontend Development',
      description:
        'Courses focusing on modern frontend frameworks and UI technologies.',
    },
    userRating: {
      courseId: 4,
      averageRating: 4.7,
      totalRating: 98,
    },
  },

  {
    courseId: 5,
    title: 'Docker & Kubernetes for Beginners',
    thumbnail:
      'https://media.istockphoto.com/id/2123151024/photo/businessman-holding-cloud-computing-on-global-technology-network-data-storage-and.jpg?s=612x612&w=0&k=20&c=5mj9thNPVN8ywM9frMJfJYi-dvQ68yfvRXFlhueW0qw=',
    description:
      'Learn containerization concepts and orchestration with Docker and Kubernetes from scratch.',
    price: 199.0,
    courseType: 'Online',
    seatsAvailable: 25,
    duration: 6,
    categoryId: 14,
    instructorId: 105,
    instructorUserId: 1005,
    startDate: '2025-05-25T10:00:00Z',
    endDate: '2025-07-05T10:00:00Z',
    category: {
      categoryId: 14,
      categoryName: 'DevOps & Cloud',
      description:
        'Master CI/CD pipelines, infrastructure automation, and cloud services like AWS and Azure.',
    },
    userRating: {
      courseId: 5,
      averageRating: 4.5,
      totalRating: 72,
    },
  },
];
