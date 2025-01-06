import './App.css';
import React from 'react';
import HomePage from './pages/home';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="app" height="100%" width="100%">
      <AppHeader className="header"/>
      <HomePage className="content" />
      <AppFooter className="footer"/>
    </Box>
  );
}

export default App;
