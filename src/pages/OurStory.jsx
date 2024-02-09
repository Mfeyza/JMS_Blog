import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import img from "../assets/stockgif2.gif"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const OurStory = () => {
  return (
  <Stack minHeight={"100vh"} sx={{display:"flex",  alignItems:"center" ,backgroundColor:"black"}}>
    <Box sx={{display:"flex", justifyContent:"space-between",maxWidth:"100%" ,gap:"5rem", mt:"5rem", flexWrap:"wrap"}}>
   <Card sx={{backgroundColor:"black",width:{xs:"100%",sm:"45%"}}} >
  <CardMedia
 
    component="img"
    image={img}
    alt="Açıklama"
    sx={{mt:"2rem",objectFit:"contain", }}
    height={500} 
  />
</Card>
    <Box sx={{display:"flex", flexDirection:"column", width:{xs:"100%",sm:"50%"}}}>
    <Typography color={"white"} variant="h4" gutterBottom>
          JMSDev: Uniting Software Minds
        </Typography>
    <Typography color={"white"} mt={5} sx={{lineHeight:"1.5rem"}}>
    JMSDev stands as a dedicated platform, fostering the exchange of knowledge and experiences among professionals in the software industry. Our vision is to create a hub that promotes interaction and collaboration among developers, tech enthusiasts, and thinkers, thereby keeping everyone abreast of the industry's innovations and developments. At the core of our foundation lies the aspiration to cultivate a community where information flows freely, offering everyone the opportunity to learn and teach, and where innovative ideas and projects find support. By presenting the latest trends, best practices, and in-depth technical insights, JMSDev aims to make the software world more accessible and understandable. The motivation behind our founders' journey is rooted in their belief in the power of knowledge sharing within the software sector and the significance of a platform where everyone can grow through mutual learning.
    </Typography>


    </Box>
    </Box>
  

  </Stack>
  )
}

export default OurStory