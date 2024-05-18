import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Blogs from "../pages/Blogs";
import PrivateRouter from "./PrivateRouter";
import OurStory from "../pages/OurStory";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";
import BlogDetails from "../pages/BlogDetails";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/" element={<PrivateRouter />}>
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="blogs/profile" element={<Profile />} />
        <Route path="blogs/newBlog" element={<NewBlog />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default AppRouter;
