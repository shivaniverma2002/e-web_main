import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./LandingPages/Home/HomePage";
import "./index.css";
import Navbar from "./Navbar";
// import Footer from "./LandingPages/Footer";
import Courses from "./LandingPages/Courses/Hero";
import Batch from "./LandingPages/Mybatch/Hero";
import Login from "./LandingPages/Login/Login";
import Signup from "./LandingPages/Login/Signup";
import { ToastContainer} from "react-toastify";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <ToastContainer/>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/batch" element={<Batch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
