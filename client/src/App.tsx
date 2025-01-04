import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Mantine Imports
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Router from './Router';

function App() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  )
}

export default App;