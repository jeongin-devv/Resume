import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ChatterboxPage } from '../../Pages';
import { ChatterboxPath as path } from '../RoutePath';

const element = <ChatterboxPage />;

const ChatterboxRoute : RouteObject = {
  path,
  element,
};

export default ChatterboxRoute;
