import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "./data/projects"; // Import centralized data
import { motion } from "framer-motion";

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div
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

      {/* Title */}
      <motion.h1
        style={{
          fontSize: "26px",
          fontWeight: "600",
          marginBottom: "10px",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      {/* Project Grid */}
      <motion.div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: "#1c1c1c",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            {/* Image */}
            {project.media && (
              <img
                src={project.media}
                alt={project.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
            )}

            {/* Project Info */}
            <div style={{ padding: "12px" }}>
              <h3
                style={{
                  margin: "5px 0",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#bbb" }}>
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllProjects;
