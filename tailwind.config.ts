import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        raised: "#0F1416",
        line: "rgba(233,217,194,0.12)",
        ink: "#F5EFE6",
        dim: "#D1C3A6",
        signal: "#20847D",
        teal: "#E9D9C2",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(233,217,194,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(233,217,194,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        pulseTrace: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        pulseTrace: "pulseTrace 2.4s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
export default config;
