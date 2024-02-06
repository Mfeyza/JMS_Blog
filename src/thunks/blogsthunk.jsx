import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs=createAsyncThunk(
    "blogs",
    async(_,{rejectWithValue}) =>{
        try {
          
          const response=await axios.get(
            `${process.env.REACT_APP_BASE_URL}blogs/`
          )  
          console.log(response)
          
          return response
        } catch (error) {
            return rejectWithValue("error")
            
        }
    }
)