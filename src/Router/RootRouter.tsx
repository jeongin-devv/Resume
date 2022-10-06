import { useRoutes } from 'react-router-dom';
import RootRoute from './Routes/RootRoute';
import TestRoute from './Routes/TestRoute';

const RootRouter = () => useRoutes([
  RootRoute,
  TestRoute,
]);

export default RootRouter;
