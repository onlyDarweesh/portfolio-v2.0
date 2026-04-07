"use client";

import { useTheme } from "@/app/theme-provider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full overflow-hidden transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-tokyo-blue/40"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #0f1629, #1a2540)"
            : "linear-gradient(135deg, #bae6fd, #fef3c7)",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center px-1.5">
        {theme === "dark" ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-3.5 h-3.5 text-tokyo-blue" />
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="ml-auto"
          >
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          </motion.span>
        )}
      </div>

      {/* Thumb */}
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 2 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, #3b82f6, #1e3a5f)"
              : "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow:
            theme === "dark"
              ? "0 0 8px rgba(59,130,246,0.5)"
              : "0 0 8px rgba(251,191,36,0.5)",
        }}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        )}
      </motion.div>
    </motion.button>
  );
}
