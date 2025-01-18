// Mantine Imports
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { KissenaTheme, KissenaCSSResolver } from '@/kissena/theme'
import '@kissena/theme.module.css'

import Router from '@/Router'

function App() {
  return (
    <MantineProvider theme={KissenaTheme} cssVariablesResolver={KissenaCSSResolver}>
      <Router />
    </MantineProvider>
  )
}

export default App
