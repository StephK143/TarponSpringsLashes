import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppRouter from './appRouter'


function App() {
  return (
    <Box className="app" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppHeader className="header" />
      <AppRouter />
      <AppFooter className="footer" />
    </Box>
  );
}

export default App;
