import { List, ListItem, Grid2, Typography } from "@mui/material";
import React from "react";
import { AboutData, LocationData } from '../components/data';
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';

const aboutPage = () => {
  
   return (
      <Grid2
         container
         sx={{
            minHeight: '80vh',
            backgroundImage: `url(${cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            flexDirection: 'row',
            display: 'flex',
         }}>
         <List sx={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start'}}>
            <ListItem>
            <Typography>{AboutData.shortDescription}</Typography>
            </ListItem>
            <ListItem>
            <Typography>{AboutData.longDescription}</Typography>
            </ListItem>
            <ListItem>
            <Typography>{LocationData.locationDescription}</Typography>
            </ListItem>
            <ListItem>
            <Typography> {LocationData.locationMap}</Typography>
            </ListItem>
         </List>
         <List sx={{ flexDirection: 'column', justifyContent: 'flex-end', width: '50%' }}>
            <ContactForm />
         </List>
      </Grid2>
   )
}

export default aboutPage;