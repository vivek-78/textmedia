import {React,useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie"
import PostComponent from "./PostComponent";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setFeedPosts } from "./store/feedPostsSlice";
import CreatePost from "./CreatePost";
import NavBar from "./NavBar"
import "./Home.css";
const Home = ()=>{ 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authToken = Cookies.get("jwtToken");
    const feedPosts = useSelector(state => state.feedPosts.posts);
    useEffect(() => {
          if(!authToken){
            navigate("/");
           }
      const fetchData = async () => {
        if(feedPosts.length) return
        try {
          const response = await axios.get('http://localhost:8080/posts', {
            headers: {
              Authorization:authToken,
            },
          });
          dispatch(setFeedPosts({ posts: response.data }));
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
    
      fetchData();
    }, []);
    return(
      <div>
      <NavBar />
      <div className="homepage">
        <div className="create-post">
        <CreatePost />
        </div>
        <div className="post-container">
          {feedPosts.map((post)=>
            <PostComponent id={post._id}
            firstName={post.firstName} 
            lastName={post.lastName} 
            userId={post.userId}
            content={post.content}
            />
          )}
        </div>
     </div> 
     </div>
    )
}
export default Home;
