// Mantine Imports
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/carousel/styles.css'

import { KissenaTheme, KissenaCSSResolver } from '@/kissena/theme'
import '@kissena/theme.module.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from '@/Router'
import { NavBar } from './kissena/navbar/navBar.tsx'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={KissenaTheme}
        cssVariablesResolver={KissenaCSSResolver}
      >
        <NavBar />
        <Outlet />
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
