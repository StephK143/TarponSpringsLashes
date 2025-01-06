import { Box, FormControl } from "@mui/material";
import React from "react";
import './index.css';

const ContactForm = () => {
    return (
        <Box className='container'
            sx={{
                display: 'inline-flex',
                displayDirection: 'row',
            }}>
            <FormControl className='--form-control--card formField'>
                <h2> Contact Emily</h2>
                <input
                    className="formField"
                    type='text'
                    placeholder='Full Name'
                    name='user_name' required />
                <input type='email'
                    placeholder='Email'
                    name='user_email' required />
                <input type='subject'
                    placeholder='Subject'
                    name='subject' required />
                <textarea name='message'
                    placeholder='Message' required />
                <button className="--btn --btn-primary">
                    Send Message
                </button>
            </FormControl>
        </Box>
    )
}

export default ContactForm;
