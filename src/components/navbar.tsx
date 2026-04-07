"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/app/theme-provider";
import { ThemeToggle } from "./theme-toggle";
import { Code2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#discord", label: "Discord" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-midnight-900/80 backdrop-blur-xl border-b border-midnight-600/50 shadow-2xl shadow-black/20"
            : "bg-white/80 backdrop-blur-xl border-b border-light-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="w-7 h-7 text-tokyo-blue transition-colors duration-300 group-hover:text-tokyo-purple" />
          </motion.div>
          <span
            className={`text-lg font-bold font-mono tracking-wide transition-colors ${
              theme === "dark"
                ? "text-white group-hover:text-tokyo-blue"
                : "text-light-text group-hover:text-tokyo-blue"
            }`}
          >
            DARWESH
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-tokyo-blue hover:bg-tokyo-blue/5"
                  : "text-light-muted hover:text-tokyo-blue hover:bg-tokyo-blue/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-inherit">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`p-2 rounded-lg transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-light-muted hover:text-light-text"
            }`}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              theme === "dark" ? "bg-midnight-900/95" : "bg-white/95"
            } backdrop-blur-xl`}
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-4 py-3 text-base font-medium rounded-lg ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-tokyo-blue hover:bg-tokyo-blue/5"
                      : "text-gray-600 hover:text-tokyo-blue hover:bg-tokyo-blue/5"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
