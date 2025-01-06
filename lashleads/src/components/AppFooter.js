import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#767676',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center',
        width: '100%',
        height: '10%',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">About Emily</Typography>
          <Typography variant="body2">Some information about the company.</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>Home</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>Contact</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Follow Me</Typography>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Facebook</Link>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Twitter</Link>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Instagram</Link>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} Karlsen Designs. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
