import React from 'react';
import Contents from './EducationContents';
import { Educations } from './Educations';
import { EducationContainer, Title } from './styles';

export default () => (
  <EducationContainer>
    <Title>Education</Title>
    {Educations.map((education) => (
      <Contents key={education.title} education={education} />
    ))}
  </EducationContainer>
);
