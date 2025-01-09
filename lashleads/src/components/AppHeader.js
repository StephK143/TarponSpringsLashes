import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const AppHeader = () => {
    return (
        <AppBar
            sx={{
                position: 'sticky',
                width: '100%',
                top: 0,
                backgroundColor: '#767676',
                color: 'white',
                padding: '.6rem 4rem .6rem 1rem',
                textAlign: 'center',
                padding: '20px 0',
            }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    Lashes By Emily
                </Typography>
                <Button href='/'  color="inherit">Home</Button>
                <Button href='/gallery' color="inherit">Gallery</Button>
                <Button href='/about' color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;