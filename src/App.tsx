import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter basename='/'>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
