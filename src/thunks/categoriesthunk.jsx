import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories=createAsyncThunk(
    "categories/getCategories"  ,
async(_,{rejectWihValue})  =>{
    try {
      const response=await axios.get(
        `${process.env.REACT_APP_BASE_URL}categories/`
      )  
      console.log(response)
      return response.data
    } catch (error) {
        console.log("olmadı")
        return rejectWihValue("olmadı");
       
        
    }
}
)