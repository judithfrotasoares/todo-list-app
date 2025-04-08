import React from 'react';
import ReactDOM from 'react-dom/client'; // Import correto para React 18+
import App from './App';

// Pegue o elemento root do HTML
const rootElement = document.getElementById('root');

// Crie um root com ReactDOM.createRoot (novo método do React 18)
const root = ReactDOM.createRoot(rootElement);

// Renderize o aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
