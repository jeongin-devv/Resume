import React from 'react';
import Introduce from 'Components/Introduce/Introduce';
import Skill from 'Components/Skill/Skill';
import Career from 'Components/Career/Career';
import { MainContainer } from './styles';

export default () => (
  <MainContainer>
    <Introduce />
    <Skill />
    <Career />
  </MainContainer>
);
