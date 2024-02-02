import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login  from "../pages/Login";
import Register  from "../pages/Register";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
      <Route>

      </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
