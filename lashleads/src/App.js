import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import AppRouter from './appRouter'
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


function App() {
  return (
    <Box className="app" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AppHeader />
      <Box>
        <AppRouter />
      </Box>
      <AppFooter />
    </Box>
  );
}

export default App;
