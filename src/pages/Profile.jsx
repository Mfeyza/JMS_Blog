import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfileModal from "../components/EditProfileModal";
import Blog from "../components/Blog";
import {  getMyBlogs } from "../thunks/blogsthunk";

const Profile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo = useSelector((state) => state.auth);
  const blogUserId = useSelector((state) => state.auth._id);
  console.log(userInfo);
  const { image, city, email, lastName, firstName, username, bio, password } =
    userInfo;
  const blog = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getMyBlogs(blogUserId));
  }, [dispatch]);
  console.log(username);
  // const skeleton = () => {
  //   if (blog.loading) {
  //     return (
  //       <Grid>
  //         {[...new Array(6)].map((_, index) => (
  //           <Skeleton
  //             sx={{ height: "40vh", padding: "0px" }}
  //             animation="wave"
  //           />
  //         ))}
  //       </Grid>
  //     );
  //   }
  // };
  console.log(blog?.blogs);
  return (
    <Container>
      <Grid container>
        <Grid
          item
          md={3}
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
        </Grid>
        <Grid item md={9}>
          {/* {skeleton()} */}

          {blog?.blogs?.map((item) => {
            return item.userId === blogUserId && <Blog item={item} isProfile={true}/>;
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
