import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Chatterbox } from '../../Pages';
import { ChatterboxPath as path } from '../RoutePath';

const element = <Chatterbox />;

const ChatterboxRoute : RouteObject = {
  path,
  element,
};

export default ChatterboxRoute;
