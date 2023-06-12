import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        firstName:"user",
        userId:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.firstName = action.payload.firstName;
            state.userId = action.payload.userId;
        },
        logoutUser:(state) =>{
            state.firstName = null;
            state.userId = null; 
        }
    }
});
export const {setUser,logoutUser} = userSlice.actions;
export default userSlice.reducer;
