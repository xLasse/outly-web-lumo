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
          blue: "#4CC9F0",
          pink: "#F72585",
          white: "#F8F9FA",
          dark: "#1A1A1A",
          brown: {
            main: "#854F3A",
            light: "#B37659",
            dark: "#552E20",
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
