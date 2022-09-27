import React from 'react';
import ProjectContent from './ProjectContent';
import { projects } from './Projects';
import { ProjectContainer, TitleBox, Title } from './styles';

export default () => (
  <ProjectContainer>
    <TitleBox>
      <Title>Project</Title>
    </TitleBox>
    {projects.map((project) => (
      <ProjectContent project={project} />
    ))}
  </ProjectContainer>
);
