import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../assets/stockgif2.gif";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";

const OurStory = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Grid container >
      <Grid item md={6} sx={{padding:"2rem", bgcolor: user ? "white" : "black"}}>
        <Card
       
        >
          <CardMedia
            component="img"
            image={img}
            alt="Açıklama"
            sx={{ objectFit: "contain" }}
            height={"100%"}
          />
        </Card>
      </Grid>
      <Grid item md={6} sx={{bgcolor:user? "white":"black", padding:"2rem"}}>
        <Typography color={user ? "black" : "white"} variant="h4" gutterBottom>
          JMSDev: Uniting Software Minds
        </Typography>
        <Typography color={user ? "black" : "white"} mt={5} sx={{ lineHeight: "1.5rem" }}>
          JMSDev stands as a dedicated platform, fostering the exchange of
          knowledge and experiences among professionals in the software
          industry. Our vision is to create a hub that promotes interaction and
          collaboration among developers, tech enthusiasts, and thinkers,
          thereby keeping everyone abreast of the industry's innovations and
          developments. At the core of our foundation lies the aspiration to
          cultivate a community where information flows freely, offering
          everyone the opportunity to learn and teach, and where innovative
          ideas and projects find support. By presenting the latest trends, best
          practices, and in-depth technical insights, JMSDev aims to make the
          software world more accessible and understandable. The motivation
          behind our founders' journey is rooted in their belief in the power of
          knowledge sharing within the software sector and the significance of a
          platform where everyone can grow through mutual learning.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurStory;
