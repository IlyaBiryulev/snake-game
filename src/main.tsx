import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>,
);
