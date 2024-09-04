import React, { useEffect } from "react";
import { Box, Button, Container, Stack, Typography,Grid } from "@mui/material";
import img1 from "../assets/3b22bd37e20ce993d52e4c3b242b73a3.gif";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Blog from "../components/Blog"
import { getBlogs } from "../thunks/blogsthunk";

const Home = () => {
  const blog = useSelector((state) => state.blogs);
  const blogUserId = useSelector((state) => state.auth._id);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleClick = () => {
    navigate("/blogs");
  };
  useEffect(()=>{
    dispatch(getBlogs({}))
  },[dispatch])
  return (
   
    <Stack 
    className="home"
    display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      color={"white"}
      sx={{ backgroundColor: "black" }}
     
      
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          marginBottom: "3rem",
          // flex: 1,
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
      <Box className="imgContainer">
      <img src={img1} />
      </Box>
       
      
    </Stack>
  
  
  );
};

export default Home;
