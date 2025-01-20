import { Box, List, ListItem } from "@mui/material";
import React from "react";
import cover from '../assets/floral-background.png';

function errorPage() {
   return (
    <Box 
      sx={{
         backgroundImage: `url(${cover})`,
      }}
    >
      <List>
         <ListItem>404</ListItem>
         <ListItem>Sorry we couldn't find the page you are looking for</ListItem>
         <ListItem>Back to Home</ListItem>
      </List>
    </Box>
   )
}

export default errorPage;