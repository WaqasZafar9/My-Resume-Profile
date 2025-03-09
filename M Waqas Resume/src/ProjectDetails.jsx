import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectData } from "./data/projects"; // Import centralized data

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
        <h1>Project Not Found</h1>
        <button onClick={() => navigate("/")} style={buttonStyle}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05, color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "none",
          color: "#bbb",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "20px",
          transition: "0.3s",
        }}
      >
        ← Home
      </motion.button>

      {/* Project Title */}
      <motion.h1
        style={{ fontSize: "26px", fontWeight: "600", marginBottom: "10px" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>

      {/* Project Description */}
      <motion.p
        style={{
          fontSize: "16px",
          color: "#ddd",
          lineHeight: "1.6",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {project.description}
      </motion.p>

      {/* Tech Stack */}
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        Tech Stack
      </h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {project.stack.map((tech, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            style={{
              background: "#222",
              padding: "8px 15px",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Screenshots */}
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        Screenshots
      </h3>
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {project.images &&
          project.images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Project ${index}`}
              whileHover={{ scale: 1.05 }}
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            />
          ))}
      </motion.div>
    </motion.div>
  );
};

// Button Style
const buttonStyle = {
  background: "#4caf50",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "0.3s",
};

export default ProjectDetails;
