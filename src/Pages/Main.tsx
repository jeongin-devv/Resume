import React from 'react';
import {
  Introduce, Skill, Career, Project, Education, Profile,
} from '../Components';
import { MainContainer } from './styles';

export default () => (
  <MainContainer>
    <Profile />
    <Introduce />
    <Skill />
    <Career />
    <Project />
    <Education />
  </MainContainer>
);
