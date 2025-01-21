// Mantine Imports
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { KissenaTheme, KissenaCSSResolver } from '@/kissena/theme'
import '@kissena/theme.module.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from '@/Router'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={KissenaTheme}
        cssVariablesResolver={KissenaCSSResolver}
      >
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
