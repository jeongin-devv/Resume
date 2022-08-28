import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Technology } from '../../Pages';
import { TechnologyPath as path } from '../RoutePath';

const element = <Technology />;

const TechnologyRoute : RouteObject = {
  path,
  element,
};

export default TechnologyRoute;
