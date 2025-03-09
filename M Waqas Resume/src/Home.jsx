import React, { useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import profilepic from "./assets/profilepic.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFigma,
  FaStripe,
  FaTwitter,
  FaInstagram,
  FaPhone, FaReact, FaNodeJs, FaPython, FaDatabase, FaAndroid, FaAws, FaGitAlt 
} from "react-icons/fa";
import { SiMongodb, SiFlutter, SiFirebase, SiLinux, SiCisco, SiOracle, SiMysql,} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { projects } from "./data/projects";

const experiences = [
  {
    company: "Social Swirl",
    role: "Flutter Developer Intern",
    location: "Lahore",
    duration: "Aug 2024 – Oct 2024",
    responsibilities: [
      "Designed and developed the company’s mobile application using Flutter.",
      "Integrated front-end UI components and API connections to enhance app functionality."
    ],
  },
  {
    company: "Riphah International University",
    role: "SIG Core Team Member",
    location: "Lahore",
    duration: "2024 – 2025",
    responsibilities: [
      "Managed and organized various student-led activities within the Special Interest Groups (SIG).",
      "Designed bootcamp strategies to facilitate structured learning.",
      "Conducted bootcamps on emerging technologies and software development."
    ],
  },
  {
    company: "AWS Learning Club Riphah",
    role: "Co-Lead",
    location: "Lahore",
    duration: "2024 – 2025",
    responsibilities: [
      "Managed and organized AWS-related events and workshops.",
      "Guided students in AWS certifications and cloud computing fundamentals.",
      "Facilitated training sessions on AWS cloud services and applications."
    ],
  },
  {
    company: "SOFTEC FAST Lahore",
    role: "Ambassador SOFTEC’25",
    location: "Lahore",
    duration: "Jan 2025 – Apr 2025",
    responsibilities: [
      "Led PR and marketing campaigns for the SOFTECH’25 event.",
      "Engaged in community outreach to increase event participation."
    ],
  },
  {
    company: "Digicon Valley",
    role: "Python Internship Boot Camp",
    location: "Lahore",
    duration: "2024 – Present",
    responsibilities: [
      "Completed a 7-day intensive Python internship focusing on practical applications.",
      "Worked on developing programming and automation skills."
    ],
  },
  {
    company: "CodemoTeams",
    role: "PR & Marketing Representative",
    location: "Lahore",
    duration: "2024 – Present",
    responsibilities: [
      "Managed PR and marketing strategies for community engagement.",
      "Organized outreach activities to enhance brand visibility."
    ],
  },
];

const educationData = [
  {
    degree: "Bachelor in Computer Science",
    university: "Riphah International University",
    location: "Lahore, Pakistan",
    duration: "Oct 2021 – July 2025",
    description: "Currently in the last semester. Coursework includes Flutter development, MERN stack, and AI concepts."
  },
];


const certifications = [
  {
    title: "Internship in Flutter Development",
    organization: "Social Swirl",
    year: "2024",
    link: "https://www.linkedin.com/in/m-waqas-zafar/details/certifications/",
  },
  {
    title: "Site Reliability Engineering: Measuring and Managing Reliability",
    organization: "Google (Coursera)",
    year: "2024",
    link: "https://coursera.org/verify/YL8SDS856JQN",
  },
  {
    title: "Building a Dynamic Web App Using PHP & MySQL",
    organization: "Coursera",
    year: "2024",
    link: "https://coursera.org/verify/R73CQWNR6WZ2",
  },
  {
    title: "AWS Academy Cloud Architecting",
    organization: "Amazon Web Services Training and Certification",
    year: "2024",
    link: "https://www.credly.com/badges/1129539a-204f-423a-97df-9493644549a6/public_url",
  },
  {
    title: "Ordered Data Structures",
    organization: "Coursera",
    year: "2024",
    link: "https://coursera.org/verify/H9DEPPFDZT3B",
  },
  {
    title: "Oracle Database Foundations",
    organization: "Coursera",
    year: "2024",
    link: "https://coursera.org/verify/KQG4G7F954N3",
  },
  {
    title: "Python 7 Days BootCamp",
    organization: "Digicon Valley",
    year: "2024",
    link: "https://www.linkedin.com/in/m-waqas-zafar/details/certifications/",
  },
  {
    title: "Generative AI",
    organization: "Google",
    year: "2024",
    link: "https://shorturl.at/ZqryQ",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "IBM, Coursera",
    year: "2024",
    link: "https://coursera.org/verify/BCZJ499ME9BG",
  },
  {
    title: "Networking Essentials",
    organization: "Cisco Networking Academy",
    year: "2024",
    link: "https://shorturl.at/eyfKi",
  },
  {
    title: "NDG Linux Essentials",
    organization: "Cisco Networking Academy",
    year: "2024",
    link: "https://shorturl.at/IC4f9",
  },
];



