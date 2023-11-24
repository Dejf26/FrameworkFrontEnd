import React from "react";
import {Routes, Route} from "react-router-dom";
import Photos from "./Photos";
import Profile from "./Profile";
import Blog from "./Blog";

const Navigation = () => {
return(
<Routes>
    <Route path="/photos" element ={<Photos/>} />
    <Route path="/profile" element ={<Profile/>} />
    <Route path="/blog" element ={<Blog/>} />
</Routes>
);
};

export default Navigation