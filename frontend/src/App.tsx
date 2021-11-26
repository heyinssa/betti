import React from 'react';
import Routes from './Routes';
import { ContextProvider } from './contexts/Context';
import './App.scss';

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}

export default App;
