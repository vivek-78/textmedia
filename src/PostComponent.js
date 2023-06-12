import React from "react";

const postComponent = (props)=>{
   const {firstName,lastName,userId,content} = props;
   return(
    <div className="post">
     <div>
       <h3>{firstName} {lastName}</h3>
       <h5>{userId}</h5>
     </div>
     <p>{content}</p>
    </div>
   )
};

export default postComponent;