export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  projectsCount: number;
  syllabus: string[];
  level: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: 'client' | 'student';
  content: string;
  rating: number;
  avatar: string;
}

export interface CounterStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  date: string;
}
