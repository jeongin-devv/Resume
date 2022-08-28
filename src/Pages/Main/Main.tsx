import React from 'react';
import Markdown from 'Components/Markdown/Markdown';
import mainPost from 'Markdown/main';
import { MainContainer } from './styles';

export default () => (
  <MainContainer>
    <Markdown>{mainPost}</Markdown>
  </MainContainer>
);
