"use client";

import { useTheme } from "@/app/theme-provider";
import { Github, Instagram, Mail, Heart, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 border-t ${
        theme === "dark"
          ? "bg-midnight-800/20 border-midnight-700/30"
          : "bg-gray-50/50 border-light-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + branding */}
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-tokyo-blue" />
            <span
              className={`font-mono font-bold tracking-wide ${
                theme === "dark" ? "text-white" : "text-light-text"
              }`}
            >
              DARWESH
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/onlydarweesh"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-tokyo-blue hover:bg-tokyo-blue/5"
                  : "text-gray-400 hover:text-indigo-500 hover:bg-indigo-50"
              }`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/itsrealsak"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-pink-400 hover:bg-pink-400/5"
                  : "text-gray-400 hover:text-pink-500 hover:bg-pink-50"
              }`}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <div className="relative group">
              <div
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-gray-500 hover:text-indigo-400 hover:bg-indigo-400/5"
                    : "text-gray-400 hover:text-indigo-500 hover:bg-indigo-50"
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
              </div>
              {/* Tooltip */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-md text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap ${
                  theme === "dark" ? "bg-midnight-700 text-gray-300" : "bg-gray-800 text-white"
                }`}
              >
                .onlydarwesh
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-inherit"
                  style={{ borderTopColor: theme === "dark" ? "#131b33" : "#1f2937" }}
                />
              </div>
            </div>
            <a
              href="mailto:sohaibabbaskhan02@gmail.com"
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-tokyo-orange hover:bg-tokyo-orange/5"
                  : "text-gray-400 hover:text-orange-500 hover:bg-orange-50"
              }`}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copy */}
          <p
            className={`text-sm flex items-center gap-1.5 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            &copy; {currentYear} DARWESH. Built with
            <Heart className="w-3.5 h-3.5 text-tokyo-red/80" />
            and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
