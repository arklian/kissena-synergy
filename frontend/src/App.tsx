/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import './index.css';
import App from './App'; // Your main app component

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App /> {/* Wrap your app with MantineProvider }
    </MantineProvider>
  </React.StrictMode>
);
*/

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import WhyKissenaSynergy from './components/WhyKissenaSynergy';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MissionSection />
      <WhyKissenaSynergy />
    </div>
  );
};

export default App;
