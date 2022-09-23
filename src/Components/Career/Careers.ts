export interface CareerType {
  date: string;
  name: string;
  department: string;
  tasks: string[];
}

export const careers : CareerType[] = [
  {
    date: '22.05 ~ Work',
    name: 'KineMaster',
    department: 'Service Platform Team 1 / Developer',
    tasks: [
      'Frontend Developer (React, TypeScript)',
      'User Service Frontend',
      'BackOffice Console Frontend',
      'Service Email Templates Publish',
      'Cross Browsing Test Management',
    ],
  },
  {
    date: '21.03 ~ 22.05',
    name: 'VinnsMedia',
    department: 'Laboratory / Researcher',
    tasks: [
      'Web Developer (Full Stack / DB / Server)',
      'Vue.js / Node.js Frontend',
      'JavaScript / JQuery Frontend',
      'Spring Boot / Java - RESTful API',
      'Spring Boot / Java - WebScrape Daemon',
      'MySQL - Database Design',
      'Nginx / CentOS - Deploy / Maintenance',
    ],
  },
];
