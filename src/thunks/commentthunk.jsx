import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getBlog } from "./blogsthunk";

export const postComment = createAsyncThunk(
  "postComment",
  async ({ values }, { rejectWithValue, getState, dispatch }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}comments/`,
        values,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      dispatch(getBlog(values.blogId));
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "deleteComment",
  async ({ _id, blogId }, { rejectWithValue, getState, dispatch }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}comments/${_id}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      dispatch(getBlog(blogId));
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);


export const putComment = createAsyncThunk(
    "postBlog",
    async ({_id, blogId, values }, { rejectWithValue, getState ,dispatch}) => {
      const token = getState().auth.token;
      console.log("values", values);
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_BASE_URL}comments/${_id}`,
          values,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        dispatch(getBlog(blogId));
       
  
        return response;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  