import React from 'react';
import { Box, Grid2, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#767676',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={4} size={4}>
          <Typography variant="h6">About Emily</Typography>
          <Typography variant="body2">Some information about the company.</Typography>
        </Grid2>
        <Grid2 item xs={12} sm={4} size={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Grid2
            item xs={12} sm={4}
            spacing={3}
            container direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Link href="/" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>Home</Link>
            <Link href="/gallery" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>Gallery</Link>
            <Link href="/about" color="inherit" sx={{ display: 'block', marginBottom: '5px' }}>About</Link>
          </Grid2>
        </Grid2>
        <Grid2 item xs={12} sm={4} size={4}>
          <Typography variant="h6">Follow Me</Typography>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Facebook</Link>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Twitter</Link>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Instagram</Link>
        </Grid2>
      </Grid2>
      <Typography variant="body2" sx={{ marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} Karlsen Designs. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
