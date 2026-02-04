import { Project, Experience, SkillCategory } from "./types";
import anonim1 from "./images/AnonimVent1.jpg";
import anonim2 from "./images/AnonimVent2.jpg";
import anonim3 from "./images/AnonimVent3.jpg";
import anonim4 from "./images/AnonimVent4.jpg";
import anonim5 from "./images/AnonimVent5.jpg";
import anonim6 from "./images/AnonimVent6.jpg";
import anonim7 from "./images/AnonimVent7.jpg";
import anonim8 from "./images/AnonimVent8.jpg";
import fitness1 from "./images/ai-chat-demo.png";
import fitness2 from "./images/ai-chat-platform.png";
import fitness3 from "./images/create-fitness-goal.png";
import fitness4 from "./images/dashboard.png";
import fitness5 from "./images/exercise-hamstring-filter.png";
import fitness6 from "./images/exercise.png";
import fitness7 from "./images/fitness-log.png";
import fitness8 from "./images/Fitnesspro-homepage.png";
import fitness9 from "./images/Login-(protected-route-display).png";
import fitness10 from "./images/meals.png";
import fitness11 from "./images/new-goal.png";
import elite1 from "./images/elitewheels-about-us.png";
import elite2 from "./images/elitewheels-checkout.png";
import elite3 from "./images/elitewheels-fleet.png";
import elite4 from "./images/elitewheels-homepage.png";
import elite5 from "./images/elitewheels-leasecar.png";
import elite6 from "./images/elitewheels-leaseitems.png";
import elite7 from "./images/elitewheels-our-team.png";
import elite8 from "./images/elitewheels-rentcar.png";
import elite9 from "./images/elitewheels-sign-up.png";
import cov1 from "./images/cov1.png";
import cov2 from "./images/cov2.png";
import cov3 from "./images/cov3.png";
import cov4 from "./images/cov4.png";
import connect1 from "./images/connect1.png";

export const PERSONAL_INFO = {
  name: "ANTHONY YUA IOR",
  title: "Full-Stack Software Engineer",
  email: import.meta.env.VITE_EMAIL || "my-email@gmail.com",
  phone: import.meta.env.VITE_PHONE || "my-phone-number",
  github: "github.com/Anthony-Pius-1729",
  location: "Istanbul, Turkey",
  bio: "Computer Engineering student at Istanbul Technical University. Currently developing a Clinical Prediction Tool at the ITU Bioinformatics Lab and building ConnectS, a specialized team-building platform for the ITU community. Former Full-Stack Intern at NewMind AI with expertise in NestJS, GraphQL, and modern React ecosystems.",
};

