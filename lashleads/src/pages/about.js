import { Box, List, ListItem, Grid2, Typography } from "@mui/material";
import React from "react";
import { AboutData, LocationData } from '../components/data';
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';
import salonMap from '../assets/salon-map.png';

const aboutPage = () => {

   return (
      <Grid2
         container
         sx={{
            height: '100vh',
            backgroundImage: `url(${cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            flexDirection: 'row',
            display: 'flex',
         }}>
         <List sx={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start' }}>
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
            <Box
               component='img'
               sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
               }}
               alt="Map to Allure Salon."
               src={salonMap}/>
         </List>
         <List sx={{ flexDirection: 'column', justifyContent: 'flex-end', width: '50%' }}>
            <ContactForm />
         </List>
      </Grid2>
   )
}

export default aboutPage;