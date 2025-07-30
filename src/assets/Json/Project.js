import imgProject from "../Json/img_project.js";

const project = [
  {
    id: "android-1",
    title: "Bus Finder App (Android)",
    description:
      "Java-based Android app with live bus tracking and GPS support.",
    image: imgProject.bus,
    tags: ["Java", "Android", "Firebase"],
    badge: "Mobile App",
    backTitle: "Detailed Overview",
    backContent: [
      "The Bus Finder Android app helps users track buses in real-time with GPS.",
      "Built using Java, Google Maps API, and Firebase for authentication and database.",
      "Handled challenges like optimizing GPS polling and API performance.",
    ],
    git: "https://github.com/Gopal-6382/Gopal-6382/tree/TamilNadu_Bus",
    link: "https://github.com/Gopal-6382/Bus-Apk",
  },
  {
    id: "react-1",
    title: "React Small Components  ",
    description:
      "Basic CRUD operations  With AXIOS & Small projects",
      image: imgProject.React1,
    tags: ["React", "CRUD", "MongoDB"],
    badge: "Fullstack",
    backTitle: "Components Included",
    backContent: [
      "UserList.jsx, axios.jsx used to fetch and display user data from MongoDB.",
      "CRUD operations are handled in components like Cart.jsx, CardComponent.jsx, etc.",
      "MongoDB backend integrated with Express API for testing.",
    ],
    git: "https://github.com/Gopal-6382/React_Components",
    link: "https://react-components-ayicj5gdi-gopal-krishnan.vercel.app",
  },
  {
    id: "react-2",
    title: "React Components ",
    description: "Weather & Advice & Currency & API integration.",
      image: imgProject.React2,
    tags: ["React", "API", "Hooks"],
    badge: "LIVE DEMO",
    backTitle: "Details",

    backContent: [
      "Weather app uses OpenWeather API; currency converter uses real-time exchange API.",
      "Features dynamic input, conversion, dark/light theme switch, and error handling.",
      "Designed using Tailwind CSS and functional components with useState and useEffect.",
    ],
    git: "https://github.com/Gopal-6382/React_Components-2",
    link: "https://react-components-2-cvd7-f5oghtkx6-gopal-krishnan.vercel.app/",
  },

  {
    id: "java-1",
    title: "Java CLI  Collection",
    description:
      "A set of Java console apps including number systems and string operations.",
    image: imgProject.java,
    tags: ["Java", "CLI", "Practice"],
    badge: "Java Utilities",
    backTitle: "Included Programs",
    backContent: [
      "A collection of Java programs like Armstrong check, Prime range, ToggleCase, Fibonacci, and more.",
      "Useful for quick demonstrations and algorithm practice.",
      "Shows OOP principles, loops, conditionals, and string operations.",
    ],
    git: "https://github.com/Gopal-6382/Gopal-6382/tree/oreters",
  },

  {
    id: "web-bootstrap",
    title: "Bootstrap UI Projects",
    description:
      "Static frontend pages with all core Bootstrap components demonstrated.",
    image: imgProject.Bootstrap,
    tags: ["HTML", "CSS", "Bootstrap"],
    badge: "Frontend",
    backTitle: "Overview",
    backContent: [
      "Over 30+ Bootstrap examples: buttons, modals, cards, grids, navbar, tables, and more.",
      "Useful for fast prototyping and practicing layout designs.",
      "Hosted in a dedicated Bootstrap directory for easy navigation.",
    ],
    git: "https://github.com/Gopal-6382/Gopal-6382/tree/bootstrap",
  },
];
export default project;
