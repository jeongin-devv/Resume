import React from 'react';
import Contents from './IntroduceContents';
import { IntroduceContainer, Title } from './styles';

export default () => {
  const title = 'Introduce';
  const contents = [
    '대화를 좋아하는 Frontend Developer 입니다.',
    '금융권과 글로벌 서비스 플랫폼의 개발 경력이 있습니다.',
    `Next.js, React.js, Vue.js, Spring Boot 등의 다양한 프레임워크와 라이브러리를 사용하여 프로젝트를 진행해왔고,
    도구에 의존하지 않고 본질을 이해하고자 노력합니다.`,
    `학습에 대한 욕심이 많고, 의견 교류에 열정적  입니다. 막연히 신기술을 따라가지 않고, 기술의 본질에 대해 이해하려고 합니다.
    대화가 잘 통하고 함께 일하고 싶은 개발자가 되기 위해서
    끊임없이 공부하고, 지인들과 정기적인 토론을 갖고 있습니다.`,
    `부족한 공학 지식을 채우기 위해, 기술 서적을 많이 읽으려 노력하고 있습니다.
    자료구조, 알고리즘, 컴퓨터 구조 등 프로그래밍의 기본 이론을 틈틈히 공부하고 있고, 
    기술 세미나에 주기적으로 참여합니다.`,
    `개발을 하면서 가장 중요하게 생각하는 부분은 대화입니다.
    개발자 뿐만 아닌, 서비스와 연결된 모든 사람들과의 커뮤니케이션이 
    원활하게 이루어질수록 결과물의 완성도가 높아진다고 생각합니다.`,
    `기술과 환경에 국한되지 않는 개발자가 되기 위해 
    꾸준하게 학습하고, 생각하며, 노력하고 있습니다.`,
  ];

  return (
    <IntroduceContainer>
      <Title>{title}</Title>
      <Contents contents={contents} />
    </IntroduceContainer>
  );
};
