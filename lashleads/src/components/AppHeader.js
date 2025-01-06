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
                padding: '10px 20px',
                textAlign: 'center',
                minHeight: '20%',
                display: 'flex',
            }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Lashes By Emily
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Gallery</Button>
                <Button color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;