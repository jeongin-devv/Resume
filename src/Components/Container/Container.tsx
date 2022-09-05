import React from 'react';
import { CustomContainer, Title, Contents } from './styles';

interface ContainerProps {
  title: string;
  children?: React.ReactNode;
}

const Container = ({ title, children } : ContainerProps) => (
  <CustomContainer>
    <Title>{title}</Title>
    <Contents>{children}</Contents>
  </CustomContainer>
);

Container.defaultProps = {
  children: null,
};

export default Container;
