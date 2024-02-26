import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

function AdviceGenerator() {
  const [advice, setAdvice] = useState("");

  const randomQuote = (data) => {
    let randQuote = data[Math.floor(Math.random() * data.length)];
    return randQuote.en.length < 220 ? randQuote : randomQuote(data);
  };
  // API'den tavsiye çeken fonksiyon
  const fetchAdvice = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/mudroljub/programming-quotes-api/master/Data/quotes.json"
      );
      const data = response.data;
      let randQuote = randomQuote(data);

      setAdvice(randQuote);
    } catch (error) {
      console.error("Advice generation error:", error);
    }
  };

  useEffect(() => {
    fetchAdvice(); 
    const intervalId = setInterval(fetchAdvice, 10000); 

    // Component unmount olduğunda interval'ı temizle
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid Container mt={3}>
      <Grid item >
        <Typography className="advice" sx={{mb:3}}>Dev Quote ✍🏻 </Typography>
        <Typography><i>"{advice?.en}"</i></Typography>
        <Typography><i>"-{advice?.author}"</i></Typography>
      </Grid>
    </Grid>
  );
}

export default AdviceGenerator;
