import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
  "blogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}blogs/`
      );
      console.log(response);

      return response;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const getBlog = createAsyncThunk(
  "blog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}`
      );
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const postBlog = createAsyncThunk(
  "postBlog",
  async ({ values, navigate},{rejectWithValue, getState }) => {
    const token = getState().auth.token;
    console.log("values", values);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}blogs/`,
        values,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if(response.data.isPublish){
        navigate("/profile");
      }else{
        navigate("/blogs")
      }
     
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBlog=createAsyncThunk(
  "deleteBlog",
  async(id,{navigate},{rejectWithValue,getState})=>{
    const token=getState().auth.token;
    try {
     const response=await axios.delete(
      `${process.env.REACT_APP_BASE_URL}blogs/${id}`
     ) 
    } catch (error) {
      return rejectWithValue("error")
    }
  }
)
