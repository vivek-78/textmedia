import {React,useState,useEffect} from "react";
import axios from "axios";
import "./Register.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Register = ()=>{
   const [firstName,setFirstName] = useState("");
   const [lastName,setlastName] = useState("");
   const [userId,setUserId] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();
   useEffect(()=>{
    const authToken = Cookies.get("jwtToken");
    console.log(authToken);
    if(authToken){
      navigate("/home");
    }
   },[])
   const handleSumbit = async()=>{
    const response = await axios.post("http://localhost:8080/register",{
      firstName,
      lastName,
      userId,
      password
    });
    console.log(response);
    alert("Done")
    if(response.data.token){
      Cookies.set("jwtToken",response.data.token);
      navigate("/home")
    }else{
      alert("invalid details try again")
    }
   }
    return(
        <div className="RegisterForm">
         <h1 className="title">Textmedia</h1>
        <div className="form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" 
           onChange={(e)=>{setFirstName(e.target.value)}}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" 
          onChange={(e)=>{setlastName(e.target.value)}}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input type="text" id="userId" name="userId" placeholder="Enter your user ID" 
          onChange={(e)=>{setUserId(e.target.value)}}
          required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" 
          onChange={(e)=>{setPassword(e.target.value)}}
          required />
        </div>
        <button type="submit" className="btn" onClick={handleSumbit}>Submit</button>
      </div>
      <div className="login">
      <p>already have an account?</p>
      <a href="/login"> Login here</a>
      </div>
      </div>
    )
}

export default Register