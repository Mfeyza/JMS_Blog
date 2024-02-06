
import {createSlice} from "@reduxjs/toolkit"
import {login, register,logout} from "../thunks/auththunk"



const authSlice=createSlice({
    name:"auth",

   initialState:{
        user:null,
        loading:false,
        error:false,
        token:"",
        image:"",
    },
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.loading=true
            state.error=false
        })
        .addCase(login.fulfilled,(state,{payload})=>{
            state.loading=false
            state.error=false
            state.user=payload?.data.user.username
            state.image=payload?.data.user.image
            state.token=payload?.data.token
        })
        .addCase(login.rejected,(state)=>{
            state.loading=false
            state.error=true        
        })
        
      .addCase(register.pending, (state) => {
        state.loading = true;
      
        state.error = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.loading = false;
        state.error = false;
        state.user = payload?.data.data.username;
        state.image=payload?.data.data.image
        state.token = payload?.data.token; 
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.fulfilled,(state)=>{
        state.user = null;
        state.token = "";
      })
    }


})
export const {} = authSlice.actions
export default authSlice.reducer