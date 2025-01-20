import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { validateRecipientEmail } from './ContactFormHelper'

const ContactForm = () => {
    return (
        <Box component="form"
            sx={{
                display: 'inline-flex',
                displayDirection: 'row',
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
                    label='Email' 
                    required 
                    onChange={(e) => {
                        validateRecipientEmail(e.target.value);
                      }}
                    sx={{ padding: '.15rem' }} />
                <TextField
                    label='Subject' sx={{ padding: '.15rem' }} />
                <TextField
                    label='Message' sx={{ padding: '.15rem' }} />
                <Box sx={{ width: '100%' }}>
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
