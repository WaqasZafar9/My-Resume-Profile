import React, { useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFigma,
  FaSlack,
  FaStripe,
  FaTrello,
  FaVideo,
  FaTwitter,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const projects = [
  {
    id: 1,
    title: "Pettify App",
    category: "Mobile App",
    media: "https://via.placeholder.com/400x250", // Replace with actual image/video URL
    type: "image", // Can be "image" or "video"
    link: "/projects/pettify",
  },
  {
    id: 2,
    title: "Smart E-License System",
    category: "Web Application",
    media: "https://via.placeholder.com/400x250",
    type: "image",
    link: "/projects/license",
  },
  {
    id: 3,
    title: "Galaxy Cricket Website",
    category: "Website",
    media: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with actual video URL
    type: "video",
    link: "/projects/cricket",
  },
];

const experiences = [
  {
    company: "Digital Innovations Agency",
    role: "Senior Web Designer",
    location: "San Francisco, CA",
    duration: "Jan 2019 – Present",
    responsibilities: [
      "Led the redesign of high-traffic websites, resulting in a 30% increase in user engagement.",
      "Managed a team of junior designers, providing mentorship and overseeing project timelines.",
      "Collaborated with cross-functional teams to develop innovative design solutions for diverse clients.",
      "Implemented responsive design principles to ensure optimal performance across all devices.",
    ],
  },
  {
    company: "Creative Solutions Studio",
    role: "Web Designer",
    location: "Los Angeles, CA",
    duration: "Jun 2013 – Dec 2018",
    responsibilities: [
      "Designed and developed over 50 custom websites for small to medium-sized businesses.",
      "Optimized website performance, achieving a 25% improvement in loading times.",
      "Worked closely with clients to understand their branding and design requirements.",
      "Enhanced UX/UI for various digital products, improving user retention rates.",
    ],
  },
];

const educationData = [
  {
    degree: "Master of Science in Web Design and Development",
    university: "University of California",
    location: "Berkeley, CA",
    duration: "2010 – 2012",
    description:
      "Focused on advanced web technologies, user experience design, and front-end development.",
  },
  {
    degree: "Bachelor of Fine Arts in Graphic Design",
    university: "University of Washington",
    location: "Seattle, WA",
    duration: "2002 – 2006",
    description:
      "Emphasized visual communication, design principles, and digital media.",
  },
];

const certifications = [
  {
    title: "Certified Web Developer (CWD)",
    organization: "International Web Association",
    year: "2021",
    link: "https://example.com/cwd",
  },
  {
    title: "User Experience (UX) Design Certification",
    organization: "Nielsen Norman Group",
    year: "2018",
    link: "https://example.com/ux-cert",
  },
  {
    title: "Advanced HTML5 and CSS3 Specialist",
    organization: "W3Schools",
    year: "2016",
    link: "https://example.com/html5-css3",
  },
  {
    title: "Google Analytics Individual Qualification (GAIQ)",
    organization: "Google",
    year: "2015",
    link: "https://example.com/ga-iq",
  },
];

const stackItems = [
  {
    name: "Design",
    category: "General Design Tool",
    icon: <FaFigma />,
    link: "https://figma.com",
  },
  {
    name: "Management",
    category: "Project Management",
    icon: <FaTrello />,
    link: "https://trello.com",
  },
  {
    name: "Payments",
    category: "Payment Platform",
    icon: <FaStripe />,
    link: "https://stripe.com",
  },
  {
    name: "Meetings",
    category: "Collaboration",
    icon: <FaVideo />,
    link: "https://zoom.us",
  },
  {
    name: "Calls",
    category: "Communication",
    icon: <FaSlack />,
    link: "https://slack.com",
  },
];

const awards = [
  {
    title: "Site of the day",
    organization: "Awwwards",
    year: "2023",
    link: "https://www.awwwards.com/",
  },
  {
    title: "Site of the month",
    organization: "Awwwards",
    year: "2020",
    link: "https://www.awwwards.com/",
  },
  {
    title: "Website of the day",
    organization: "CSS Design Awards",
    year: "2018",
    link: "https://www.cssdesignawards.com/",
  },
];

const posts = [
  {
    title: "The Future of Web Design: Trends to Watch in 2024",
    source: "Web Design Journal, May 15, 2024",
    description:
      "An in-depth analysis of upcoming trends in web design, focusing on emerging technologies and design philosophies that are set to shape the future of the industry.",
    image: "https://via.placeholder.com/600x350", // Replace with actual image
    link: "https://example.com/web-design-trends",
    type: "article",
  },
  {
    title: "Responsive Design Best Practices",
    source: "Modern Web Magazine, May 11, 2024",
    description:
      "An article outlining the best practices for creating responsive websites that perform well on all devices, ensuring a seamless user experience.",
    image: "https://via.placeholder.com/600x350",
    link: "https://example.com/responsive-design",
    type: "article",
  },
  {
    title: "Volunteering at Open Source Foundation",
    source: "Community Work, April 20, 2024",
    description:
      "Contributed to open-source projects, helping maintain and develop key features for accessibility and better user experience.",
    image: "https://via.placeholder.com/600x350",
    link: "https://example.com/open-source",
    type: "community",
  },
  {
    title: "Organizing Web Development Bootcamp",
    source: "Tech Community, March 18, 2024",
    description:
      "Led a bootcamp for beginner web developers, introducing them to HTML, CSS, and JavaScript with hands-on projects.",
    image: "https://via.placeholder.com/600x350",
    link: "https://example.com/bootcamp",
    type: "community",
  },
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
        "your_service_id", // Replace with EmailJS Service ID
        "your_template_id", // Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_public_key" // Replace with EmailJS Public Key
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
      <div
        ref={introRef}
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
          <img
            src="/assets/profile.png"
            alt="Profile"
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
          <a
            href="https://bit.ly/waqaszafar-linkedin"
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              marginBottom: "8px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#4caf50")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            🔗 Get Template
          </a>

          <a
            href="/assets/M-Waqas-Resume.pdf"
            download
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#4caf50")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            📄 Download CV
          </a>
        </div>
      </div>

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
          href="https://twitter.com"
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
      </div>
      {/* About Me Section */}
      <div
        ref={aboutRef}
        style={{
          marginTop: "100px",
          paddingTop: "20px",
          marginBottom:"50px",
        }}
      >
        <h2
          style={{ fontWeight: "600", fontSize: "22px", marginBottom: "15px" }}
        >
          About me
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#ddd",
            lineHeight: "1.6",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Hello, I'm <strong>M Waqas Zafar</strong>, a passionate Web & App
          Developer with expertise in crafting seamless, user-friendly digital
          experiences.
        </p>
        <p style={{ fontSize: "16px", color: "#ddd", lineHeight: "1.6" }}>
          My journey in development started with a deep curiosity about how
          applications work and a strong desire to build something meaningful on
          the digital canvas. Over the years, I’ve honed my skills in **UI/UX
          design, front-end development, and user experience optimization.**
        </p>
      </div>

      {/* Skills Section */}
      <div
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #333",
        }}
      >
        <h2
          style={{ fontWeight: "600", fontSize: "22px", marginBottom: "15px" }}
        >
          Skills
        </h2>

        {/* Skill Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "15px",
          }}
        >
          {[
            "Flutter (Dart)",
            "Python (AI/ML)",
            "Java",
            "C++",
            "SQL",
            "HTML & CSS",
            "JavaScript",
            "React.js",
            "Database Management",
            "UI/UX Design",
          ].map((skill, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div
        ref={workRef}
        style={{
          marginTop: "100px",
          paddingTop: "20px",
          borderTop: "1px solid #333",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h2 style={{ fontWeight: "600", fontSize: "22px" }}>My Projects</h2>
          <button
            onClick={() => navigate("/projects")}
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
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#bbb")}
          >
            View all →
          </button>
        </div>

        {/* Project Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
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
              onClick={() => navigate(project.link)}
              onMouseEnter={(e) => (e.target.style.background = "#333")}
              onMouseLeave={(e) => (e.target.style.background = "#1c1c1c")}
            >
              {/* Media (Image/Video) */}
              {project.type === "image" ? (
                <img
                  src={project.media}
                  alt={project.title}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
              ) : (
                <video
                  src={project.media}
                  autoPlay
                  muted
                  loop
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
            </div>
          ))}
        </div>
      </div>

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
      <h2 style={{ fontWeight: "600", fontSize: "22px", marginBottom: "30px", marginTop:"70px", }}>
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

      {/* Awards Section Title */}
      <h2
        style={{
          fontWeight: "600",
          fontSize: "22px",
          marginBottom: "15px",
          marginTop: "70px",
        }}
      >
        Awards
      </h2>

      {/* Awards List */}
      {awards.map((award, index) => (
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
              index !== awards.length - 1 ? "1px solid #333" : "none",
          }}
        >
          {/* Award Details */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              {award.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#bbb" }}>
              {award.organization}, {award.year}
            </p>
          </div>

          {/* Visit Link */}
          <a
            href={award.link}
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
            Visit →
          </a>
        </motion.div>
      ))}

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
      <h2 style={{ fontWeight: "600", fontSize: "22px", marginBottom: "15px" , marginTop:"100px",}}>
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
            PM
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
            <FaEnvelope /> <span>johnsmith@gmail.com</span>
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
            <FaPhone /> <span>(123) 456 7890</span>
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
