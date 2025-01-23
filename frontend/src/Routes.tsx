import React from 'react';
import { RouteObject } from 'react-router-dom';
import Information from '@kissena/pages/About/Information'; // Import Information component
import HomePage from '@kissena/pages/home/Home.page'; // Correct import for Homepage

// Define the routes
export const KissenaRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />, // Use HomePage as the route element
  },
  {
    path: '/about',
    element: <Information />, // Information page route
  },
  {
    path: '*',
    element: <div>Whoops! 404!</div>, // Catch-all for undefined routes
  },
];

// Add default export for Routes
export default KissenaRoutes;
