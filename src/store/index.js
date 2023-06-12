import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice"
import feedPostsSlice from "./feedPostsSlice";

const store = configureStore({
    reducer:{
        feedPosts:feedPostsSlice,
        user:userSlice,
        auth:authSlice
    }
});

export default store;