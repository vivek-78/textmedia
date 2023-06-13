import {React,useState} from "react";
import "./CreatePost.css";
import Cookies from "js-cookie"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "./store/feedPostsSlice";
const CreatePost = ()=>{
    const[content,setContent] = useState("");
    const[title,setTitle] = useState("");
    const authToken = Cookies.get("jwtToken");
    const dispatch = useDispatch();
    const handleSubmit = async()=>{
        const response = await axios.post('http://localhost:8080/addPost',{
            title,
            content
        },{
            headers: {
              Authorization:authToken,
            },
          });
        console.log(response);
        dispatch(addPost(response.data));
        setTitle("");
        setContent("");
    }
    return(
        <div className="createpost-card">
         <div className="head">
         <h2>Add new Post</h2>
         </div>
         <hr />
         <div>
         <h3>Title:</h3>
         <input className="post-title" name="post-title" onChange={(e)=>{setTitle(e.target.value)}} />
         </div>
         <div>
         <h3>content:</h3>
         <textarea type="text" name="post-title" rows="5" className="content" onChange={(e)=>{setContent(e.target.value)}} required />
         </div>
         <button onClick={handleSubmit}>Post</button>
        </div>
    )
}

export default CreatePost;