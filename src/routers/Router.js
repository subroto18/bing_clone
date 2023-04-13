import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFount from "../pages/404";
import Home from "../pages/Home";
const Router = () => {
    return   <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/home" element={<NotFount />}/>
              </Routes>
</BrowserRouter>

}

export default Router