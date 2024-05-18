import {
  Box,
  Container,
  Stack,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tooltip,
  TextField,
  Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, getBlog, postLike } from "../thunks/blogsthunk";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import EditBlogModal from "../components/EditBlogModal";
import CommentDriver from "../components/CommentDrawer";

const BlogDetails = () => {
  const currentBlog = useSelector((state) => state.blogs.currentBlog);
  console.log(currentBlog);
  const blogUserId = useSelector((state) => state.auth._id);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params || {};
  const {
    image,
    title,
    content,
    likes,
    comments,
    countOfVisitors,
    updatedAt,
    createdAt,
    userId,
  } = currentBlog?.data || {};
  console.log(blogUserId);
  const modalDetail = {
    ...currentBlog?.data,
    categoryId: currentBlog?.data?.categoryId?._id,
  };
  console.log(modalDetail);
  const [openEditModal, setOpenEditModal] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  const dateString = new Date(createdAt).toLocaleDateString("tr-TR");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDelete = () => {
    dispatch(deleteBlog({ id, navigate }));
  };
  const handleLike = () => {
    dispatch(postLike({ id, detail: true }));
  };

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <EditBlogModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        handleClose={handleClose}
        modalDetail={modalDetail}
        handleCloseAnchor={handleCloseAnchor}
      />
      <Container>
        <Grid container spacing={0} sx={{ mt: 10, mb: 10 }}>
          <Grid item md={12}>
            <Card>
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  width: "50%",
                  objectFit: "contain",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <CardContent>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <Typography variant="h4" component="div">
                    {title}
                  </Typography>
                  <Tooltip title="save" arrow>
                    <IconButton className="btn" size="medium">
                      <BookmarkAddedOutlinedIcon sx={{ width: "3rem" }} />
                    </IconButton>
                  </Tooltip>
                  {userId?._id === blogUserId && (
                    <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <MoreHorizIcon className="btn" />
                      </Button>

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseAnchor}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClickOpen}>
                          <div>
                            Edit{" "}
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              style={{ paddingLeft: "5px" }}
                              className="btn"
                            />
                          </div>
                        </MenuItem>
                        <MenuItem onClick={handleDelete}>
                          <div>
                            Delete
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="btn"
                              style={{ paddingLeft: "5px" }}
                            />
                          </div>
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
                </Stack>
                <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                  <Avatar>{userId?.firstName.substring(0, 1)}</Avatar>
                  <Typography>
                    {userId?.firstName} {userId?.lastName}
                  </Typography>
                  <Typography component="div">{dateString}</Typography>
                  <Button
                    className="btn"
                    size="small"
                    sx={{ display: "flex", gap: "0.3rem" }}
                  >
                    <RemoveRedEyeTwoToneIcon sx={{ width: "1rem" }} />
                    {countOfVisitors !== 0 && countOfVisitors}
                  </Button>
                </Stack>
                <Typography
                  dangerouslySetInnerHTML={{ __html: content }}
                  mt={3}
                  variant="body2"
                  color="text.secondary"
                />
              </CardContent>
              <Grid
                item
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "start",
                  maxWidth: "100%",
                }}
              >
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Tooltip title="like" arrow>
                    <IconButton
                      className="btn"
                      size="small"
                      sx={{ display: "flex", gap: "0.3rem" }}
                    >
                      <FontAwesomeIcon
                        icon={faHandsClapping}
                        style={{ fontSize: "1.5rem" }}
                        onClick={handleLike}
                      />
                      {likes?.length !== 0 && likes?.length}
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow>
                    <IconButton
                      className="btn"
                      size="small"
                      sx={{ display: "flex", gap: "0.3rem" }}
                    >
                      <CommentDriver
                        toggleDrawer={toggleDrawer}
                        state={state}
                      />
                      {comments?.length !== 0 && comments?.length}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default BlogDetails;