export const PROJECTS: Project[] = [
  {
    id: "connect-s",
    title: "ConnectS - ITU Student Platform",
    subtitle: "React • Node.js • PostgreSQL • Tailwind",
    description:
      "An exclusive platform for ITU students to share project ideas, find team members, and build collaborative teams. Solves the fragmentation in student innovation by providing a centralized, authenticated hub for university-wide collaboration.",
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "ITU Auth Integration",
    ],
    features: [
      "Exclusive ITU Student Authentication",
      "Project Feed with skill-based filtering",
      "Real-time Team Matching & Requests",
      "Individual Student Profiles & Portfolios",
    ],
    githubUrl: "",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    gallery: [connect1],
    color: "indigo",
  },
  {
    id: "clinical-prediction",
    title: "Clinical Prediction Tool",
    subtitle: "Python • Deep Learning • React • Django",
    description:
      "Advanced bioinformatics tool developed at ITU Lab for predicting clinical outcomes based on genomic and phenotypic data. Features complex data visualizations and high-accuracy predictive modeling.",
    techStack: ["Python", "PyTorch", "React", "D3.js", "Django REST Framework"],
    features: [
      "Genomic Data Integration Pipeline",
      "Predictive Analytics with 85%+ Accuracy",
      "Interactive D3.js Clinical Dashboards",
      "Secure Medical Data Handling",
    ],
    githubUrl: "",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1532187875605-2fe358a77e95?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    ],
    color: "emerald",
  },
  {
    id: "anonimvent",
    title: "AnonimVent - Peer Support",
    subtitle: "React Native • Expo • Socket.io",
    description:
      "Cross-platform mobile application providing anonymous peer support through real-time messaging. Connects 'venters' with trained listeners through an intelligent matching algorithm.",
    techStack: [
      "React Native (Expo)",
      "Node.js",
      "Socket.io",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Real-Time Messaging with Socket.io",
      "Intelligent Matching Algorithm",
      "Queue Management System",
      "Offline Persistence with AsyncStorage",
    ],
    githubUrl: "",
    image: anonim1,
    gallery: [
      anonim1,
      anonim2,
      anonim3,
      anonim4,
      anonim5,
      anonim6,
      anonim7,
      anonim8,
    ],
    color: "amber",
  },
  {
    id: "elite-wheels",
    title: "EliteWheels - Car Rental",
    subtitle: "React.js • Vite • TailwindCSS",
    description:
      "A luxury car rental platform with high-end UI/UX, dynamic fleet management, and responsive booking workflows.",
    techStack: ["React.js", "Vite", "TailwindCSS"],
    features: [
      "Dynamic Fleet Filtering",
      "Luxury UI Design Language",
      "Optimized Booking Flow",
    ],
    githubUrl: "https://github.com/Anthony-Pius-1729/rental-app",
    liveUrl: "https://car-rental-proj.netlify.app",
    image: elite4,
    gallery: [
      elite1,
      elite2,
      elite3,
      elite4,
      elite5,
      elite6,
      elite7,
      elite8,
      elite9,
    ],
    color: "blue",
  },
  {
    id: "fitnesspro",
    title: "FitnessPro - AI Platform",
    subtitle: "MERN Stack • Google Gemini AI",
    description:
      "Comprehensive fitness platform integrating Google Gemini AI to provide personalized workout recommendations and meal planning.",
    techStack: ["MERN Stack", "Gemini AI", "Recharts"],
    features: [
      "AI-Powered Fitness Chatbot",
      "Dynamic Progress Tracking",
      "Automated Meal Planning",
    ],
    githubUrl: "https://github.com/Anthony-Pius-1729/fitnesspro",
    image: fitness4,
    gallery: [
      fitness1,
      fitness2,
      fitness3,
      fitness4,
      fitness5,
      fitness6,
      fitness7,
      fitness8,
      fitness9,
      fitness10,
      fitness11,
    ],
    color: "rose",
  },
  {
    id: "covmutex",
    title: "CovMutEx - COVID-19 Mutation Explorer",
    subtitle: "React.js • Django • Chart.js • MySQL",
    description:
      "A high-performance genomic visualization and analysis platform designed to process and analyze over 600,000 COVID-19 variants across 29,903 genomic positions. The tool integrates deep learning for mutation prediction and serves as a critical resource for bioinformatics research.",
    techStack: [
      "React.js",
      "Django",
      "MySQL",
      "Redux",
      "Chart.js",
      "Nginx",
      "Gunicorn",
    ],
    features: [
      "Genomic visualization platform processing 600,000+ variants",
      "Deep learning integration (3 models) with 85% prediction accuracy",
      "Scalable Django REST API with 15% faster query retrieval",
      "High-availability deployment on Nginx with 99.5% uptime",
    ],
    githubUrl: "https://github.com/Anthony-Pius-1729",
    image: cov3,
    gallery: [cov1, cov2, cov3, cov4],
    color: "blue",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Research Assistant - Bioinformatics",
    company: "Istanbul Technical University",
    location: "Istanbul, Turkey",
    period: "Oct 2024 – Present",
    responsibilities: [
      "Developing a Clinical Prediction Tool using Python and Deep Learning to improve patient outcome forecasts.",
      "Optimized genomic data pipelines, processing 600k+ SARS-CoV-2 variants for the CovMutEx platform.",
      "Collaborating with doctoral researchers to integrate complex predictive models into accessible web interfaces.",
      "Co-authoring research findings for peer-reviewed publication.",
    ],
  },
  {
    role: "Full-Stack Software Engineering Intern",
    company: "NewMind AI",
    location: "Istanbul, Turkey",
    period: "July 2025 – September 2025",
    responsibilities: [
      "Developed production-ready features using NestJS, GraphQL, and React for internal AI management tools.",
      "Implemented type-safe GraphQL APIs and automated CI/CD pipelines in Azure DevOps, improving deployment reliability.",
      "Collaborated with the engineering team to refactor state management using Jotai, enhancing performance and code readability.",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "TypeScript",
      "Shadcn/ui",
      "TailwindCSS",
      "Redux",
      "Jotai",
      "D3.js",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Django",
      "GraphQL",
      "Python",
      "REST APIs",
      "Socket.io",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firestore", "Superbase"],
  },
  {
    title: "Tools",
    skills: ["Docker", "Git/GitHub", "Azure DevOps", "Azure", "Nginx", "JWT"],
  },
];
