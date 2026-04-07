/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: {
          900: "#0a0e1a",
          800: "#0d1127",
          700: "#131b33",
          600: "#1a2540",
          500: "#243054",
        },
        tokyo: {
          blue: "#7aa2f7",
          purple: "#bb9af7",
          cyan: "#7dcfff",
          teal: "#9ece6a",
          orange: "#ff9e64",
          red: "#f7768e",
          yellow: "#e0af68",
        },
        light: {
          bg: "#f4f6f9",
          card: "#ffffff",
          text: "#1a1a2e",
          muted: "#6b7280",
          border: "#e2e8f0",
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', "monospace"],
        sans: ['"Inter"', '"SF Pro Display"', "system-ui", "sans-serif"],
      },
      animation: {
        "gradient": "gradient 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(122, 162, 247, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(122, 162, 247, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
