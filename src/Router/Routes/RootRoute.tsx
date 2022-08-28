import React from 'react';
import Main from 'Pages/Main/Main';
import { RouteObject } from 'react-router-dom';
import { RootPath as path } from '../RoutePath';

const element = <Main />;

const RootRouteObject : RouteObject = {
  path,
  element,
};

export default RootRouteObject;
