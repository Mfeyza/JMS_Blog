import { createSlice } from "@reduxjs/toolkit";
import { getBlogs,getBlog } from "../thunks/blogsthunk";


const blogsSlice=createSlice({
    name:"blogs",

    initialState:{
        blogs:null,
        loading:false,
        error:false,
        token:"",
        image:"",
        title:"",
        content:"",
        comments:"",
        likes:"",
        countOfVisitors:"",
        comments:"",
        userId:"",
        categoryId:"",
        currentBlog:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogs.pending,(state)=>{
            state.loading=true
            state.error=false
        })
        .addCase(getBlogs.fulfilled,(state,{payload})=>{
            state.loading=false
            state.error=false
            state.blogs=payload?.data.data
            
        })
        .addCase(getBlogs.rejected,(state,{payload})=>{
            state.loading=false
            state.error=true
        })
        .addCase(getBlog.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(getBlog.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.currentBlog = payload.data; 
          })
          .addCase(getBlog.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = true;
          });
    }
})
export const {} = blogsSlice.actions
export default blogsSlice.reducer