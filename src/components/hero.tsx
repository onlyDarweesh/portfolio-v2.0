"use client";

import { useTheme } from "@/app/theme-provider";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Sparkles } from "lucide-react";
import { TypeAnimation } from "./type-animation";

export function HeroSection() {
  const { theme } = useTheme();

  const handleScrollDown = () => {
    document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "opacity-[0.03]" : "opacity-[0.05]"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              theme === "dark" ? "rgba(122, 162, 247, 1)" : "rgba(99, 102, 241, 1)"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              theme === "dark" ? "rgba(122, 162, 247, 1)" : "rgba(99, 102, 241, 1)"
            } 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gradient */}
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[radial-gradient(600px_circle_at_50%_30%,rgba(122,162,247,0.08),transparent_50%)]"
              : "bg-[radial-gradient(600px_circle_at_50%_30%,rgba(99,102,241,0.06),transparent_50%)]"
          }`}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #7aa2f7, transparent)" }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #bb9af7, transparent)" }}
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase ${
              theme === "dark"
                ? "bg-midnight-700/80 text-tokyo-teal border border-midnight-500/30"
                : "bg-indigo-50 text-indigo-600 border border-indigo-200"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-tokyo-teal animate-pulse" />
            Available for projects
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-2 ${
              theme === "dark" ? "text-white" : "text-light-text"
            }`}
          >
            Hello, I&apos;m
          </h1>
          <div className="mt-2 mb-6">
            <span className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight">
              <span className="gradient-text">DARWESH</span>
            </span>
          </div>
        </motion.div>

        {/* Role / Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8"
        >
          <p
            className={`text-lg sm:text-xl md:text-2xl font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <TypeAnimation
              strings={[
                "Web Developer & UI Designer",
                "Python & TypeScript Developer",
                "Discord Bot Architect",
                "Full-Stack Engineer",
              ]}
            />
          </p>
        </motion.div>

        {/* Terminal decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-mono text-sm mb-10 ${
            theme === "dark"
              ? "bg-midnight-800/60 border border-midnight-600/30 text-gray-400"
              : "bg-gray-50 border border-gray-200 text-gray-500"
          }`}
        >
          <Terminal className="w-4 h-4 text-tokyo-teal" />
          <span>
            <span className="text-tokyo-blue">$</span>{" "}
            <span className="text-tokyo-orange">echo</span>{" "}
            <span className="text-tokyo-teal">&apos;Building the future, one line at a time&apos;</span>
          </span>
          <Sparkles className="w-4 h-4 text-tokyo-yellow" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-tokyo-blue/90 to-tokyo-purple/90 hover:from-tokyo-blue hover:to-tokyo-purple text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-tokyo-blue/20 hover:shadow-tokyo-blue/40 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-8 py-3 font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
              theme === "dark"
                ? "border border-midnight-500 text-gray-300 hover:border-tokyo-blue/50 hover:text-tokyo-blue"
                : "border border-gray-300 text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
            }`}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Arrow below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center mt-6"
        >
          <motion.button
            onClick={handleScrollDown}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "text-gray-500 hover:text-tokyo-blue"
                : "text-gray-400 hover:text-indigo-500"
            }`}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
