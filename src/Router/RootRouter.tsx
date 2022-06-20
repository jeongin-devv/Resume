import { useRoutes } from 'react-router-dom';
import RootRoute from './Routes/RootRoute';
import ProfileRoute from './Routes/ProfileRoute';
import ChatterboxRoute from './Routes/ChatterboxRoute';
import TechnologyRoute from './Routes/TechnologyRoute';

const RootRouter = () => useRoutes([
  RootRoute,
  ProfileRoute,
  ChatterboxRoute,
  TechnologyRoute,
]);

export default RootRouter;
