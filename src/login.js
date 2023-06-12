import {React,useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setToken} from "./store/authSlice";
import {setUser} from "./store/userSlice";
import {setFeedPosts} from "./store/feedPostsSlice";
import { useNavigate } from 'react-router-dom';
import "./login.css";
const Login = ()=>{
    const[userId,setUserId] = useState();
    const[password,setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSumbit = async()=>{
        const fetchedToken = await axios.post("http://localhost:8080/login",{userId,password })
            dispatch(setToken({token:fetchedToken.data.token}));
            dispatch(setUser(
            {
            firstName:fetchedToken.data.firstName,
            userId:fetchedToken.data.userId
            }));
        const fetchedPosts = await axios.get("http://localhost:8080/posts",{
            headers:{
                'authorization': fetchedToken.data.token
            }});
        dispatch(setFeedPosts({posts:fetchedPosts.data}));
        navigate('/home');  
    } 
    return(
        <div className="login">
          <div className="form">
          <h1>Textmedia</h1>
          <input className="item" type="text" onChange={(e)=>{setUserId(e.target.value)}} placeholder="enter your user Id"/>
          <input className="item" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter password"/>
          <button className="item" type="submit" onClick={handleSumbit}>Login</button>
          </div>
        </div>
    )
}

export default Login;