import React from 'react';
import { useRoutes } from 'react-router-dom';
import RoutePath from './RoutePath';
import * as Pages from '../Pages';

const RootRouter = () => {
  const {
    rootPath, profilePath, chatterboxPath, technologyPath,
  } = RoutePath;
  return useRoutes([
    {
      path: rootPath,
      element: <div>rootPage</div>,
    },
    {
      path: profilePath,
      element: <Pages.ProfilePage />,
    },
    {
      path: chatterboxPath,
      element: <Pages.ChatterboxPage />,
    },
    {
      path: technologyPath,
      element: <Pages.TechnologyPage />,
    },
  ]);
};

export default RootRouter;