const stackItems = [
  {
    name: "React.js",
    category: "Frontend Development",
    icon: <FaReact />,
    link: "https://reactjs.org/",
  },
  {
    name: "Node.js",
    category: "Backend Development",
    icon: <FaNodeJs />,
    link: "https://nodejs.org/",
  },
  {
    name: "Flutter",
    category: "Mobile App Development",
    icon: <SiFlutter />,
    link: "https://flutter.dev/",
  },
  {
    name: "Python",
    icon: <FaPython />,
    link: "https://www.python.org/",
  },
  {
    name: "Firebase",
    category: "Backend as a Service",
    icon: <SiFirebase />,
    link: "https://firebase.google.com/",
  },
  {
    name: "MongoDB",
    category: "Cloud Database",
    icon: <SiMongodb />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    category: "Database Management",
    icon: <SiMysql />,
    link: "https://www.mysql.com/",
  },
  {
    name: "Oracle Database",
    category: "Relational Database",
    icon: <SiOracle />,
    link: "https://www.oracle.com/database/",
  },
  {
    name: "AWS Cloud",
    category: "Cloud Computing",
    icon: <FaAws />,
    link: "https://aws.amazon.com/",
  },
  {
    name: "Figma",
    category: "web & app design",
    icon: <FaFigma />,
    link: "https://www.figma.com/",
  },
  {
    name: "Linux",
    icon: <SiLinux />,
    link: "https://www.linux.org/",
  },
  {
    name: "Cisco Networking",
    category: "Networking",
    icon: <SiCisco />,
    link: "https://www.cisco.com/",
  },
  {
    name: "Github",
    category: "Project managment",
    icon: <FaGithub />,
    link: "https://github.com/WaqasZafar9/",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: <FaGitAlt />,
    link: "https://git-scm.com/",
  },
];


const posts = [

];

