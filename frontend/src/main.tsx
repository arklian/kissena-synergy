import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';
import { KissenaTheme } from './kissena/components/theme';


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={KissenaTheme} withGlobalStyles withNormalizeCSS>
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
