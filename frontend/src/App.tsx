// Mantine Imports
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Router from '@/Router'

import { KissenaTheme } from '@/kissena/theme'

function App() {
  return (
    <MantineProvider theme={KissenaTheme}>
      <Router />
    </MantineProvider>
  )
}

export default App
