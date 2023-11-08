import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TypeContextProvider } from './context/TypeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TypeContextProvider>
      <App />
    </TypeContextProvider>
  </React.StrictMode>
);
