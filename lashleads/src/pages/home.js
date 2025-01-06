import React from "react";
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';
import { Grid2 } from "@mui/material";

function HomePage() {
    return (
        <Grid2
            container
            sx={{
                minHeight: '80vh',
                backgroundImage: `url(${cover})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                justifyContent: 'flex-end',
            }}>
            <ContactForm />
        </Grid2>
    )
}

export default HomePage;
