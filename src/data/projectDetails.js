import netflix1 from "../assets/projects-details-image/netflix1.webp";
import netflix2 from "../assets/projects-details-image/netflix2.webp";

import petsmart from "../assets/projects-details-image/petsmart.webp";

import picasso1 from "../assets/projects-details-image/picasso1.webp";
import picasso2 from "../assets/projects-details-image/picasso2.webp";
import picasso3 from "../assets/projects-details-image/picasso3.webp";


import weatherDark from "../assets/projects-details-image/weather-dark.png";
import weatherMorning from "../assets/projects-details-image/weather-morning.png";
import astronomy from "../assets/projects-details-image/weather-astronomy.png";

import bookMain from "../assets/projects-details-image/book-main.png";
import bookDetail from "../assets/projects-details-image/book-detail.png";
import bookFavorite from "../assets/projects-details-image/book-favorite.png";
import bookLogin from "../assets/projects-details-image/book-login.png";

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
    title: "Restaurant Website",
    description:
      "Built with HTML and CSS and enhanced with lightweight plugins, this responsive restaurant site emphasizes clean structure, accessible navigation, and fast load times, with a smooth image slider and anchored scrolling for a polished experience.",

    problemStatement: null,

    developmentProcess: [
      "Created wireframes on Figma for mobile and desktop screens",
      "Built with semantic HTML structure and styled with modern CSS",
      "Integrated lightweight plugins (image carousel, smooth scrolling, map and contact form)",
    ],

    features: [
      "Responsive, single-page layout with section anchors (Home, Menu, About, Contact)",
      "Menu showcase: six categories (Main, Tasting, Lunch Special, Dessert, Drink, Wine) with images and descriptions",
      "Image carousel/gallery with multiple slides",
    ],

    screenshots: [],

    outcome: null,

    futureImprovements: null,

    technologies: ["HTML", "CSS", "Responsive", "Plugins", "Web Development"],
    github: "https://github.com/qtrngn/bookExplorer-app",
    liveDemo: "https://restaurant-website-mu-six.vercel.app/",
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
      "A simple React Native app that shows real-time weather data using WeatherAPI. The app uses Axios to get data quickly and Lottie animations to display background in a fun and interactive way.",

    problemStatement:
      "I wanted to create a fast, clean, and easy-to-use weather app that shows the most important information right away.",

    developmentProcess: [
      "Built main screens: Home (current weather) with Search (find cities), and Astronomy (sunrise/sunset info).",
      "Connected to WeatherAPI using Axios for smooth and reliable data fetching.",
      "Added location support: asks for permission and falls back to manual search if denied.",
      "Used Lottie animations to show different background depends on the location time in an engaging way.",
      "Improved performance by caching recent weather data and showing placeholders while loading.",
    ],

    features: [
      "Real-time weather (temperature, humidity, wind)",
      "Search weather by city",
      "Location-based weather",
      "Lottie animations for day/night",
      "Astronomy info",
    ],

    screenshots: [
      { src: weatherDark, caption: "Night time" },
      { src: weatherMorning, caption: "Day time" },
      { src: astronomy, caption: "Astronomy info" },
    ],

    outcome:
      "Successfully built a weather app that is fast, easy to use, and visually appealing. I improved my skills in API integration, animations, and mobile UI design.",

    futureImprovements: ["Add current location"],

    technologies: ["React Native", "WeatherAPI", "Lottie", "Axios"],
    github: "https://github.com/qtrngn/weather-application",
    liveDemo: null,
    tags: ["React Native", "WeatherAPI", "Lottie", "Axios", "App Development"],
  },

  // BOOK EXPLORERS
  {
    id: "book-explorers",
    type: "School project",
    title: "Book Explorers Application",
    description:
      "Book Explorers is a mobile app built with React Native that allows users to search for books using the Google Books API and securely log in using Firebase Authentication. The idea behind the app was to create a functional tool for book discovery while building my skills with API integration, authentication flows, and mobile UI design.",

    problemStatement:
      "Many book search apps lack a modern mobile experience. The goal was to create a fast, minimal, and secure book discovery tool with a smooth user experience on mobile",

    developmentProcess: [
      "Set clear goals: make the app quick to search books, easy to log in securely",
      "Organized the code into layers: Screens (Home, Favorites, Profile, SignIn and SignUp), Services (API calls, authentication, storage), and Hooks (reusable logic like user login and book search).",
      "Built the login system with Firebase: checks if a user is signed in before showing the main pages, validates forms before sending data, and keeps users signed in between app sessions.",
      "Improved speed and smoothness: used React hooks to manage app state, optimized list rendering, cached book images, and showed placeholders while images load.",
      "Optimized the book details page: loads with the info already fetched and only requests extra details when needed.",
      "Kept security in mind: no private keys in the app, let Firebase manage login tokens, and checked all user inputs before sending them to the server.",
      "Made the app accessible: added labels for screen readers, ensured buttons are large enough to tap, adjusted text for user settings, and made forms move correctly with the keyboard.",
    ],

    features: [
      "Search and browse books via the Google Books API",
      "View detailed book information (cover, author, description)",
      "User authentication with Firebase (sign up, login)",
      "Axios integration for API requests",
    ],

    screenshots: [
      { src: bookMain, caption: "Main page" },
      { src: bookFavorite, caption: "Favorite page" },
      { src: bookDetail, caption: "Detail page" },
      { src: bookLogin, caption: "Login page" },
    ],

    outcome:
      "Successfully built a fully functional book search app with secure authentication and a clean, responsive UI. Improved my skills in API integration, authentication flows, state management, and performance optimization in mobile apps.",

    futureImprovements: ["Add reading streaks", "Implement dark mode theme"],

    technologies: ["React Native", "Google Books API", "Firebase", "Axios"],
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
    type: "Personal project - COMING SOON",
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
    type: "Personal project - COMING SOON",
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

  // Kiddo Style project
  {
    id: "kiddo-style",
    type: "School project completed in collaboration with the talented team of Czara, Negin, and Ju Kim",
    title: "Kiddo Style Cycle",
    description:
      "An educational site for children that uses gameplay, friendly graphics, and simple storytelling to show how clothing waste harms the environment",

    problemStatement: null,

    developmentProcess: [
     "Defined goals (teach fast-fashion impact to kids), mapped a simple flow on Figma",
     "Created design on Figma",
     "Built reusable components (Layout, Nav, Footer)",
     "Mobile-first with Tailwind breakpoints, utility classes for rapid iteration, consistent spacing and type scale for readability",
     "Continuous deploy to Vercel with preview URLs for reviews, main branch triggers production."
    ],

    features: [
      "Interactive mini-game that teaches fast-fashion impacts (reduce/reuse/recycle mechanics, levels, scoring)",
      "Quiz/checkpoint cards with instant feedback and badges",
      "Kid-friendly UI: large tap targets, playful illustrations, readable type scale, clear iconography",
      "Guided learning content: short fact cards, eco-tips after each level",
    ],

    screenshots: null,

    outcome:
      "A fast, accessible learning site built with React and Tailwind that runs smoothly on mobile and desktop, using an interactive game and quizzes to drive engagement and deepen understanding of fast fashion’s impact. Most importantly, delivered through close collaboration with an exceptional, highly professional team",

    futureImprovements: null,

    technologies: ["React", "TailwindCSS", "GitHub", "Vercel", "Web Development"],
    github: "https://github.com/Kiddo-Style-Cycle/Termproject-QA",
    liveDemo: "https://termproject-qa.vercel.app/",
  },
];
