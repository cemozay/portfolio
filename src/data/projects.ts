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
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "moview-app",
    title: "Moview",
    description:
      "Mobile app for movie, series, and anime reviews and community",
    longDescription:
      "A mobile application built with Expo for movie, series, and anime reviews, ratings, and community features. Users can discover content, rate and review, and connect with other enthusiasts. Built with Firebase for real-time features and social interaction.",
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
    featured: true,
    date: "2023-06",
  },
  {
    id: "wappi-app",
    title: "Wappi",
    description: "Mobile application for Workcube Türkiye",
    longDescription:
      "A mobile application built with React Native and Expo for social interaction and messaging features. Includes real-time chat, user profiles, and social networking capabilities.",
    image: "/images/projects/wappi.jpg",
    technologies: ["Expo", "React Native", "Firebase", "JavaScript", "Redux"],
    category: "mobile",
    featured: true,
    date: "2024-08",
  },
  {
    id: "party-game-bot",
    title: "Party Game Bot",
    description: "Discord bot for party games and entertainment",
    longDescription:
      "A Discord bot built with JavaScript/Node.js that provides various party games and entertainment features for Discord servers. Includes mini-games, trivia, and interactive commands.",
    image: "/images/projects/party-game-bot.jpg",
    technologies: ["JavaScript", "Node.js", "Discord.js", "MongoDB"],
    category: "backend",
    githubUrl: "https://github.com/cemozay/PartyGameBot",
    featured: true,
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
    featured: false,
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
    featured: false,
    date: "2023-10",
  },
  {
    id: "coloroad-game",
    title: "ColoRoad",
    description: "Mobile Unity game with colorful road mechanics",
    longDescription:
      "A mobile Unity game featuring colorful road mechanics and engaging gameplay. Built for mobile platforms with touch controls and vibrant visuals.",
    image: "/images/projects/coloroad.jpg",
    technologies: ["Unity", "C#", "Mobile Game"],
    category: "game",
    githubUrl: "https://github.com/cemozay/ColoRoad",
    featured: false,
    date: "2021-04",
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
    featured: false,
    date: "2023-02",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio website with retro pixel art aesthetics",
    longDescription:
      "A fully responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features retro pixel art design, dark mode, internationalization, and smooth animations.",
    image: "/images/projects/retro-portfolio.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "next-intl",
    ],
    category: "web",
    githubUrl: "https://github.com/cemozay/portfolio",
    liveUrl: "https://cemozay.com",
    featured: true,
    date: "2024-01",
  },
];

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
