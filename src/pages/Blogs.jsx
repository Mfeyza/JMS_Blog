import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../thunks/blogsthunk";
import Blog from "../components/Blog";
import { Grid, Stack } from "@mui/material";
import Categories from "../components/Categories";
import { getCategories } from "../thunks/categoriesthunk";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, IconButton, Box, Container } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Advise from "../components/Advice";
const Blogs = () => {
  const blog = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  const [mostblogs, setMostBlogs] = useState([]);
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBlogs({}));
  }, [dispatch]);

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current: container } = scrollRef;
    const containerWidth = container.clientWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  useEffect(() => {
    console.log(blog?.blogs);
    if (blog?.blogs?.length > 0) {
      // blog?.blogs dizisinin bir kopyasını oluştur
      const blogsCopy = [...blog?.blogs];
      // Kopya üzerinde sıralama yap
      const sortedBlogs = blogsCopy.sort((a, b) => b.likes.length - a.likes.length);
      // Sıralanmış kopyayı state'e ata
      setMostBlogs(sortedBlogs);
    }
  }, [blog]);
  
  console.log(mostblogs);

  const skeleton = () => {
    if (blog.loading) {
      return (
        <Grid>
          {[...new Array(6)].map((_, index) => (
            <Skeleton
              sx={{ height: "40vh", padding: "0px" }}
              animation="wave"
            />
          ))}
        </Grid>
      );
    }
  };
  const filterDate = () => {
    if (!blog?.blogs) {
      return [];
    }

    return [...blog.blogs].sort((a, b) => {
      const dateA = new Date(a.createdAt),
        dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={0} md={3} >
        <Box sx={{padding:4}}>
        <Advise />
        </Box>
       
        <Box sx={{padding:4, mt:5}}>
          <Typography variant="h5" sx={{bgcolor:"#3cb97f",textAlign:"center"}}>Top 3 Blogs</Typography>
          {mostblogs.splice(0,3).map(({image,title})=>{
          return <Box sx={{mt:3}}>
           <img src={image} style={{width:"50px", height:"50px"}} /> 
         <Typography>{title}</Typography>
          </Box>
         
          })}
        
        </Box>
      </Grid>

      <Grid item xs={12} md={9}>
        <Stack flexDirection={"column"} flexWrap={"wrap"} width={"100%"}>
          <Stack
            flexDirection={"row"}
            gap={4}
            width={"100%"}
            justifyContent={"center"}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "500px",
                maxWidth: "90%",
              }}
            >
              <IconButton
                className="btn"
                onClick={() => handleScroll("left")}
                aria-label="scroll left"
              >
                <ArrowBackIosNewIcon sx={{ width: "1rem" }} />
              </IconButton>
              <Box
                ref={scrollRef}
                sx={{
                  overflowX: "auto",
                  display: "flex",
                  flexWrap: "nowrap",
                  width: "100%",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    p: 2,
                    gap: "5rem",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => dispatch(getBlogs({}))}
                  >
                    All
                  </Typography>
                  {categories?.map((category) => {
                    return <Categories category={category} />;
                  })}
                </Box>
              </Box>
              <IconButton
                className="btn"
                onClick={() => handleScroll("right")}
                aria-label="scroll right"
              >
                <ArrowForwardIosIcon sx={{ width: "1rem" }} />
              </IconButton>
            </Box>
          </Stack>

          <Stack width={"100%"}>
            <Container>
              {skeleton()}
              {filterDate()?.map((item) => {
                return <Blog item={item} isProfile={false} />;
              })}
            </Container>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Blogs;
