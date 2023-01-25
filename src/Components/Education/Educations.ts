export interface EducationType {
  date: string;
  title: string;
  descriptions: string[];
}

export const Educations : EducationType[] = [
  {
    date: '22.05 ~ ing',
    title: 'Udemy',
    descriptions: [
      '- Frontend: React.js, Next.js, JavaScript, TypeScript 등',
      '- Theory: Clean Code, 자료 구조, 알고리즘 등',
    ],
  },
  {
    date: '22.05 ~ ing',
    title: 'Nomad Coder',
    descriptions: [
      '- Frontend: React.js, Next.js, TypeScript 등',
    ],
  },
  {
    date: '21.04 ~ ing',
    title: 'Inflearn',
    descriptions: [
      '- Frontend : Vue.js, JavaScript, TypeScript 등',
      '- Backend : Spring, Spring Boot, JPA 등',
    ],
  },
  {
    date: '20.09 ~ 21.03',
    title: '중앙 HTA',
    descriptions: [
      '전자정부표준프레임워크,',
      'Vue.js를 활용한 Java 개발자A 과정 수료',
    ],
  },
  {
    date: '11.03 ~ 21.02',
    title: '홍익대학교',
    descriptions: [
      '정보컴퓨터공학부 산업공학과 (서울) 졸업',
    ],
  },
  {
    date: '07.03 ~ 10.02',
    title: '수락고등학교',
    descriptions: [
      '자연계 졸업',
    ],
  },
];
