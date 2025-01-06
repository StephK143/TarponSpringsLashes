import { Box, FormControl } from "@mui/material";
import React from "react";
import './index.css';

const ContactForm = () => {
    return (
        <Box className='container'
            sx={{
                display: 'inline-flex',
                displayDirection: 'row',
                padding: '75px',
            }}>
            <FormControl className='--form-control--card'>
                <h2> Contact Emily</h2>
                <input
                    className="formField"
                    type='text'
                    placeholder='Full Name'
                    name='user_name' required />
                <input
                    className="formField"
                    type='email'
                    placeholder='Email'
                    name='user_email' required />
                <input 
                className="formField"
                type='subject'
                    placeholder='Subject'
                    name='subject' required />
                <textarea 
                className="formField"
                name='message'
                    placeholder='Message' required />
                <button className="--btn submitBtn">
                    Send Message
                </button>
            </FormControl>
        </Box>
    )
}

export default ContactForm;
