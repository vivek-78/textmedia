import React from "react";
import "./NavBar.css";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFeedPosts } from "./store/feedPostsSlice";
const NavBar = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const handleLogOut = () => {
     Cookies.remove("jwtToken");
     navigate("/");
     dispatch(removeFeedPosts());
   }
    return(
        <div class="navbar">
        <span class="navbar-brand">TextMedia</span>
        <button class="logout-button" onClick={handleLogOut}>Log Out</button>
      </div>
    )
}

export default NavBar