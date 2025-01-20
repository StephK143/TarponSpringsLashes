import React from "react";
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';
import { Box, Grid2 } from "@mui/material";

function HomePage() {
    return (
        <Box container
            sx={{
                backgroundImage: `url(${cover})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <ContactForm />
        </Box>
    )
}

export default HomePage;
