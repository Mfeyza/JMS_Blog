import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";


function AdviceGenerator() {
    const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState('');
  
    // API'den tavsiye çeken fonksiyon
    const fetchAdvice = async () => {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        setAdvice(response.data.slip.advice);
        setAdviceId(response.data.slip.id);
      } catch (error) {
        console.error('Advice generation error:', error);
      }
    };
  
    useEffect(() => {
      fetchAdvice(); // Component yüklendiğinde ilk isteği hemen yap
      const intervalId = setInterval(fetchAdvice, 5000); // Sonrasında her 5 saniyede bir tekrarla
  
      // Component unmount olduğunda interval'ı temizle
      return () => clearInterval(intervalId);
    }, []);

  return (
    <Grid Container mt={3}>
        <Grid item >
        <Typography>A D V I S E </Typography>
      <Typography>"{advice}"</Typography>
        </Grid>
      
    </Grid>
  );
}

export default AdviceGenerator;
