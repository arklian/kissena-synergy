// Mantine Imports
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Router from '@/Router'

import { KissenaTheme } from '@/kissena/theme'
import { NavBar } from './kissena/navbar/navBar.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <MantineProvider theme={KissenaTheme}>
      <NavBar />
      <Outlet />
      <Router />
    </MantineProvider>
  )
}

export default App
