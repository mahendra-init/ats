import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Login from "../src/components/pages/Login";
import AdminLogin from "../src/components/pages/AdminLogin";
import AdminRegister from "../src/components/pages/AdminRegister";
import Register from "../src/components/pages/Register";
import ForgotPassword from "../src/components/pages/ForgotPassword";
import Dashboard from "./components/students/Dashboard";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import BlogFeature from "./components/BlogFeature";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/feature-blogs" element={<BlogFeature />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/studentdashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
