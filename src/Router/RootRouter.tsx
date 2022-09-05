import { useRoutes } from 'react-router-dom';
import RootRoute from './Routes/RootRoute';

const RootRouter = () => useRoutes([
  RootRoute,
]);

export default RootRouter;
