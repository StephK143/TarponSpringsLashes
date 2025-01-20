import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import AppRouter from './appRouter'
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


function App() {
  return (
    <Box className="app" container sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppHeader />
        <AppRouter />
      <AppFooter />
    </Box>
  );
}

export default App;
