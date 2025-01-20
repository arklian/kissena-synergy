import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 root API
import { MantineProvider } from '@mantine/core';  // Import MantineProvider
import Router from './Router';  // Your routing component or main app component
import { KissenaTheme } from './kissena/components/theme';  // Correct path to theme.ts

const root = ReactDOM.createRoot(document.getElementById('root')!); // Get the root element

root.render(
  <React.StrictMode>
    <MantineProvider theme={KissenaTheme} withGlobalStyles withNormalizeCSS>
      <Router /> {/* Wrap your router or main component with MantineProvider */}
    </MantineProvider>
  </React.StrictMode>
);
