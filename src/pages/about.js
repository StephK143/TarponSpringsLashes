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
            justifyContent: 'space-between',
         }}>
         <List sx={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start' }}>
            <ListItem>
               <Typography>{AboutData.shortDescription}</Typography>
            </ListItem>
            <ListItem>
               <Typography>{AboutData.longDescription}</Typography>
            </ListItem>
            <Grid2 container sx={{ flexDirection: 'row' }}>
               <Box sx={{ justifyContent: 'flex-start', flexDirection: 'column', width: '50%' }}>
                  <Typography sx={{ whiteSpace: 'no-wrap' }}> {LocationData.locationAddress.split(',')}</Typography>
               </Box>
               <Box
                  sx={{
                     flexDirection: 'column',
                     justifyContent: 'flex-end',
                     width: '40%',
                     cursor: 'pointer',
                  }}>
                  <a href={`${LocationData.locationMapLink}`} target="blank" rel="noopener noreferrer">
                     <Box
                        component='img'
                        role='button'
                        sx={{
                           display: 'block',
                           ml: 'auto',
                           mr: 'auto',
                           width: '50%',
                        }}
                        alt="Map to Allure Salon."
                        src={salonMap}
                     />
                  </a>
               </Box>
            </Grid2>
         </List>
         <List sx={{ flexDirection: 'column', justifyContent: 'flex-end', width: '40%' }}>
            <ContactForm />
         </List>
      </Grid2>
   )
}

export default aboutPage;