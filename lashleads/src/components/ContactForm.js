import { Box, Button, FormControl, styled, TextField, Typography } from "@mui/material";
import React from "react";

const ContactForm = () => {
    return (
        <Box component="form"
            sx={{
                display: 'inline-flex',
                displayDirection: 'row',
                padding: '70px',
            }}>
            <FormControl className='--form-control--card'>
                <Typography
                    sx={{
                        fontSize: '30px',
                        fontWeight: 'bold'
                    }}>Contact Emily</Typography>
                <TextField
                    label="Full Name" required sx={{ padding: '.15rem' }} />
                <TextField
                    label='Email' required sx={{ padding: '.15rem' }} />
                <TextField
                    label='Subject' sx={{ padding: '.15rem' }} />
                <TextField
                    label='Message' sx={{ padding: '.15rem' }} />
                <Box>
                    <Button variant="contained"
                        sx={{
                            color: 'black',
                            backgroundColor: '#CCCCCC',
                            borderRadius: '50px'
                        }}>Clear Form</Button>
                    <Button variant="contained"
                        sx={{
                            backgroundColor: '#b76e79',
                            borderRadius: '50px'
                        }}>Send Message</Button>
                </Box>
            </FormControl>
        </Box>
    )
}

export default ContactForm;
