import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Home from "./Home"; 
import Register from "./Register"
const AppRoutes = ()=>{
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;