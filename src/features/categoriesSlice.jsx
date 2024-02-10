import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../thunks/categoriesthunk";

const categoriesSlice=createSlice({
    name:"categories",

    initialState:{
        name:"",
        _id:""

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.pending,(state)=>{
            state.loading=true
            state.error=false
        })
        .addCase(getCategories.fulfilled,(state,{payload})=>{
            state.loading=false
            state.error=false
            state.categories=payload?.data
            
        })
        .addCase(getCategories.rejected,(state,{payload})=>{
            state.loading=false
            state.error=true
        })
    }

})
export const {}=categoriesSlice.actions
export default categoriesSlice.reducer