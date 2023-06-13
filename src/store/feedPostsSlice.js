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
     },
     addPost : (state,action)=>{
      const newPosts = [action.payload,...state.posts];
      state.posts = newPosts;
     }
   }
});
export const {setFeedPosts,removeFeedPosts,addPost} = feedPostsSlice.actions;
export default feedPostsSlice.reducer;