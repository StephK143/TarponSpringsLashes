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
                    label="Full Name" variant="outlined" required />
                <TextField
                    type='email'
                    placeholder='Email'
                    name='user_email' required />
                <TextField
                    type='subject'
                    placeholder='Subject'
                    name='subject' required />
                <TextField
                    name='message'
                    placeholder='Message' required />
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
