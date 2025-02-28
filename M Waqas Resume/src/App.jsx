import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import ProjectDetails from "./ProjectDetails";
import AllProjects from "./AllProjects"; 

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh", padding: "20px", fontFamily: "'Inter', sans-serif" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
