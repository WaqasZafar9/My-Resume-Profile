import unityStackImg from "../assets/unityStackImg.png";
import socialSwirlImg from "../assets/socialSwirlImg.png";
import pettifyImg from "../assets/pettify.png";
// import galaxyCricketImg from "../assets/galaxy_cricket.png";
// import beautySalonImg from "../assets/beauty_salon.png";
import licenseImg from "../assets/licence.jpg";

// Detailed Project Data (For Project Details Page)
export const projectData = {
  unitystack: {
    title: "Unity Stack (Final Year Project)",
    description: "A real-time collaboration platform for developers...",
    stack: ["React.js", "Node.js", "MongoDB"],
    images: [unityStackImg],
  },
  socialswirl: {
    title: "Social Swirl (Flutter App - Internship)",
    description: "Developed for Social Swirl Company during an internship...",
    stack: ["Flutter", "Firebase", "Dart"],
    images: [socialSwirlImg],
  },
  pettify: {
    title: "Pettify (Flutter Pet Care App)",
    description: "A pet care platform with Firebase backend...",
    stack: ["Flutter", "Firebase", "Dart", "Maps API"],
    images: [pettifyImg],
  },
  smartLicense: { 
    title: "Smart E-License System",
    description:
      "A Descktop-based system that automates digital driving license issuance, data security measures.",
    stack: ["Java", "MongoDB"],
    images: [licenseImg],
  },
  cricket: {
    title: "Galaxy Cricket Website",
    description: "A dynamic cricket website providing real-time updates...",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL Database"],
    // images: [galaxyCricketImg],
  },
  beautysalon: {
    title: "Beauty Salon Website",
    description: "A fully functional beauty salon website...",
    stack: ["HTML", "CSS", "PHP", "SQL Database"],
    // images: [beautySalonImg],
  },
  
};

// Project List Data (For Home Page & All Projects Page)
export const projects = [
  {
    id: "unitystack",
    title: "Unity Stack",
    category: "Web Based Collaboration Platform",
    media: unityStackImg,
    type: "image",
  },
  {
    id: "socialswirl",
    title: "Social Swirl App",
    category: "Mobile App",
    media: socialSwirlImg,
    type: "image",
  },
  {
    id: "smartLicense",
    title: "Smart-E-License-System",
    category: "Desktop Application",
    media: licenseImg,
    type: "image",
  },
  {
    id: "pettify",
    title: "Pettify Pet Care App",
    category: "Mobile App",
    media: pettifyImg,
    type: "image",
  },
  {
    id: "cricket",
    title: "Galaxy Cricket Website",
    category: "Web Development",
    // media: galaxyCricketImg,
    type: "image",
  },
  {
    id: "beautysalon",
    title: "Beauty Salon Website",
    category: "Web Development",
    // media: beautySalonImg,
    type: "image",
  },
];
