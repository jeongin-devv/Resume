import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Environment } from '../../Pages';
import { EnvironmentPath as path } from '../RoutePath';

const element = <Environment />;

const ChatterboxRoute : RouteObject = {
  path,
  element,
};

export default ChatterboxRoute;
