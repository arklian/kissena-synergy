<<<<<<< HEAD
// src/Routes.tsx
import React from 'react';
import { Route } from 'react-router-dom';
import Information from '@kissena/pages/About/Information';  // Import Information component
import HomePage from '@kissena/pages/home/Home.page';    // Correct import for Homepage
=======
import { KissenaRoutes } from '@kissena/Kissena.routes'
>>>>>>> 553c94f8c4d91d597f99c896751dc568cb1bc9f8

// Define the routes
export const KissenaRoutes = [
  {
    path: '/',
<<<<<<< HEAD
    element: <HomePage />  // Use Homepage as the route element
  },
  {
    path: '/about',
    element: <Information />  // Information page route
=======
    children: KissenaRoutes,
>>>>>>> 553c94f8c4d91d597f99c896751dc568cb1bc9f8
  },
  {
    path: '*',
    element: <div>Whoops! 404!</div>  // Catch-all for undefined routes
  }
];
