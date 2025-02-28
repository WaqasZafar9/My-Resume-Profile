import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const projectData = {
  pettify: {
    title: "Pettify App",
    description:
      "A pet care mobile app built with Flutter and Firebase for seamless pet adoption and services.",
    stack: ["Flutter", "Firebase", "Dart"],
    images: [
      "https://via.placeholder.com/600x350",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/400x250",
    ],
  },
  license: {
    title: "Smart E-License System",
    description:
      "A web application that streamlines the process of issuing digital driving licenses using AI.",
    stack: ["Java", "Spring Boot", "MySQL"],
    images: [
      "https://via.placeholder.com/600x350",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/400x250",
    ],
  },
  cricket: {
    title: "Galaxy Cricket Website",
    description:
      "A dynamic cricket news website offering real-time scores, team updates, and match analysis.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    images: [
      "https://via.placeholder.com/600x350",
      "https://via.placeholder.com/500x300",
      "https://via.placeholder.com/400x250",
    ],
  },
};

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
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
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
        onMouseEnter={(e) => (e.target.style.color = "#fff")}
        onMouseLeave={(e) => (e.target.style.color = "#bbb")}
      >
        ← Home
      </button>

      {/* Project Title */}
      <h1 style={{ fontSize: "26px", fontWeight: "600", marginBottom: "10px" }}>
        {project.title}
      </h1>

      {/* Project Description */}
      <p
        style={{
          fontSize: "16px",
          color: "#ddd",
          lineHeight: "1.6",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        {project.description}
      </p>

      {/* Stack Section */}
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
          <span
            key={index}
            style={{
              background: "#222",
              padding: "8px 15px",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#333")}
            onMouseLeave={(e) => (e.target.style.background = "#222")}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Images */}
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Project ${index}`}
            style={{
              width: "100%",
              borderRadius: "8px",
              animation: "fadeIn 1s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
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
