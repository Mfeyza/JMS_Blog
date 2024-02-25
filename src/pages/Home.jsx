import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import img1 from "../assets/3b22bd37e20ce993d52e4c3b242b73a3.gif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Login");
  };
  return (
    <Container  sx={{ backgroundColor: "black" , minWidth:"100%"}}>
    <Stack 
      justifyContent={"space-between"}
      flexDirection={"row"}
      color={"white"}
      sx={{ backgroundColor: "black" }}
      minHeight={"100vh"}
      flexWrap={"wrap"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          marginBottom: "3rem",
          flex: 1,
        }}
      >
        <Typography variant="h2">Fuel Your Curiosity.</Typography>
        <Typography marginLeft={"1rem"}>
          Explore in-depth content on any topic from stories, thoughts, and
          expertise shared by writers."
        </Typography>
        <Button sx={{ color: "#3cb97f" }} onClick={handleClick}>
          Let's Rock and Roll!
        </Button>
      </Box>
      <Box flex={1} display={"flex"} justifyContent={"center"}>
        <img src={img1} />
      </Box>
    </Stack>
    </Container>
  );
};

export default Home;
