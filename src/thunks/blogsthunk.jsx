import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
  "blogs",
  async ({ keyword, categoryId }, { rejectWithValue }) => {
    let filtered = "";

    try {
      if (keyword && categoryId) {
        filtered = `?search[title]=${keyword}&filter[categoryId]=${categoryId}`;
      } else if (keyword) {
        filtered = `?search[title]=${keyword}`;
      } else if (categoryId) {
        filtered = `?filter[categoryId]=${categoryId}`;
      } else {
        filtered = ``;
      }

      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}blogs${filtered}`
      );

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

      return response;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const postBlog = createAsyncThunk(
  "postBlog",
  async ({ values, navigate }, { rejectWithValue, getState }) => {
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
      if (response.data.isPublish) {
        navigate("/profile");
      } else {
        navigate("/blogs");
      }

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "deleteBlog",
  async ({ id, navigate }, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    console.log(id);
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      navigate("/blogs");
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const postLike = createAsyncThunk(
  "postLike",
  async (
    { id, detail, blogUserId,isProfile },
    { rejectWithValue, getState, dispatch }
  ) => {
    const token = getState().auth.token;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}/postLike`,
        null,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(isProfile)
      if (isProfile) {
         dispatch(getMyBlogs(blogUserId));
       
      } else if (detail) {
        dispatch(getBlog(id));
       
      } else {
        dispatch(getBlogs({}));
      }

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const putBlog = createAsyncThunk(
  "postBlog",
  async ({ id, values, navigate }, { rejectWithValue, getState, dispatch }) => {
    const token = getState().auth.token;
    console.log("values", values);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}`,
        values,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      dispatch(getBlog(`${id}`));

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMyBlogs = createAsyncThunk(
  "blogs",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}blogs?author=${id}`
      );

      return response;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const searchBlogs = createAsyncThunk(
  "searchBlog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
    } catch (error) {}
  }
);


