import React from 'react';
import { RootStoreProvider } from 'Store/RootStore';
import RootRouter from './Router/RootRouter';
import './App.css';

const App = () => (
  <RootStoreProvider>
    <div className="App">
      <span>das</span>
      <RootRouter />
    </div>
  </RootStoreProvider>
);

export default App;
