import imgProject from "./img_project.js";

const project = [
  {
    id: "E-commerce-1",
    title: "Full-Stack E-commerce Website",
    description:
      "A modern MERN stack e-commerce platform with Tailwind CSS, featuring admin and user dashboards, product management, and responsive design.",
    image: imgProject.Ecommerce,
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Admin Dashboard",
      "User Visit Product",
    ],
    badge: "Web App",
    backTitle: "Complete Online Shopping Experience",
    backContent: [
      "Developed a full-stack e-commerce website using MERN (MongoDB, Express, React, Node.js) with Tailwind CSS for responsive UI.",
      "Implemented separate admin and user dashboards: admin can manage products, categories, orders, and users; users can browse, filter, and purchase products.",
      "Features include secure authentication with JWT, dynamic product listings, cart management, and order tracking.",
      "Designed with a mobile-first approach and optimized for performance and usability across devices.",
    ],
    git: "https://github.com/yourusername/ecommerce-mern",
    link: "https://ecommerce-websiste.vercel.app/",
  },
  {
    id: "LearningHub-1",
    title: "LearningHub",
    description:
      "An interactive educational platform offering simulations, quizzes, and visual explorations on atomic structure, periodic table, and related chemistry concepts for Class 10 students.",
    image: imgProject.Atom,
    tags: [
      "React",
      "Tailwind CSS",
      "Interactive Learning",
      "Quizzes",
      "Simulations",
      "Educational Platform",
    ],
    badge: "EdTech",
    backTitle: "Comprehensive Chemistry Learning Tool",
    backContent: [
      "Designed an immersive educational module for Class 10 students to explore atomic structure, the periodic table, ions, isotopes, and electron configuration.",
      "Implemented a Learning Path feature with locked/unlocked topics, progress tracking, and a sidebar listing core modules.",
      "Built an Interactive Atom Builder enabling students to construct neutral atoms, ions, and isotopes with real-time visualization of atomic number, mass, and charge.",
      "Created an Element Explorer offering detailed element data: symbol, atomic number, mass, electron configuration, electronegativity, and interesting trivia.",
      "Designed an interactive, color-coded Periodic Table with sorting and toggle views (table vs list).",
      "Developed adaptive quizzes and assessments per topic, featuring immediate feedback, score tracking, and dynamic progression.",
      "Included advanced interactive tools like a random atom generator and sliders for protons, neutrons, and electrons.",
      "Built using modern front-end tech (React, Tailwind CSS) with custom hooks for managing simulation and quiz states; fully responsive across devices.",
    ],
    git: "https://github.com/Gopal-6382/LearningHub",
    link: "https://learning-hub-rouge.vercel.app/",
  },
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
    id: "MiniLinkedIn-1",
    title: "MiniLinkedIn – Social Networking Website",
    description:
      "A React.js-based social networking platform with JWT authentication, user profiles, and post management.",
    image: imgProject.Linkden,
    tags: [
      "React.js",
      "React Router",
      "Axios",
      "Bootstrap",
      "JWT Auth",
      "LocalStorage",
      "Community Platform",
    ],
    badge: "Web App",
    backTitle: "Simplified LinkedIn Clone",
    backContent: [
      "Developed a community-based social app frontend using React.js with routing, state management, and API integration.",
      "Implemented JWT-based authentication with login, registration, and token-based protected routes.",
      "Users can create posts, edit their bio, and view other users’ profiles and activity.",
      "Designed responsive UI with Bootstrap and managed API requests via Axios.",
      "Ensured persistent login state using localStorage for token storage.",
    ],
    git: "https://github.com/Gopal-6382/linkden",
    link: "https://linkden.vercel.app/",
  },

  {
    id: "StoryBook",
    title: "React Storybook",
    description:
      "A project showcasing reusable React components (InputField and DataTable) built with TypeScript, Tailwind CSS, and documented with Storybook.",
    image: imgProject.StoryBook,
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Storybook",
      "Vitest",
      "Reusable Components",
    ],
    badge: "Frontend",
    backTitle: "Reusable UI Component Library",
    backContent: [
      "Developed two core reusable React components: InputField and DataTable with TypeScript for type safety.",
      "InputField supports validation states, sizes, variants, helper text, error messages, and password toggle functionality.",
      "DataTable provides tabular data display with column sorting, single/multiple row selection, loading, and empty states.",
      "Fully integrated Storybook for component documentation, showcasing props, states, and variants in isolation.",
      "Built using modern tooling: React, Vite, Tailwind CSS, and tested with Vitest for reliability.",
    ],
    git: "https://github.com/Gopal-6382/Story_Book",
    link: "https://storybook-static-i40duokyx-gopal-krishnan.vercel.app/?path=/story/components-datatable--default",
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
  },
];
export default project;
