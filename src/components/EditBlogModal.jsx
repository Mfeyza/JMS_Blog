import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../thunks/categoriesthunk";
import { getBlog, putBlog } from "../thunks/blogsthunk";
import { useNavigate } from "react-router-dom";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditBlogModal = ({ open, setOpen, handleClose, modalDetail ,handleCloseAnchor}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const initialState = {
    title: "",
    content: "",
    image: "",
    categoryId: "",
    isPublish: false,
    _id: "",
  };
  const [info, setInfo] = useState(initialState);
  const values = info;
  const id = info._id;
  const handleSubmit = () => {
    dispatch(putBlog({ id, values }));
    handleClose();
    handleCloseAnchor()
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInfo({
      ...info,
      [name]: value,
    });
  };

  React.useEffect(() => {
    setInfo(modalDetail);
    console.log(modalDetail)
  }, [modalDetail]);
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: " #3cb97f" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            ></IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Blog
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Stack sx={{ justifyContent: "center", flexDirection: "column" }}>
            <Container sx={{ mt: 8 }}>
              <FormControl fullWidth sx={{ gap: "2rem" }}>
                <TextField
                  id="filled-multiline-static"
                  multiline
                  value={info.title || ""}
                  onChange={handleChange}
                  name="title"
                  placeholder="Title"
                  variant="standard"
                  InputLabelProps={{
                    sx: {
                      fontSize: "40px",
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      label: "20px",
                      fontSize: "45px",
                      border: "none",
                      boxShadow: "none",
                      "&:hover:not(.Mui-disabled):before": {
                        border: "none",
                      },
                      "&:after": {
                        border: "none",
                      },
                    },
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    id="filled-multiline-static"
                    value={info.content || ""}
                    onChange={handleChange}
                    name="content"
                    placeholder="Tell us something..."
                    multiline
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontSize: "30px",
                        border: "none",
                        boxShadow: "none",
                        "&:hover:not(.Mui-disabled):before": {
                          border: "none",
                        },
                        "&:after": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </Box>

                <TextField
                  id="filled-textarea"
                  variant="standard"
                  placeholder="Add image https://"
                  multiline
                  value={info.image || ""}
                  onChange={handleChange}
                  name="image"
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      border: "none",
                      boxShadow: "none",
                      "&:hover:not(.Mui-disabled):before": {
                        border: "none",
                      },
                      "&:after": {
                        border: "none",
                      },
                    },
                  }}
                />

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={info.categoryId || ""}
                  label="Category"
                  onChange={handleChange}
                  name="categoryId"
                  displayEmpty
                  sx={{
                    width: "12rem",
                  }}
                >
                  <MenuItem value="" disabled>
                    Select a category
                  </MenuItem>
                  {categories?.map((item) => {
                    return (
                      <MenuItem key={item._id} value={item._id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Container>
          </Stack>
          <ListItemButton
            sx={{ mt: 10, display: "flex", justifyContent: "center" }}
          >
            <ListItemText
              onClick={handleSubmit}
              sx={{ color: "#3cb97f" }}
              primary=""
              secondary="Update Blog"
            />
          </ListItemButton>
          <Divider />
        </List>
      </Dialog>
    </>
  );
};

export default EditBlogModal;
