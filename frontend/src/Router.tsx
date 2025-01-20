// src/Router.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { KissenaRoutes } from './Routes';  // Import the route array

const kissenaRouter = createBrowserRouter(KissenaRoutes);  // Pass the routes array here

function Router() {
  return <RouterProvider router={kissenaRouter} />;  // Provide the router to the app
}

export default Router;
