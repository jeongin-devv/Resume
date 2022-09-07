import React from 'react';
import { Typography } from '@mui/material';
import { IntroduceContainer, Title } from './styles';

interface Props {
  title: string;
}

export default ({ title } : Props) => (
  <IntroduceContainer>
    <Title>{title}</Title>
    <br />
    <Typography>
      대화를 좋아하는 Frontend Developer 입니다.<br />
      산업 공학을 전공 하였고, 성취감을 쫓아 개발자가 되었습니다.
    </Typography>
    <br />
    <Typography>
      전 직장에서 금융권의 Frontend / Backend 개발을 담당했고,
      현재는 글로벌 서비스 플랫폼의 Frontend / Publishing 을 담당하고 있습니다.
      Vue.js, React.js 등의 다양한 프레임워크와 라이브러리를 사용한 프로젝트 경험이 있고,
      라이브러리 없이 Vanila Javascript 만으로 프로젝트를 진행한 경험이 있습니다.
    </Typography>
    <br />
    <Typography>
      학습에 대한 욕심이 많고, 의견 교류에 열정적  입니다.
      대화가 잘 통하고 함께 일하고 싶은 개발자가 되기 위해서
      끊임없이 공부하고, 지인들과 정기적인 토론을 갖고 있습니다.
      토론을 진행하는 것은 개발자 / 비개발자 모두와 소통하며 협업하는 것을 추구하며,
      사용자 / 개발자 모두의 관점에서 프로세스를 구현하려는 목적에 있습니다.
    </Typography>
    <br />
    <Typography>
      비전공자인 만큼 공학 지식을 보충하기 위해, 기술 서적을 많이 읽으려 노력하고 있습니다.
      자료구조, 알고리즘, 컴퓨터 구조 등 프로그래밍의 기본 이론을 이해하려 합니다.
      부족한 점에 대해 항상 인지하고 보완하려 노력하고 있습니다.
    </Typography>
  </IntroduceContainer>
);
