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
import { postBlog } from "../thunks/blogsthunk";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const initialState = {
    title: "",
    content: "",
    image: "",
    categoryId: null,
    isPublish: false,
  };
  const [info, setInfo] = useState(initialState);
  const { title, content, image, categoryId, isPublish } = info;

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
  const handleSubmit = (checking) => {
    const values = {
      ...info,
      isPublish: checking === "draft" ? false : true,
    };

    dispatch(postBlog({ values, navigate }));
  };

  return (
    <Container>
      <Stack sx={{ justifyContent: "center", flexDirection: "column" }}>
        <div>
          <FormControl fullWidth>
            <TextField
              id="filled-multiline-flexible"
              label="Title"
              multiline
              maxRows={4}
              variant="filled"
              value={title}
              onChange={handleChange}
              name="title"
            />
            <TextField
              id="filled-textarea"
              label="image"
              placeholder="Placeholder"
              multiline
              variant="filled"
              value={image}
              onChange={handleChange}
              name="image"
            />
            <TextField
              id="filled-multiline-static"
              label="Content"
              value={content}
              onChange={handleChange}
              name="content"
              multiline
              rows={4}
              variant="filled"
            />

            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoryId}
              label="Category"
              onChange={handleChange}
              name="categoryId"
            >
              {categories?.map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            <Button
              variant="contained"
              type="button"
              onClick={() => handleSubmit("draft")}
            >
              Draft
            </Button>
            <Button
              variant="outlined"
              type="button"
              onClick={() => handleSubmit("published")}
            >
              Published
            </Button>
          </FormControl>
        </div>
      </Stack>
    </Container>
  );
};

export default NewBlog;
