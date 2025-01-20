import React from "react";
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';
import { Box, Grid2 } from "@mui/material";

function HomePage() {
    return (
        <Grid2
            className='content'
            container>
            <Grid2 className='leftContent' item xs={1} sm={1} size={4}>Carousel of photos</Grid2>
            <Grid2 className='rightContent' item xs={1} sm={1} size={4}><ContactForm /></Grid2>
        </Grid2>
    )
}

export default HomePage;
