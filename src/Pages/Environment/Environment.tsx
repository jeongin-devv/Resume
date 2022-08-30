import React from 'react';
import Markdown from 'Components/Markdown/Markdown';
import { MainContainer } from 'Pages/Main/styles';
import environment from 'Markdown/environment';

export default () => (
  <MainContainer>
    <Markdown>{environment}</Markdown>
  </MainContainer>
);
