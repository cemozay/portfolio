export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "backend" | "desktop" | "game";
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "moview-app",
    title: "Moview",
    description:
      "Full-featured mobile app for movie discovery, reviews, and community interaction",
    longDescription:
      "A comprehensive mobile application built with Expo for movie, series, and anime discovery. Features include personalized recommendations, user reviews, ratings, social features, and real-time community interaction. Built with Firebase for backend services and state management Zustand.",
    image: "/images/projects/moview.jpg",
    technologies: [
      "Expo",
      "React Native",
      "Firebase",
      "JavaScript",
      "Redux",
      "Zustand",
    ],
    category: "mobile",
    githubUrl: "https://github.com/cemozay/Moview",
    date: "2023-06",
  },
  {
    id: "wappi-app",
    title: "Wappi",
    description: "Enterprise mobile app for management and communication",
    longDescription:
      "A professional mobile application built for Workcube Türkiye using React Native. Features include real-time messaging, user profiles, social networking, and enterprise-grade security. Built with Firebase for real-time data synchronization and scalable backend services.",
    image: "/images/projects/wappi.jpg",
    technologies: ["Expo", "React Native", "Firebase", "JavaScript", "Redux"],
    category: "mobile",
    date: "2024-08",
  },
  {
    id: "party-game-bot",
    title: "Party Game Bot",
    description:
      "Interactive Discord bot with multiplayer games and entertainment",
    longDescription:
      "A feature-rich Discord bot built with Node.js and Discord.js that provides various multiplayer party games and entertainment features. Includes mini-games, trivia, and interactive commands.",
    image: "/images/projects/party-game-bot.jpg",
    technologies: ["JavaScript", "Node.js", "Discord.js", "MongoDB"],
    category: "backend",
    githubUrl: "https://github.com/cemozay/PartyGameBot",
    date: "2024-04",
  },
  {
    id: "shutdown-timer",
    title: "Shutdown Timer",
    description: "Python desktop application for PC shutdown scheduling",
    longDescription:
      "A Python desktop application that allows users to schedule automatic PC shutdowns. Features a simple GUI with time selection and countdown display.",
    image: "/images/projects/shutdown-timer.jpg",
    technologies: ["Python", "Tkinter", "Desktop App"],
    category: "desktop",
    githubUrl: "https://github.com/cemozay/ShutdownTimer-Python",
    date: "2023-12",
  },
  {
    id: "otso-game",
    title: "Otso",
    description: "Unity game demo for the BUGLAB Tekmer",
    longDescription:
      "A Unity game demo with a cute and simple game mechanics. Showcases Unity development skills and game design principles.",
    image: "/images/projects/otso.jpg",
    technologies: ["Unity", "C#", "Game Development"],
    category: "game",
    githubUrl: "https://github.com/cemozay/The-Otso",
    date: "2023-10",
  },
  {
    id: "felaket-tellali-bot",
    title: "Felaket Tellali Bot",
    description: "Discord bot for disaster and emergency information",
    longDescription:
      "A Discord bot that provides disaster and emergency information to users. Built with JavaScript and Node.js, includes real-time updates and alert systems.",
    image: "/images/projects/felaket-tellali.jpg",
    technologies: ["JavaScript", "Node.js", "Discord.js", "API Integration"],
    category: "backend",
    githubUrl: "https://github.com/cemozay/Felaket-Tellali-Bot",
    date: "2023-02",
  },
];

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
