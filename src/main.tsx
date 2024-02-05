import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './index.scss';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';
import '@mantine/core/styles.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </Provider>,
);
