import netflix1 from "../assets/projects-details-image/netflix1.webp";
import netflix2 from "../assets/projects-details-image/netflix2.webp";
import petsmart from "../assets/projects-details-image/petsmart.webp";
import picasso1 from "../assets/projects-details-image/picasso1.webp";
import picasso2 from "../assets/projects-details-image/picasso2.webp";
import picasso3 from "../assets/projects-details-image/picasso3.webp";
import res1 from "../assets/projects-details-image/res1.webp";
import res2 from "../assets/projects-details-image/res2.webp";
import res3 from "../assets/projects-details-image/res3.webp";
import res4 from "../assets/projects-details-image/res4.webp";

export const projectDetails = [
  // NETFLIX
  {
    id: "netflix",
    title: "Netflix clone landing page",
    type: "Personal project",
    description:
      "As part of my introduction to React, I built a clone Netflix landing page to practice foundational concepts in component-based design and state management.",
    features: [
      "Reusable components",
      "UI design with CSS",
      "Dynamic content sections",
    ],
    technologies: ["React", "CSS"],
    image: [netflix1, netflix2],
    github: "https://github.com/qtrngn/netflix-landingpage",
    liveDemo: "https://netflix-landingpage-azure.vercel.app/",
    tags: ["React", "Web Development"],
    featured: false,
  },
  // RESTAURANT
  {
    id: "restaurant",
    type: "School project",
    title: "Restaurant website",
    description:
      "This responsive restaurant website was built with HTML, CSS, and JavaScript plugins and optimized for different screen sizes. This project helped me understand responsive design principles and improve my understanding of layout structuring, visual design and basic interactivity without using any frameworks",
    features: [
      "Responsive layout for mobile, tablet and desktop",
      "Animated sections and scrolling",
      "Integration of plugins for basic interactivity",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: [res1, res2, res3, res4],
    github: "https://github.com/qtrngn/restaurant-website",
    liveDemo:
      "https://restaurant-website-pbx9tj8q7-qtrngns-projects.vercel.app/",
    tags: ["HTML", "CSS", "Responsive", "Plugins", "Web Development"],
  },
  // PETSMART
  {
    id: "petsmart",
    type: "School project",
    title: "Petsmart application redesign",
    description:
      "The project was part of a UI/UX design course where I analyzed and redesigned the PetSmart mobile application using Figma. The goal was to enhance the user experience for pet owners managing appointments, browsing products, and viewing pet information.",
    features: [
      "Interactive Figma prototype ",
      "Modern, clean design with improved accessibility",
    ],
    technologies: ["Figma"],
    image: [petsmart],
    liveDemo: null,
    tags: ["Figma", "UI/UX"],
  },
  // ART PORTFOLIO
  {
    id: "portfolio",
    type: "School project",
    title: "Picasso portfolio website",
    description:
      "My introduction to web development began with this project—a basic website created using only HTML and CSS. This school project introduced me to the foundation of web development and marked the beginning of my journey as a developer",
    features: [
      "Simple website",
      "Simple navigation",
      "First project to apply development skills",
    ],
    technologies: ["HTML", "CSS"],
    image: [picasso1, picasso2, picasso3],
    github: "https://github.com/qtrngn/restaurant-website",
    liveDemo:
      "https://restaurant-website-pbx9tj8q7-qtrngns-projects.vercel.app/",
    tags: ["HTML", "CSS", "Responsive", "Plugins", "Web Development"],
    featured: false,
  },
  // WEATHER APPLICATION
  {
    id: "weather-application",
    type: "School project",
    title: "Weather Application",
    description:
      "The weather application using React Native and API integration. The app fetches current weather data using Weather API and display it with clean UI. I used Axios to handle network requests efficiently and integrated Lottie animations to visually represent weather conditions in a fun, interactive way.",
    features: [
      "Real time weather data",
      "Lottie animations for dynamic weather visuals",
      "Axios integration for API request",
    ],
    technologies: ["React Native", "Weather API", "Lottie", "Axios"],
    image: [],
    github: "https://github.com/qtrngn/weather-application",
    liveDemo: null,
    tags: ["React Native", "WeatherAPI", "Lottie", "Axios", "App Development"],
  },
  // BOOK EXPLORERS
  {
    id: "book-explorers",
    type: "School project",
    title: "Book explorers application",
    description:
      "Book Explorers is a mobile app built with React Native that allows users to search for books using the Google Books API and securely log in using Firebase Authentication. The idea behind the app was to create a functional tool for book discovery while building my skills with API integration, authentication flows, and mobile UI design.",
    features: [
      "Search and browse books via the Google Books API",
      "User authentication with Firebase (sign up, login)",
      "Axios integration for API request",
    ],
    technologies: ["React Native", "Google Books API", "Firebase", "Axios"],
    image: [],
    github: "https://github.com/qtrngn/bookExplorer-app",
    liveDemo: null,
    tags: ["React Native", "Firebase", "Axios", "App Development"],
  },
  
  // BOOK EXPLORERS WEBSITE
  {
    id: "book-explorers-website",
    type: "School project",
    title: "Book explorers application",
    description:
      "This project is the web-based version of my Book Explorer app, but instead of using a third-party API, I built and managed my own backend using MySQL on MAMP. It features a searchable book database, responsive layout, and dynamic content rendering.",
    features: [
      "Custom book database using MySQL",
      "Responsive UI for browsing and searching books",
      "Server-side rendering and data fetching",
    ],
    technologies: ["React", "TypeScript", "mySQL", "MAMP", "Node.js"],
    image: [],
    github: null,
    liveDemo: null,
    tags: [
      "React",
      "TypeScript",
      "MySQL",
      "Axios",
      "Express",
      "Web Development",
    ],
  },
  // FINANCIAL DASHBOARD
  {
    id: "financial-dashboard",
    type: "Personal project",
    title: "Financial dashboard",
    description:
      "I built this financial dashboard by following a tutorial to learn how full-stack applications are structured and how different technologies work together. The frontend is developed with React, TypeScript, and Material UI to create a responsive, clean interface, while the backend uses Express and MongoDB to handle data and API requests. The project includes features like interactive charts, tables, and KPIs, and helped me get hands-on experience with building a real-world, data-focused web application from start to finish.",
    features: [
      "Responsive financial dashboard UI with Material UI",
      "MongoDB database integration for transaction data",
      "Charts and KPIs for data visualization",
    ],
    technologies: ["React", "TypeScript", "Material UI", "Express", "MongoDB"],
    image: [],
    github: "https://github.com/qtrngn/business-dashboard",
    liveDemo: null,
    tags: [
      "React ",
      "Mui",
      "TypeScript",
      "MongoDB",
      "Express",
      "Web Development",
    ],
  },
  // PAPER TRADING
  {
    id: "paper-trading",
    type: "Personal project",
    title: "Paper trading simulator",
    description:
      "This paper trading simulator is a web app that lets users practice stock trading without real money. It shows live stock data using the Alpaca API and allows users to place mock buy and sell orders to simulate trading activity. I built the frontend with React and TypeScript, and used Firebase for user authentication so users can securely sign up, log in, and track their activity. The backend is powered by Express, and Axios is used to handle data requests.",
    features: [
      "Live stock data display",
      "Paper trading simulation",
      "Trade history tracking",
      "User authentication",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Axios",
      "Express",
      "Alpaca",
      "Firebase",
    ],
    image: [],
    github: "https://github.com/qtrngn/business-dashboard",
    liveDemo: null,
    tags: [
      "React ",
      "TypeScript",
      "Alpaca",
      "Firebase",
      "Express",
      "Axios",
      "Web Development",
    ],
  },
];
