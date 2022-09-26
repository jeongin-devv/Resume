import React from 'react';
import ProjectContent from './ProjectContent';
import { ProjectContainer, TitleBox, Title } from './styles';

export default () => (
  <ProjectContainer>
    <TitleBox>
      <Title>Project</Title>
    </TitleBox>
    <ProjectContent />
  </ProjectContainer>
);
