import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ci: {
          blue: "#7DAFC8",
          blueDM: "#44606E",
          rose: "#C27BA0",
          roseDM: "#8A5070",
          white: "#F0F0F2",
          dark: "#131315",
          surface: "#1B1B1D",
          border: "#28282C",
          muted: "#8A8A92",
          lightBG: "#F3F3F5",
        }
      },
      fontFamily: {
        headline: ["Froople", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
