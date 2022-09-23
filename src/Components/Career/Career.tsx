import React from 'react';
import { CareerContainer, TitleBox, Title } from './styles';
import CareerAccordions from './CareerAccordion';
import { careers } from './Careers';

export default () => (
  <CareerContainer>
    <TitleBox>
      <Title>Career</Title>
    </TitleBox>
    {careers.map((career) => (
      <CareerAccordions career={career} />
    ))}
  </CareerContainer>
);
