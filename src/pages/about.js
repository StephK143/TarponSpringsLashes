import { Box, List, ListItem, Grid2, Typography } from "@mui/material";
import React from "react";
import { AboutData, LocationData } from '../components/data';
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';
import salonMap from '../assets/salon-map.png';

const aboutPage = () => {

   return (
      <Grid2
         className='content'
         container>
         <Grid2 className='leftContent' item xs={1} sm={1} size={4}> <List sx={{ flexDirection: 'column', width: '50%', justifyContent: 'center' }}>
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
                     width: '50%',
                     cursor: 'pointer',
                  }}>
                  <a href={`${LocationData.locationMapLink}`} target="blank" rel="noopener noreferrer">
                     <Box
                        component='img'
                        role='button'
                        sx={{
                           display: 'block',
                           p: '1rem 0',
                           width: '50%',
                        }}
                        alt="Map to Allure Salon."
                        src={salonMap}
                     />
                  </a>
               </Box>
            </Grid2>
         </List>
         </Grid2>
         <Grid2 className='rightContent' item xs={1} sm={1} size={4}><ContactForm /></Grid2>
      </Grid2>
   )
}

export default aboutPage;