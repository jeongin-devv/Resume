export interface ProjectType {
  title: string;
  duration: string;
  stack: string[];
  contents: string;
}

export const projects : ProjectType[] = [
  {
    title: 'KineMaster Templates Management Console',
    duration: '23.01 ~ - ing',
    stack: [
      'React', 'TypeScript', 'JavaScript', 'Storybook',
      'Material UI', 'Styled-Component',
      'Mobx',
    ],
    contents: `
      <hr />
      <ul>
        <li>KineMaster에서 제공하는 Video Templates Management Console Frontend 개발</li>
        <li>Storybook, Material UI, Styled-Components 를 결합한 Component Design 제시</li>
        <li>Mobx 를 활용한 상태 관리 / Action Modularization</li>
        <li>Web Storage와 MongoDB 를 활용한 Console 이용 내역 관리</li>
      </ul>
      <hr />
    `,
  },
  {
    title: 'KineMaster Bulk Email Console',
    duration: '22.11 ~ 23.01',
    stack: [
      'React', 'TypeScript', 'JavaScript', 'Mobx',
      'Material UI', 'Styled-Component',
      'IndexedDB', 'Sanitizer',
    ],
    contents: `
      <hr />
      <ul>
        <li>KineMaster의 사용자를 대상으로 한 이메일 발송 서비스 Frontend 개발</li>
        <li>MUI, Styled-Component 를 활용한 컴포넌트 모듈화 / 공통화</li>
        <li>Mobx 를 활용한 상태 관리 / 기능 로직 분리 설계</li>
        <li>IndexedDB 등의 Web Storage 를 활용한 이용 내역, 페이지 상태 저장, 토큰 관리</li>
        <li>스크립트 조작 방지를 위한 Sanitizer 사용</li>
      </ul>
      <hr />
    `,
  },
  {
    title: 'KineMaster Cross Browsing Test',
    duration: '22.08 ~ 22.10',
    stack: ['React', 'TypeScript', 'Figma', 'LambdaTest'],
    contents: `
      <hr />
      <ul>
        <li>Cross Browsing Test Scenario 수립</li>
        <li>디바이스, 운영 체제, 클라이언트 별 대응 방안 설계</li>
        <li>Cloud Test를 위한 ‘LAMBDATEST’ 서비스 도입</li>
        <li>‘LAMBDATEST’ 개발 팀과 협업을 통한 서비스 개선</li>
      </ul>
      <hr />
    `,
  },
  {
    title: 'KineMaster Email Template',
    duration: '22.08 ~ 22.09',
    stack: ['HTML5', 'CSS3', 'Figma', 'Email on Acid'],
    contents: `
      <hr />
      <ul>
        <li>KineMaster 서비스 이용자에게 발신하는 Email Templates 개발</li>
        <li>글로벌 사용자의 이메일 클라이언트 환경 및 다크모드를 고려한 반응형 템플릿</li>
        <li>Cross-Client Test를 위한 ‘Email on Acid’ 서비스 도입</li>
      </ul>
      <hr />
    `,
  },
  {
    title: 'KineMaster Console',
    duration: '22.05 ~ - ing',
    stack: [
      'React', 'TypeScript', 'JavaScript',
      'Mobx', 'Redux', 'React-Admin', 'Styled-Component',
      'Material UI',
    ],
    contents: `
      <hr />
      <ul>
        <li>Notice, AssetStore, Mix & Search Frontend Development</li>
        <li>KineMaster Service Console Development / Maintenance</li>
      </ul>
      <hr />
    `,
  },
  {
    title: '농협캐피탈 디지털 고도화',
    duration: '21.12 ~ 22.05',
    stack: ['JavaScript', 'J-Query', 'HTML5', 'CSS3', 'Jsp', 'Java', 'eGovFramework'],
    contents: `
      <hr />
      <ul>
        <li>Mobile Hybrid Application MA/MW Part</li>
        <li>Legacy Source Analysis & Migration</li>
        <li>신규 서비스 분석 및 기능 구현</li>
        <li>신규 개발 인원 가이드 및 업무 지원</li>
      </ul>
      <hr />
      <ul>
        <li>Frontend</li>
        <ul>
          <li>함수형 코딩 컨벤션 설계 및 적용</li>
          <li>Local Storage를 활용한 비회원 서비스 이용 기록 저장 / 활용</li>
          <li>Session Storage를 활용한 Page 간 데이터 활용</li>
          <li>JSTL를 활용한 HTML 단방향 바인딩</li>
          <li>AJAX을 활용한 비동기 기능 개발</li>
        </ul>
      </ul>
      <hr />
      <ul>
        <li>Backend</li>
        <ul>
          <li>계정계 / 정보계 전문 통신 활용 기능 구현</li>
          <li>대외비</li>
        </ul>
      </ul>
      <hr />
    `,
  },
  {
    title: '금융편집샵 Nanci',
    duration: '21.06. ~ 21.12.',
    stack: [
      'Vue.js', 'Vuex', 'JavaScript',
      'HTML5', 'CSS3', 'Java', 'Spring Boot',
      'MyBatis', 'Maven', 'Linux', 'Nginx', 'MySQL', 'CronTab', 'ShellScript',
    ],
    contents: `
      <hr />
      <ul>
        <li>금융 정보 제공 목적 Mobile Hybrid App : Nanci</li>
        <li>Web Part 단독 개발</li>
        <li>네이티브 기능 활용을 위한 iOS / Android 개발자와 협업 진행</li>
        <li>Figma / Zeplin 을 활용한 디자이너와 협업 진행</li>
      </ul>
      <hr />
      <ul>
        <li>Frontend</li>
        <ul>
          <li>Vue-CLI Package Build (Vue 2)</li>
          <li>Single Page Application / CSR</li>
          <li>Component Design : Page → Section → Function</li>
          <li>CSS Design : 디자이너가 작성한 Figma Style Guide 에 맞춘 Class name 기반 CSS Guide Line 작성</li>
          <li>Responsive Publishing : HTML5 / CSS3, Animation, Vue-Transition, Vue-KeepAlive, Countup.js</li>
          <li>Vuex를 활용한 상태 관리 - 컴포넌트 간 데이터 흐름 추적</li>
            <ul>
              <li>Page → Section : Section Unit Modularization</li>
              <li>Section → Function : Event $emit</li>
            </ul>
          <li>Axios 를 활용한 Backend Restful API 와의 통신</li>
          <li>Apache Echarts 를 활용한 차트 디자인 및 구현</li>
          <li>App Storage를 활용한 기능 구현 - 날씨 / 위치정보, 앱 버전 노출, 미니게임 사운드, 모바일 웹 호출(이용 약관, 앱 바로가기 등)</li>
          <li>미니 게임 구현 (스도쿠)</li>
        </ul>
      </ul>
      <hr />
      <ul>
        <li>Backend</li>
        <ul>
          <li>Stateless Restful API</li>
          <ul>
            <li>Java 11 / Spring Boot 2.6.4 / Maven Project</li>
            <li>MyBatis 를 이용한 DB Connection</li>
            <li>Kakao API 를 활용한 현 위치 정보 제공</li>
            <li>기상청 API 를 활용한 날씨 정보 제공</li>
            <li>금융 정보 리스트 및 필터 기능 SSR</li>
          </ul>
          <li>Data Crawling Daemon</li>
          <ul>
            <li>Java 11 / Spring Boot 2.6.4 / Maven Project</li>
            <li>금융감독원 API 를 이용한 금융 정보 DB CRUD</li>
            <li>MyBatis 를 이용한 DB Connection</li>
            <li>Selenium을 이용한 Web Crawling / DOM Parsing</li>
            <li>저축은행 중앙회 API 를 이용한 금융 정보 CRUD</li>
            <li>예외 케이스에 대비한 Transaction 분기 처리</li>
          </ul>
        </ul>
      </ul>
      <hr />
      <ul>
        <li>Server</li>
        <ul>
          <li>CentOS Linux 7 (core)</li>
          <li>Web Server - Nginx 1.20.1 / Apache 2.4.6</li>
          <li>Restful API Deployment / Logging</li>
          <li>Daemon Execute Scheduling ( Crontab) / Logging</li>
        </ul>
      </ul>
      <hr />
    `,
  },
  {
    title: '모아저축은행 디지털 고도화',
    duration: '21.04 ~ 21.06',
    stack: ['JavaScript', 'J-Query', 'HTML5', 'CSS3', 'Java', 'Miaps'],
    contents: `
      <hr />
      <ul>
        <li>Mobile Hybrid Application - Frontend</li>
        <li>서비스 메뉴 화면 개발</li>
        <li>공통 모듈 개발 <br>(Validation , Data Formatting, Native Function)</li>
        <li>Miaps Solution을 활용한 네이티브 기능 활용 <br>(앱 환경 설정, 버전 정보, 상담 페이지 호출 등)</li>
      </ul>
      <hr />
    `,
  },
];
