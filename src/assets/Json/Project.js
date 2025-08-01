import imgProject from "./img_project.js";

const project = [
  {
    id: "android-1",
    title: "Bus Finder App (Android)",
    description:
      "AI-powered bus timing app for Tamil Nadu with offline support and ARIMA-based arrival prediction.",
    image: imgProject.bus,
    tags: ["Java", "Android", "Firebase", "Room DB", "AI", "ARIMA"],
    badge: "Mobile App",
    backTitle: "Revolutionizing Tamil Nadu's Public Transport",
    backContent: [
      "Bus Finder is an intelligent Android app that predicts government bus arrival times across Tamil Nadu using the ARIMA model — no GPS required.",
      "Features offline access, Firebase authentication, district-wise filtering, and a user feedback system to improve accuracy over time.",
      "Designed to work in both online and low-network environments, it enables commuters to plan journeys with confidence.",
    ],
    git: "https://github.com/Gopal-6382/Bus-Apk/tree/Bus_Codes",
    link: "https://github.com/Gopal-6382/Bus-Apk",
  },
  {
    id: "react-1",
    title: "React Component Showcase",
    description:
      "A collection of reusable React components and mini-projects demonstrating core React concepts, hooks, and API integration.",
    image: imgProject.React1,
    tags: ["React", "Axios", "Hooks", "MongoDB", "Bootstrap", "Context API"],
    badge: "Frontend/Fullstack",
    backTitle: "Components & Features Included",
    backContent: [
      "🧠 useMemo, useReducer, useContext, and other React hooks in action.",
      "🛍️ Two full cart systems with Context API and dynamic product management.",
      "🔒 Password generator, 📅 Calendar, ⏰ Live digital clock, and 🧾 Axios demo with MongoDB API.",
      "Includes Bootstrap-based layout and reusable components — perfect for UI practice and testing fullstack connectivity.",
    ],
    git: "https://github.com/Gopal-6382/React_Components",
    link: "https://react-components-ayicj5gdi-gopal-krishnan.vercel.app",
  },

  {
    id: "react-2",
    title: "React API Integration Components",
    description:
      "Interactive tools built with React, including weather forecast, currency conversion, QR code generators, and more — all powered by real-world APIs.",
    image: imgProject.React2,
    tags: ["React", "REST API", "Hooks", "Tailwind", "Bootstrap"],
    badge: "Live Demo",
    backTitle: "Features & Components",
    backContent: [
      "🌤️ Weather App: Uses OpenWeatherMap API for real-time temperature and weather status.",
      "💱 Currency Converter: Real-time conversion using ExchangeRate API with dynamic input and dark/light theme toggle.",
      "🎫 QR Code Generators: Two versions — one with external lib, one manual tutorial-based implementation.",
      "🧠 React Hooks: Components using useState, useEffect, and props-driven patterns for practice.",
      "🧪 Bootstrap & Tailwind used for responsive styling across all components.",
      "🧩 Additional small features: Form handling, student info via props, list rendering, card components.",
    ],
    git: "https://github.com/Gopal-6382/React_Components-2",
    link: "https://react-components-2-cvd7-f5oghtkx6-gopal-krishnan.vercel.app/",
  },

  {
    id: "multi-lang-1",
    title: "CLI Learning Archive (Java, C, C++, JS)",
    description:
      "A personal collection of CLI-based programs written during my learning phase across multiple languages.",
    image: imgProject.Programming, // Keep or update if you have a multi-language image
    tags: ["Java", "C", "C++", "JavaScript", "Algorithms", "CLI"],
    badge: "Learning Journey",
    backTitle: "Included Programs & Concepts",
    backContent: [
      "💻 Java: Programs like Armstrong, Fibonacci, Prime checks, ToggleCase, OOP basics.",
      "🧮 C & C++: Sorting, searching, pattern printing, pointer exercises, and loops.",
      "📜 JavaScript: CLI utilities using Node.js, basic input/output, array manipulation, etc.",
      "🎯 Designed for algorithm practice and fundamentals across different languages.",
      "🧠 Emphasizes hands-on learning of logic building, syntax structures, and CLI interaction.",
    ],
    git: "https://github.com/Gopal-6382/Programming-Languages",
  },

 {
  id: "web-frontend-lab",
  title: "Frontend UI Component Lab",
  description:
    "A growing collection of frontend UI experiments with Bootstrap, Tailwind, Sass, CSS, and more.",
  image: imgProject.Frontend, // Consider replacing with a more generic UI/HTML preview if available
  tags: ["HTML", "CSS", "Bootstrap", "Tailwind", "Sass", "Three.js"],
  badge: "Frontend",
  backTitle: "Overview",
  backContent: [
    "Includes 30+ UI experiments with Bootstrap: buttons, modals, grids, cards, navbars, and more.",
    "Future-ready with Tailwind CSS, Three.js, Sass, and custom vanilla CSS designs.",
    "Ideal for layout prototyping, design system practice, and frontend architecture exploration.",
    "Organized directory-wise for each library, with hands-on examples and comments.",
    "Continually updated as a personal UI/UX learning sandbox.",
  ],
  git: "https://github.com/Gopal-6382/Web-Learnings",
}

];
export default project;
