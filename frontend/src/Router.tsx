import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { KissenaRoutes } from './Routes'; // Correct import for routes

const kissenaRouter = createBrowserRouter(KissenaRoutes); // Use the correctly imported routes

function Router() {
  return <RouterProvider router={kissenaRouter} />;
}

export default Router;
