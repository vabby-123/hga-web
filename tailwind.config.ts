import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071A33",
        ivory: "#F3EBDD",
        gold: { DEFAULT: "#C99A2E", dark: "#B5861F" },
        warm: "#FAF7F0",
        line: "#E8E0D0",
        ink: { DEFAULT: "#071A33", 2: "#40516A" },
        muted: "#718096",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { none: "0px", DEFAULT: "0px", sm: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px", full: "9999px" },
      letterSpacing: { eyebrow: "0.25em", nav: "0.18em", label: "0.2em" },
      maxWidth: { wide: "1280px", home: "1200px", content: "1100px", read: "720px" },
    },
  },
  plugins: [],
};
export default config;
