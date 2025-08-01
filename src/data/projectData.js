import netflix from "../assets/projects-image/netflix.png";
import restaurant from "../assets/projects-image/restaurant.png";
import petsmart from "../assets/projects-image/petsmart.png";
import portfolio from "../assets/projects-image/art.png";
import weather from "../assets/projects-image/weather.png";
import book from "../assets/projects-image/book.png";
import books from "../assets/projects-image/books.png";
import finance from "../assets/projects-image/finance.png";
import paper from "../assets/projects-image/paper.png";


const projects = [
  {
    id: "netflix",
    image: netflix,
    title: "NETFLIX CLONE LANDING PAGE",
    year: "2024",
    tags: ["React", "Web Development"],
    featured: false, 
  },

  {
    id: "restaurant",
    image: restaurant,
    title: "RESTAURANT WEBSITE",
    year: "2024",
    tags: ["HTML", "CSS", "Responsive", "Plugins", "Web Development"],
    featured: false, 
  },

  {
    id: "petsmart",
    image: petsmart,
    title: "PETSMART APPLICATION REDESIGN",
    year: "2024",
    tags: ["Figma", "UI/UX"],
    featured: false, 
  },

  {
    id: "portfolio",
    image: portfolio,
    title: "PICASSO PORTFOLIO WEBSITE",
    year: "2024",
    tags: ["HTML", "CSS", "Web Development"],
    featured: false, 
  },

  {
    id: "weather-application",
    image: weather,
    title: "WEATHER APPLICATION",
    year: "2025",
    tags: ["React Native","WeatherAPI", "Lottie", "Axios", "App Development", ],
    featured: true, 
  },
  {
    id: "book-explorers",
    image: book,
    title: "BOOK EXPLORERS APPLICATION",
    year: "2025",
    tags: ["React Native", "Firebase","Axios","Google Books APIs", "App Development", ],
    featured: true, 
  },

  {
    id: "book-explorers-website",
    image: books,
    title: "BOOK EXPLORERS WEBSITE",
    year: "2025",
    tags: ["React","TypeScript", "MySQL", "Axios","Express", "Web Development", ],
    featured: false, 
  },


  {
    id: "financial-dashboard",
    image: finance,
    title: "FINANCIAL DASHBOARD",
    year: "2025",
    tags: ["React ", "Mui", "TypeScript", "MongoDB", "Express", "Web Development",],
    featured: true, 
  },

  {
    id: "paper-trading",
    image: paper,
    title: "PAPER TRADING SIMULATOR",
    year: "2025",
    tags: ["React ","TypeScript", "Alpaca", "Firebase", "Express", "Axios", "Web Development",],
    featured: true, 
  },


];



export default projects;




