import React from 'react';
import { Header } from './components/Header';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
