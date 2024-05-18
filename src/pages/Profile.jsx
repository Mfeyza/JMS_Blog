import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfileModal from "../components/EditProfileModal";
import Blog from "../components/Blog";
import { getMyBlogs } from "../thunks/blogsthunk";

const Profile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo = useSelector((state) => state.auth);
  const blogUserId = useSelector((state) => state.auth._id);
 const [show,setShow]=useState(!(window.innerWidth < 768))
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

 
  const { image, city, email, lastName, firstName, username, bio, password } =
    userInfo;
  const blog = useSelector((state) => state.blogs);
  const [selectedBlog, setSelectedBlog] = useState([]);
  useEffect(() => {
    dispatch(getMyBlogs(blogUserId));
    const blogs = sessionStorage.getItem("savedBlogs");
    setSelectedBlog(blogs ? JSON.parse(blogs) : []);
  }, [dispatch]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleShow = () => {
    if (isMobile) {
      setShow(!show);
    }
  };
  return (
    <Container>
      <Grid container>
        <Grid
          item
          md={3}
          xs={12}
          justifyContent={"space-between"}
          flexDirection={"row"}
          flexWrap={"wrap"}
        
         
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "5rem",
              gap: "1rem",
            }}
          >
            <img
              src={image}
              alt=""
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            />
            <Typography>
              {firstName}
              {lastName}
            </Typography>
            <Typography>{bio}</Typography>
            <Typography>{city}</Typography>
            <Typography sx={{ cursor: "pointer" }} onClick={handleOpen}>
              Edit Profile
            </Typography>
            <EditProfileModal
              handleOpen={handleOpen}
              setOpen={setOpen}
              open={open}
              handleClose={handleClose}
              userInfo={userInfo}
            />
          </Box>
          <Typography onClick={handleShow}  sx={{cursor:"pointer",textAlign:"center",marginRight:3,mt:3, bgcolor:"#3cb97f"}}>My Favorite Blogs</Typography>
          {show && (
          <Box sx={{padding:3,gap:"5px"}}>
            {
              selectedBlog.map((item)=>{
                return <Box sx={{display:"flex", gap:"5px", pt:3}}>
                  <img src={item?.image} style={{width:"50px", height:"50px"}} />
                  <Typography>{item?.title}</Typography>
                </Box>
              })
            }
          </Box>)}
        </Grid>
        <Grid item md={9} xs={12}>
          {/* {skeleton()} */}

          {blog?.blogs?.map((item) => {
            return (
              item.userId === blogUserId && (
                <Blog item={item} isProfile={true} />
              )
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
