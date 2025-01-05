import './App.css';
import React from 'react';
import HomePage from './pages/home';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HomePage />
      <AppFooter />
    </div>
  );
}

export default App;
