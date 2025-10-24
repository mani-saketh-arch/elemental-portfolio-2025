// src/lib/constants.js

export const PERSONAL_INFO = {
  name: "GANDHAM MANI SAKETH",
  email: "gandhammani2421@gmail.com",
  phone: "9381305134",
  location: "Vijayawada, Andhra Pradesh",
  github: "https://github.com/GANDHAMMANI",
  linkedin: "https://www.linkedin.com/in/gandhammanisaketh2421/",
  tagline: "AI/ML Engineer • Full-Stack Developer • Researcher",
  bio: "Passionate AI/ML Engineer and Full-Stack Developer currently pursuing M.Sc in Data Science. Co-founder of InnodayVoyagers-AI Hub, building intelligent systems that make real-world impact.",
};

export const EXPERIENCE = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Co-founder & Lead",
    company: "InnodayVoyagers-AI Hub",
    location: "P.B. Siddhartha College",
    description: "Leading an innovative AI community focused on peer-to-peer learning and collaboration, establishing structured frameworks for student-led project management and AI/ML initiative execution.",
    icon: "🚀",
    color: "#7209b7",
  },
  {
    id: 2,
    year: "Dec 2024 - Feb 2025",
    title: "AI Intern",
    company: "Infosys Springboard",
    location: "Remote",
    description: "Developed MediScan, an AI-driven Healthcare Assistance System leveraging Gemini 1.5 Flash LLM that combines symptom assessment, appointment scheduling, and Emergency Injury Analyzer.",
    icon: "💼",
    color: "#00fff5",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "PBSC Campus Bridge",
    subtitle: "Admissions Portal & LEO AI Copilot",
    description: "Engineered a complete digital transformation solution for PBSC admissions, replacing time-intensive manual processes with an integrated portal and AI copilot that enables natural language data queries and instant analytics.",
    tech: ["Python", "Flask", "MySQL", "LLM", "NLP"],
    status: "LIVE",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/projects/campus-bridge.png",
  },
  {
    id: 2,
    title: "PBSC Venue Management System",
    subtitle: "V1.0 with LEO AI Chatbot",
    description: "Comprehensive venue booking system with role-based access, real-time conflict detection, calendar UI, automated email alerts, and Gemini-powered AI chatbot for natural language queries. Currently operational across the college.",
    tech: ["Flask", "MySQL", "Gemini 1.5", "LangChain"],
    status: "LIVE",
    featured: true,
    award: "Letter of Appreciation",
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/projects/venue-management.png",
  },
  {
    id: 3,
    title: "MediScan",
    subtitle: "AI Healthcare Assistance System",
    description: "AI-driven healthcare system with symptom assessment, appointment scheduling, and emergency injury analyzer providing instant first-aid guidance and medical decision-making support.",
    tech: ["Gemini 1.5 Flash", "Streamlit", "Python", "LangChain"],
    status: "Completed",
    featured: true,
    githubUrl: "#",
    image: "/images/projects/mediscan.png",
  },
  {
    id: 4,
    title: "Sleep Disorder Prediction",
    subtitle: "ML-Based Healthcare Application",
    description: "Research application for predicting sleep disorders using machine learning algorithms. Published in Springer Scopus-indexed LNNS series at ICICC 2024 conference.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
    status: "Completed",
    featured: false,
    githubUrl: "#",
    image: "/images/projects/sleep-disorder.png",
  },
];

export const RESEARCH = [
  {
    id: 1,
    type: "Conference",
    title: "Predicting Sleep Disorders for Improved Healthcare – A Comprehensive Study",
    venue: "ICICC 2024 - 7th International Conference on Innovative Computing and Communication",
    publisher: "Springer Scopus-indexed LNNS series",
    authors: "Gandham Mani Saketh, Abdul Faheem",
    mentor: "Dr. Udaya Sri Kompalli",
    year: "2024",
    link: "https://link.springer.com/",
    icon: "📄",
  },
  {
    id: 2,
    type: "Journal",
    title: "A Study on Supervised Learning Model – K-NN Classification",
    venue: "IJFANS - International Journal of Food and Nutritional Sciences",
    volume: "Vol. 11, Issue 12",
    year: "2022",
    icon: "📖",
  },
];

export const AWARDS = [
  {
    id: 1,
    title: "AI Innovation Award",
    subtitle: "Sri Kompalli Kotilingeswara Veerabhadra Rao Memorial Award",
    description: "Received during college's Golden Jubilee (April 2025) for developing the PBSC Venue Management System",
    mentor: "Dr. Udaya Sri Kompalli",
    icon: "🏆",
    year: "2025",
  },
  {
    id: 2,
    title: "4th Place Nationwide",
    subtitle: "Alteryx Sparked Datathon",
    description: "Secured 4th place in nationwide Datathon organized by Alteryx Sparked in association with Eduskills Foundation",
    icon: "🥉",
    year: "2024",
  },
  {
    id: 3,
    title: "Hackathon Participant",
    subtitle: "Dark Patterns Buster Hackathon 2023",
    description: "Participated as team member of InnoUdayVoyagers, organized by Department of Consumer Affairs (DoCA) with IIT (BHU)",
    icon: "💡",
    year: "2023",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "M.Sc Data Science",
    institution: "P.B. Siddhartha College of Arts & Science",
    location: "Vijayawada",
    period: "2024 - Present",
    status: "Currently Pursuing",
  },
  {
    id: 2,
    degree: "B.Sc Artificial Intelligence & Machine Learning",
    institution: "P.B. Siddhartha College of Arts & Science",
    location: "Vijayawada",
    period: "2021 - 2024",
    status: "Completed",
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: "2021",
    title: "Started B.Sc AI/ML",
    description: "Began journey in AI and Machine Learning",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "First Publication",
    description: "Published K-NN Classification paper in IJFANS",
    icon: "📝",
  },
  {
    year: "2023",
    title: "Hackathon Journey",
    description: "Participated in Dark Patterns Buster Hackathon",
    icon: "💻",
  },
  {
    year: "2024",
    title: "Founded AI Hub",
    description: "Co-founded InnodayVoyagers-AI Hub",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "Built PBSC Systems",
    description: "Deployed Campus Bridge & Venue Management (LIVE)",
    icon: "🏗️",
  },
  {
    year: "2024",
    title: "Infosys Intern",
    description: "AI Internship - Built MediScan",
    icon: "💼",
  },
  {
    year: "2024",
    title: "Research Published",
    description: "Springer Conference Paper (ICICC 2024)",
    icon: "📄",
  },
  {
    year: "2024",
    title: "Datathon Success",
    description: "4th Place in Alteryx Sparked Datathon",
    icon: "🥉",
  },
  {
    year: "2025",
    title: "AI Innovation Award",
    description: "Received Memorial Award at Golden Jubilee",
    icon: "🏆",
  },
  {
    year: "2025",
    title: "M.Sc Journey",
    description: "Pursuing Data Science Masters",
    icon: "📚",
  },
];