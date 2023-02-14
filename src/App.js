import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Login from "./components/Login";
import Header from "./components/students/Header";
import Dashboard from "./components/students/Dashboard";
import Registration from "./components/students/Registration";
import AdminDashBoard from "./components/admin/AdminDashBoard";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/studentdashboard" element={<Dashboard />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
