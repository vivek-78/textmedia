import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
   name:"auth",
   initialState:{
    jwtToken:"null"
   },
   reducers:{
    setToken:(state,action)=>{
        state.jwtToken = action.payload.token;
    },
    removeToken:(state)=>{
        state.jwtToken = null;
    }
   }
});
export const {setToken,removeToken} = authSlice.actions;
export default authSlice.reducer;