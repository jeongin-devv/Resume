import React from 'react';
import SkillGrid from './SkillGrid';
import SkillHover from './SkillHover';
import {
  SkillContainer, TitleBox, Title,
} from './styles';

export default () => (
  <SkillContainer>
    <TitleBox>
      <Title>Skill</Title>
      <SkillHover />
    </TitleBox>
    <SkillGrid />
  </SkillContainer>
);
