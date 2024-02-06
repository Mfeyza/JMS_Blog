import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login  from "../pages/Login";
import Register  from "../pages/Register";
import Navbar from "../components/Navbar";
import Blogs from "../pages/Blogs";
import PrivateRouter from "./PrivateRouter";
import OurStory from "../pages/OurStory";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <Router>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/our-story" element={<OurStory/>}/>
      <Route path="/blogs" element={<PrivateRouter />}>
    <Route path="/blogs" element={<Blogs/>}  />
    <Route path="/blogs/profile" element={<Profile/>}  />
  
    </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
