import {createSlice} from "@reduxjs/toolkit";
const feedPostsSlice = createSlice({
   name:"feedPosts",
   initialState:{
    posts:[]
   },
   reducers:{
     setFeedPosts:(state,action)=>{
      const fetchedPosts = action.payload.posts;
      state.posts = [...state.posts, ...fetchedPosts];
     },
     removeFeedPosts:(state)=>{
      state.posts = [];
     }
   }
});
export const {setFeedPosts,removeFeedPosts} = feedPostsSlice.actions;
export default feedPostsSlice.reducer;