const Home = () => {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const stackRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "All fields are required!" });
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_66z3p0x", 
        "template_3fxk9ib", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "GAc_xsQJLuiZY_ZpD" 
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Failed to send message. Try again later!",
          });
          setLoading(false);
        }
      );
  };
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
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Intro", ref: introRef },
          { label: "About", ref: aboutRef },
          { label: "Work", ref: workRef },
          { label: "Experience", ref: experienceRef },
          { label: "Education", ref: educationRef },
          { label: "Stack", ref: stackRef },
          { label: "Blog", ref: blogRef },
          { label: "Contact", ref: contactRef },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => handleScroll(item.ref)}
            style={{
              background: "#1c1c1c",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#333")}
            onMouseLeave={(e) => (e.target.style.background = "#1c1c1c")}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {/* Profile Section */}
      <motion.div
        ref={introRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #333",
          paddingBottom: "20px",
        }}
      >
        {/* Left Section (Profile Info) */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Profile Image */}
          <motion.img
            src={profilepic}
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "12px",
              objectFit: "cover",
              border: "3px solid #444",
            }}
          />

          {/* Info */}
          <div>
            <h1
              style={{
                marginBottom: "5px",
                fontWeight: "600",
                fontSize: "22px",
              }}
            >
              M Waqas Zafar
            </h1>
            <p style={{ fontSize: "16px", color: "#bbb" }}>Computer Science</p>
            <p
              style={{
                fontSize: "14px",
                color: "#bbb",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              📍 Lahore, Pakistan
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#4caf50",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              🟢 Available for work
            </p>
          </div>
        </div>

        {/* Right Section (Links & CV) */}
        <div style={{ textAlign: "right" }}>
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05, color: "#4caf50" }}
            transition={{ duration: 0.3 }}
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              marginBottom: "8px",
            }}
          >
            🔗 View Full Portfolio
          </motion.a>

          <motion.a
            href="/assets/Resume.pdf"
            download
            whileHover={{ scale: 1.05, color: "#4caf50" }}
            transition={{ duration: 0.3 }}
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
            }}
          >
            📄 Download CV
          </motion.a>
        </div>
      </motion.div>
      {/* Contact Info */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <a
          href="mailto:mwaqaszafar76@gmail.com"
          style={{
            color: "#bbb",
            textDecoration: "none",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaEnvelope /> mwaqaszafar76@gmail.com
        </a>

        <a
          href="https://github.com/WaqasZafar9"
          style={{
            color: "#bbb",
            textDecoration: "none",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaGithub /> Github
        </a>

        <a
          href="https://bit.ly/waqaszafar-linkedin"
          style={{
            color: "#bbb",
            textDecoration: "none",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/WaqasZafar9"
          style={{
            color: "#bbb",
            textDecoration: "none",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaGithub /> View Portfolio
        </a>
      </div>
      {/* About Me Section */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 30 }} // Start slightly below
        whileInView={{ opacity: 1, y: 0 }} // Animate into place
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Runs animation once when in view
        style={{
          marginTop: "100px",
          paddingTop: "20px",
          marginBottom: "50px",
        }}
      >
        <motion.h2
          style={{ fontWeight: "600", fontSize: "22px", marginBottom: "15px" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About me
        </motion.h2>

        <motion.p
          style={{
            fontSize: "16px",
            color: "#ddd",
            lineHeight: "1.6",
            marginBottom: "20px",
            marginTop: "20px",
          }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm <strong>M Waqas Zafar</strong>,
        </motion.p>

        <motion.p
          style={{ fontSize: "16px", color: "#ddd", lineHeight: "1.6" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Currently pursuing a BS in Computer Science at Riphah International
          University, Lahore. With a foundation in Flutter, Python, Web
          development, and designing, I have developed multiple projects. I am
          passionate about leveraging modern technologies to solve real-world
          problems, as seen in my internships and project management roles. In
          addition to technical skills, I have a background in event management
          and team collaboration through my roles in bootcamps and PR. I am
          committed to continuous learning and have earned certifications in AI,
          web development, and network security.
        </motion.p>
      </motion.div>
      {/* Skills Section */}
      <motion.div
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #333",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          style={{ fontWeight: "600", fontSize: "22px", marginBottom: "15px" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skills
        </motion.h2>

        {/* Function to Render Each Skill Category */}
        {[
          {
            title: "Programming Languages & Frameworks",
            skills: [
              "Flutter (App Development)",
              "C++",
              "React.js",
              "node.js",
              "Python ",
              "HTML5 & CSS",
              "Web & App designing",
              "Editing",
            ],
          },
          {
            title: "Databases",
            skills: ["Oracle / MySQL", "Firebase", "MongoDB"],
          },
          {
            title: "Tools & Platforms",
            skills: [
              "Git & GitHub",
              "VS Code / IntelliJ / Android Studio",
              "Google Colab / Jupyter",
              "Figma / Canva",
            ],
          },
          {
            title: "Concepts",
            skills: [
              "Data Structures & Algorithms",
              "Project Documentation & Management",
              "Networking & Cloud Computing",
            ],
          },
          {
            title: "Soft Skills",
            skills: [
              "Communication & Leadership",
              "Event & Project Management",
              "Critical Thinking",
            ],
          },
        ].map((category, index) => (
          <motion.div key={index} style={{ marginBottom: "25px" }}>
            {/* Category Title */}
            <motion.h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#fff",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {category.title}
            </motion.h3>

            {/* Skill Grid */}
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "15px",
              }}
            >
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  style={{
                    background: "#1c1c1c",
                    padding: "12px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#333")}
                  onMouseLeave={(e) => (e.target.style.background = "#1c1c1c")}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {/* Projects Section */}
      <motion.div
        ref={workRef}
        style={{
          marginTop: "100px",
          paddingTop: "20px",
          borderTop: "1px solid #333",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Projects Header with Animation */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={{ fontWeight: "600", fontSize: "22px" }}>My Projects</h2>

          {/* View All Button */}
          <motion.button
            onClick={() => navigate("/projects")}
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
              transition: "0.3s",
            }}
          >
            View all →
          </motion.button>
        </motion.div>

        {/* Project Cards with Animation */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projects.slice(0, 3).map(
            (
              project,
              index // 👈 Show only first 3 projects
            ) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
                {/* Media (Image) */}
                {project.media && (
                  <img
                    src={project.media}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
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
            )
          )}
        </motion.div>
      </motion.div>
      {/* Experience */}
      {/* Experience Section Title */}
      <h2
        ref={experienceRef}
        style={{
          fontWeight: "600",
          fontSize: "22px",
          marginBottom: "30px",
          marginTop: "100px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        Experience
      </h2>
      {/* Experience List */}
      {experiences.map((exp, index) => (
        <div
          key={index}
          style={{
            marginBottom: "30px",
            paddingBottom: "15px",
            borderBottom: "1px solid #333",
            animation: "fadeInUp 0.8s ease-in-out",
          }}
        >
          {/* Location & Company */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#bbb",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "14px",
              }}
            >
              <FaMapMarkerAlt /> {exp.location}
            </p>
            <p style={{ fontSize: "14px", color: "#bbb" }}>{exp.duration}</p>
          </div>

          {/* Job Role & Company Name */}
          <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
            {exp.company}
          </h3>
          <p style={{ fontSize: "15px", color: "#bbb", marginBottom: "10px" }}>
            {exp.role}
          </p>

          {/* Responsibilities List */}
          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "14px",
              color: "#ddd",
              lineHeight: "1.6",
            }}
          >
            {exp.responsibilities.map((task, idx) => (
              <li key={idx} style={{ marginBottom: "5px" }}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Education Section Title */}
      <h2
        ref={educationRef}
        style={{
          fontWeight: "600",
          fontSize: "22px",
          marginBottom: "15px",
          marginTop: "100px",
        }}
      >
        Education
      </h2>
      {/* Education Timeline */}
      <div
        style={{ position: "relative", paddingLeft: "20px", marginTop: "30px" }}
      >
        {/* Vertical Side Border */}
        <div
          style={{
            position: "absolute",
            left: "5px",
            top: "0",
            bottom: "0",
            width: "2px",
            background: "#444",
          }}
        ></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              marginBottom: "30px",
              paddingLeft: "20px",
              position: "relative",
            }}
          >
            {/* Bullet Point on Timeline */}
            <div
              style={{
                position: "absolute",
                left: "-10px",
                top: "10px",
                width: "10px",
                height: "10px",
                background: "#4caf50",
                borderRadius: "50%",
                marginLeft: "5px",
              }}
            ></div>

            {/* Location & Duration */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#bbb",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "14px",
                }}
              >
                <FaMapMarkerAlt /> {edu.location}
              </p>
              <p style={{ fontSize: "14px", color: "#bbb" }}>{edu.duration}</p>
            </div>

            {/* Degree & University */}
            <h3
              style={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}
            >
              {edu.degree}
            </h3>
            <p
              style={{ fontSize: "15px", color: "#bbb", marginBottom: "10px" }}
            >
              {edu.university}
            </p>

            {/* Description */}
            <p style={{ fontSize: "14px", color: "#ddd", lineHeight: "1.6" }}>
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
      {/* Certifications Section Title */}
      <h2
        style={{
          fontWeight: "600",
          fontSize: "22px",
          marginBottom: "15px",
          marginTop: "100px",
        }}
      >
        Certifications
      </h2>
      {/* Certifications List */}
      <div>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 0",
              borderBottom:
                index !== certifications.length - 1 ? "1px solid #333" : "none",
            }}
          >
            {/* Certification Details */}
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {cert.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#bbb" }}>
                {cert.organization}, {cert.year}
              </p>
            </div>

            {/* View Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#bbb",
                textDecoration: "none",
                fontSize: "14px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#bbb")}
            >
              View →
            </a>
          </motion.div>
        ))}
      </div>
      {/* Stack Section Title */}
      <h2
        style={{
          fontWeight: "600",
          fontSize: "22px",
          marginBottom: "30px",
          marginTop: "70px",
        }}
      >
        Stack
      </h2>
      {/* Stack Grid */}
      <div
        ref={stackRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {stackItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px",
              background: "#1c1c1c",
              borderRadius: "8px",
              textDecoration: "none",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#333")}
            onMouseLeave={(e) => (e.target.style.background = "#1c1c1c")}
          >
            <span style={{ fontSize: "24px" }}>{item.icon}</span>
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "3px",
                }}
              >
                {item.name} ↗
              </h3>
              <p style={{ fontSize: "12px", color: "#bbb" }}>{item.category}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/*Posts Header Section */}
      <div
        ref={blogRef}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "70px",
          marginTop: "70px",
        }}
      >
        <h2 style={{ fontWeight: "600", fontSize: "22px" }}>
          Articles & Community Work
        </h2>
        <a
          href="/all-posts"
          style={{
            color: "#bbb",
            textDecoration: "none",
            fontSize: "14px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#fff")}
          onMouseLeave={(e) => (e.target.style.color = "#bbb")}
        >
          View all posts →
        </a>
      </div>
      {/* Posts Grid */}
      <div>
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px",
              paddingBottom: "15px",
              borderBottom: "1px solid #333",
            }}
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "160px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            {/* Post Details */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {post.title}
              </h3>
              <p
                style={{ fontSize: "14px", color: "#bbb", marginBottom: "5px" }}
              >
                {post.source}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#ddd",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                {post.description}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#bbb")}
              >
                {post.type === "article" ? "Read article →" : "View details →"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Contact Section Title */}
      <h2
        style={{
          fontWeight: "600",
          fontSize: "22px",
          marginBottom: "15px",
          marginTop: "100px",
        }}
      >
        Let's Talk
      </h2>
      <div
        ref={contactRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "start",
        }}
      >
        {/* Left Section - Contact Info */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <p style={{ fontSize: "14px", color: "#bbb", marginBottom: "10px" }}>
            <strong>Time for me:</strong>{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#bbb",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaEnvelope /> <span>mwaqaszafar76@gmail.com</span>
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#bbb",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaPhone /> <span>(+92) 370 4072105</span>
          </p>

          {/* Social Media Links */}
          <p style={{ fontSize: "14px", color: "#bbb", marginBottom: "10px" }}>
            Socials:
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bbb", transition: "0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#bbb")}
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bbb", transition: "0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#bbb")}
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bbb", transition: "0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) => (e.target.style.color = "#bbb")}
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div style={{ flex: "2", minWidth: "300px" }}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                background: "#1c1c1c",
                color: "white",
                border: "1px solid #333",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email address"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                background: "#1c1c1c",
                color: "white",
                border: "1px solid #333",
              }}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "5px",
                background: "#1c1c1c",
                color: "white",
                border: "1px solid #333",
              }}
            ></textarea>

            {/* Status Message */}
            {status && (
              <p
                style={{
                  color: status.type === "success" ? "#4caf50" : "red",
                  fontSize: "14px",
                }}
              >
                {status.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#fff",
                color: "#121212",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#ddd")}
              onMouseLeave={(e) => (e.target.style.background = "#fff")}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderTop: "1px solid #333",
          fontSize: "14px",
          color: "#bbb",
          fontFamily: "'Inter', sans-serif",
          marginTop: "50px",
        }}
      >
        {/* Left Section */}
        <p>
          Designed in <span style={{ fontWeight: "600" }}>React</span> By{" "}
          <span style={{ fontWeight: "600" }}>M Waqas Zafar</span>
        </p>

        {/* Right Section */}
        <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
      {/* CSS Animations */}
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

export default Home;
