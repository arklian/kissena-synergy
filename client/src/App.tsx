import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Mantine Imports
import { Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount(count+1)}>Count: {count}</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </MantineProvider>
  )
}

export default App;