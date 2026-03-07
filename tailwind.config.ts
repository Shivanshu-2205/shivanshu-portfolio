import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument)", "serif"],
      },
      colors: {
        bg:    "#07090e",
        bg2:   "#0c0f18",
        bg3:   "#111622",
        accent:"#4f8ef7",
        accent2:"#7c5cfc",
        accent3:"#00e5b0",
      },
    },
  },
  plugins: [],
};
export default config;
