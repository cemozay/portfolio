export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  avatar: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Interest {
  name: string;
  description: string;
  icon: string;
}

export const personalInfo: PersonalInfo = {
  name: "Yunus Cem Özay",
  title: "Full Stack Developer",
  description:
    "I create modern web and mobile applications. Passionate about clean code and pixel-perfect designs.",
  email: "cemyunusozay@gmail.com",
  github: "cemozay",
  linkedin: "yunuscemozay",
  location: "Istanbul, Turkey",
  avatar: "/images/avatar.jpg",
};

export const education: Education[] = [
  {
    degree: "Electrical Engineering",
    school: "Yildiz Technical University",
    year: "2021-2025",
    description:
      "Bachelor of Science in Electrical Engineering with focus on software engineering, web development and mobile development.",
  },
];

export const experience: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Workcube Türkiye",
    period: "2023 - Present",
    description:
      "Full stack development using CFML, MSSQL, PostgreSQL, Vue.js, React Native, JavaScript, and Linux operations. Building scalable web and mobile applications.",
    technologies: [
      "CFML",
      "MSSQL",
      "PostgreSQL",
      "Vue.js",
      "React Native",
      "JavaScript",
      "Linux",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Workcube Türkiye",
    period: "2022 - 2023",
    description:
      "Started as junior developer, working on various web applications and learning modern development practices. Gained experience in full-stack development.",
    technologies: [
      "CFML",
      "MSSQL",
      "PostgreSQL",
      "Vue.js",
      "React Native",
      "JavaScript",
    ],
  },
  {
    title: "Co-Founder & Mobile Developer",
    company: "Moview",
    period: "2023 - Present",
    description:
      "Co-founded a mobile application for movie, series, and anime reviews, ratings, and community features. Built with Expo and Firebase for social interaction and content discovery.",
    technologies: [
      "Expo",
      "React Native",
      "Firebase",
      "JavaScript",
      "Mobile Development",
    ],
  },
];

export const interests: Interest[] = [
  {
    name: "Game Development",
    description:
      "Started programming with Unity mobile game development. Created mini game demos with Unity and Unreal Engine.",
    icon: "🎮",
  },
  {
    name: "Web Development",
    description:
      "Building modern web applications with cutting-edge technologies.",
    icon: "💻",
  },
  {
    name: "Mobile Development",
    description: "Developing mobile applications with Expo and React Native.",
    icon: "📱",
  },
  {
    name: "Gaming",
    description:
      "Passionate about playing video games and exploring new titles.",
    icon: "🕹️",
  },
  {
    name: "Music",
    description: "Love listening to music and playing guitar.",
    icon: "🎵",
  },
  {
    name: "Cinema",
    description:
      "Big fan of movies, series, and anime. Love discovering new content.",
    icon: "🎬",
  },
];
