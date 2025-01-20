import React from "react";
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';
import { Box, Grid2 } from "@mui/material";

function HomePage() {
    return (
        <Grid2
         className='content'
         container
         spacing={2}>
         <Grid2 item xs={12} sm={4} size={4}>This is the left</Grid2>
         <Grid2 item xs={12} sm={4} size={4} sx={{ justifyContent: 'flex-end' }}><ContactForm /></Grid2>
      </Grid2>
    )
}

export default HomePage;
