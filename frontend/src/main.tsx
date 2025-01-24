import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import Router from './Router';
import { KissenaTheme } from './kissena/components/theme';  // Correct path to theme.ts

const root = ReactDOM.createRoot(document.getElementById('root')!);  // Get the root element

root.render(
  <React.StrictMode>
    <MantineProvider theme={KissenaTheme} withGlobalStyles withNormalizeCSS>
      <Router /> {/* Router will load individual pages like Information */}
    </MantineProvider>
  </React.StrictMode>
);
