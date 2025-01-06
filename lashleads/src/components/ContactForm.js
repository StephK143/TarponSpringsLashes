import { Box, FormControl } from "@mui/material";
import React from "react";

const ContactForm = () => {
    return (
        <Box className='container'
            sx={{
                display: 'inline-flex',
                displayDirection: 'column',
            }}>
            <div>
                <h2> Contact Emily</h2>
            </div>
            <FormControl className='--form-control--card'>
                <input type='text'
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
