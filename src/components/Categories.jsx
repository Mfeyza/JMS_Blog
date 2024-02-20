import React, { useRef } from "react";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { getBlogs } from "../thunks/blogsthunk";

const Categories = ({ category }) => {
  const dispatch = useDispatch();
  const handleCategory = (id) => {
    dispatch(getBlogs({ categoryId: id }));
    console.log(category);
  };

  return (
    
    <Typography
      onClick={() => handleCategory(category?._id)}
      sx={{ color: "rgb(66, 64, 64)", cursor: "pointer" }}
      noWrap
    >
      {category?.name}
    </Typography>
  );
};

export default Categories;
