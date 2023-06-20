import React from 'react';
import WebFont from 'webfontloader';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';

WebFont.load({
  google: {
    families: ['Oswald:200,300,400,500,600,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);