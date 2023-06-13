import React from "react";
import "./PostComponent.css"
const postComponent = (props)=>{
   const {firstName,lastName,userId,content,id} = props;
   return(
    <div className="card">
     <div className="card-header">
       <h3 className="user-name">{firstName} {lastName}</h3>
       <h5 className="userId">@{userId}</h5>
     </div>
     <div className="card-body">
     <p>{content}</p>
     </div>
    </div>
   )
};

export default postComponent;