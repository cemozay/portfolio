export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "tools";
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    icon: "⚛️",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "▲",
  },
  {
    name: "Vue.js",
    category: "frontend",
    icon: "💚",
  },
  {
    name: "CFML",
    category: "frontend",
    icon: "🔧",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "🔷",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "📜",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "🎨",
  },
  {
    name: "Redux",
    category: "frontend",
    icon: "🔴",
  },
  {
    name: "Zustand",
    category: "frontend",
    icon: "🐻",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "🟢",
  },
  {
    name: "Firebase",
    category: "backend",
    icon: "🔥",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "🐘",
  },
  {
    name: "MSSQL",
    category: "backend",
    icon: "🗄️",
  },
  {
    name: "RESTful APIs",
    category: "backend",
    icon: "🌐",
  },

  // Mobile
  {
    name: "React Native",
    category: "mobile",
    icon: "📱",
  },
  {
    name: "Expo",
    category: "mobile",
    icon: "⚡",
  },
  {
    name: "Unity",
    category: "mobile",
    icon: "🎮",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: "📝",
  },
  {
    name: "Docker",
    category: "tools",
    icon: "🐳",
  },
  {
    name: "n8n",
    category: "tools",
    icon: "🔗",
  },
];

export const getSkillsByCategory = (category: string) => {
  if (category === "all") return skills;
  return skills.filter((skill) => skill.category === category);
};
