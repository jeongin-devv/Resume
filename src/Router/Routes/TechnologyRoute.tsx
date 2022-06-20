import React from 'react';
import { RouteObject } from 'react-router-dom';
import { TechnologyPage } from '../../Pages';
import { TechnologyPath as path } from '../RoutePath';

const element = <TechnologyPage />;

const TechnologyRoute : RouteObject = {
  path,
  element,
};

export default TechnologyRoute;
