import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../thunks/categoriesthunk";
import { postBlog } from "../thunks/blogsthunk";
import { useNavigate } from "react-router-dom";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";
import { Editor } from "primereact/editor";
const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const initialState = {
    title: "",
    content: "",
    image: "",
    categoryId: "",
    isPublish: false,
  };
  const [info, setInfo] = useState(initialState);
  const { title, content, image, categoryId, isPublish } = info;
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleTextChange = (e) => {
    setText(e.htmlValue);
    setInfo({
      ...info,
      content: e.htmlValue,
    });
  };

  const handleSubmit = (checking) => {
    const values = {
      ...info,
      isPublish: checking === "draft" ? false : true,
    };

    dispatch(postBlog({ values, navigate }));
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };


  return (
    <Container
      sx={{
        borderLeft: "1px solid rgb(214, 201, 201)",
        borderRight: "1px solid rgb(214, 201, 201)",
        minHeight: "100vh",
      }}
    >
      <Stack sx={{ justifyContent: "center", flexDirection: "column" }}>
        <Container sx={{ mt: 8 }}>
          <FormControl fullWidth sx={{ gap: "2rem" }}>
            <TextField
              id="filled-multiline-static"
              multiline
              value={title}
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
              <Editor
                name="content"
                value={text || content || ""}
                onTextChange={handleTextChange}
                style={{ height: "320px" }}
                
               
              />
              <Button
                onClick={handleShow}
                sx={{
                  width: "8rem",
                  color:"#3cb97f"
                }}
              >
                <NoteAddSharpIcon />
              </Button>
            </Box>

            {show && (
              <>
                <TextField
                  id="filled-textarea"
                  variant="standard"
                  placeholder="Add image https://"
                  multiline
                  value={image}
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
                  value={categoryId}
                  label="Category"
                  onChange={handleChange}
                  name="categoryId"
                  displayEmpty
                  disableUnderline
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
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#3cb97f",
                      color: "white",
                      "&:hover": {
                        backgroundColor:  "#3cb97f",
                      },
                    }}
                    onClick={() => handleSubmit("draft")}
                  >
                    Draft
                  </Button>
                  <Button
                    variant="outlined"
                    type="button"
                    className="btn"
                    onClick={() => handleSubmit("published")}
                  >
                    Published
                  </Button>
                </Box>
              </>
            )}
          </FormControl>
        </Container>
      </Stack>
    </Container>
  );
};

export default NewBlog;
