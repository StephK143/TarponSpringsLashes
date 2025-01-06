import { Box, Button, FormControl, styled, TextField, Typography } from "@mui/material";
import React from "react";

const ContactForm = () => {
    return (
        <Box component="form"
            sx={{
                display: 'inline-flex',
                displayDirection: 'row',
                padding: '75px',
            }}>
            <FormControl className='--form-control--card'>
                <Typography> Contact Emily</Typography>
                <TextField
                    label="Full Name" required sx={{ padding: '.15rem'}} />
                <TextField
                    label='Email' required sx={{ padding: '.15rem'}} />
                <TextField
                    label='Subject' sx={{ padding: '.15rem'}} />
                <TextField
                    label='Message' sx={{ padding: '.15rem'}} />
                <Button variant="contained"
                    sx={{
                        backgroundColor: '#b76e79',
                        borderRadius: '50px'
                    }}>Send Message</Button>
                <Button sx={{ color: 'black' }}>
                    Clear Form
                </Button>
            </FormControl>
        </Box>
    )
}

export default ContactForm;
