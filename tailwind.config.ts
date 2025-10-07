import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme colors
        "retro-bg": "#FAF4E5",
        "retro-primary": "#FF9800",
        "retro-accent": "#FFB84C",
        "retro-text": "#0D0D0D",
        "retro-border": "#FF9800",

        // Dark theme colors
        "retro-bg-dark": "#0D0D0D",
        "retro-text-dark": "#FAF4E5",
        "retro-border-dark": "#FF9800",
      },
      fontFamily: {
        pixel: ["Press Start 2P", "monospace"],
        mono: ["Space Mono", "IBM Plex Mono", "monospace"],
      },
      animation: {
        "pixel-glow": "pixel-glow 2s ease-in-out infinite alternate",
        scanline: "scanline 2s linear infinite",
        flicker: "flicker 0.15s infinite linear",
      },
      keyframes: {
        "pixel-glow": {
          "0%": {
            boxShadow: "0 0 5px #FF9800, 0 0 10px #FF9800, 0 0 15px #FF9800",
          },
          "100%": {
            boxShadow: "0 0 10px #FF9800, 0 0 20px #FF9800, 0 0 30px #FF9800",
          },
        },
        scanline: {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "0.99",
            filter: "brightness(1)",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: "0.4",
            filter: "brightness(0.8)",
          },
        },
      },
      scrollSnapType: {
        y: "y mandatory",
      },
      scrollSnapAlign: {
        start: "start",
        center: "center",
        end: "end",
      },
    },
  },
  plugins: [],
};

export default config;
