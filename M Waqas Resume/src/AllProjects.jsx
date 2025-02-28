import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: "pettify", title: "Pettify App", category: "Mobile App", media: "https://via.placeholder.com/400x250", type: "image" },
  { id: "license", title: "Smart E-License System", category: "Web Application", media: "https://via.placeholder.com/400x250", type: "image" },
  { id: "cricket", title: "Galaxy Cricket Website", category: "Website", media: "https://via.placeholder.com/400x250", type: "image" },
  { id: "ecommerce", title: "E-Commerce App", category: "Mobile App", media: "https://via.placeholder.com/400x250", type: "image" },
  { id: "portfolio", title: "Personal Portfolio", category: "Portfolio Website", media: "https://via.placeholder.com/400x250", type: "image" },
];

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px", fontFamily: "'Inter', sans-serif" }}>
      
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

      {/* Title */}
      <h1 style={{ fontSize: "26px", fontWeight: "600", marginBottom: "10px" }}>Projects</h1>

      {/* Project Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginTop: "20px" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: "#1c1c1c",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => navigate(`/projects/${project.id}`)}
            onMouseEnter={(e) => (e.target.style.background = "#333")}
            onMouseLeave={(e) => (e.target.style.background = "#1c1c1c")}
          >
            {/* Image */}
            <img src={project.media} alt={project.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />

            {/* Project Info */}
            <div style={{ padding: "12px" }}>
              <h3 style={{ margin: "5px 0", fontSize: "16px", fontWeight: "600" }}>{project.title}</h3>
              <p style={{ fontSize: "14px", color: "#bbb" }}>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllProjects;
