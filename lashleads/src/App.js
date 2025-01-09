import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppRouter from './appRouter'


function App() {
  return (
    <Box className="app" height="100%" width="100%">
      <AppHeader className="header" />
      <AppRouter />
      <AppFooter className="footer" />
    </Box>
  );
}

export default App;
