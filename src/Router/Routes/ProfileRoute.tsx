import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Profile } from '../../Pages';
import { ProfilePath as path } from '../RoutePath';

const element = <Profile />;

const ProfileRouteObject : RouteObject = {
  path,
  element,
};

export default ProfileRouteObject;
