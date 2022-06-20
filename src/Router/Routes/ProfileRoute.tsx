import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ProfilePage } from '../../Pages';
import { ProfilePath as path } from '../RoutePath';

const element = <ProfilePage />;

const ProfileRouteObject : RouteObject = {
  path,
  element,
};

export default ProfileRouteObject;
