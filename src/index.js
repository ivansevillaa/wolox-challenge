import React from 'react';
import { render } from 'react-dom';
import { AuthProvider } from './context/Auth';
import App from './App';
import './index.css';

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
