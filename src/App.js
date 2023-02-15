import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Login from "../src/components/pages/Login";
import Register from "../src/components/pages/Register";
import ForgotPassword from "../src/components/pages/ForgotPassword";
import Header from "./components/students/Header";
import Dashboard from "./components/students/Dashboard";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/studentdashboard" element={<Dashboard />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
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
