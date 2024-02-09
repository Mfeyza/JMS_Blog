import React, { useRef } from 'react';
import { Stack, Typography, IconButton, Box } from '@mui/material';


const Categories = ({ category }) => {
   
  
    return (
      
              <Typography sx={{color:"rgb(66, 64, 64)"}} noWrap>{category?.name}</Typography>
          
    );
  };
  
  export default Categories;