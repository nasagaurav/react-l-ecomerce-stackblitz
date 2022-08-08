import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Redux from './Redux';
import './style.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Redux />
  </StrictMode>
);
