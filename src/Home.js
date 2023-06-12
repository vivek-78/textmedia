import {React} from "react";
import PostComponent from "./PostComponent";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = ()=>{ 
    const feedPosts = useSelector(state => state.feedPosts.posts);
    return(
      <div className="homepage">
        <div className="post-container">
          {feedPosts.map((post)=>
            <PostComponent firstName={post.firstName} 
            lastName={post.lastName} 
            userId={post.userId}
            content={post.content}
            />
          )}
        </div>
     </div> 
    )
}
export default Home;
