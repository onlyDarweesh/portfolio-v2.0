"use client";

import { useTheme } from "@/app/theme-provider";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Palette,
  Globe,
  Bot,
  FileCode,
  Server,
  Database,
  Layout,
  PenTool,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    items: [
      { name: "Python", icon: FileCode, color: "text-tokyo-teal", level: 95 },
      { name: "TypeScript", icon: Code2, color: "text-tokyo-blue", level: 90 },
      { name: "Java", icon: Server, color: "text-tokyo-orange", level: 80 },
    ],
  },
  {
    name: "Web Development",
    items: [
      { name: "React / Next.js", icon: Globe, color: "text-tokyo-cyan", level: 88 },
      { name: "Tailwind CSS", icon: Palette, color: "text-sky-400", level: 92 },
      { name: "Node.js", icon: Server, color: "text-green-400", level: 82 },
    ],
  },
  {
    name: "Design",
    items: [
      { name: "UI/UX Design", icon: PenTool, color: "text-tokyo-purple", level: 85 },
      { name: "Web UI Design", icon: Layout, color: "text-pink-400", level: 88 },
      { name: "Design Systems", icon: Layers, color: "text-amber-400", level: 78 },
    ],
  },
  {
    name: "Specialties",
    items: [
      { name: "Discord Bots", icon: Bot, color: "text-indigo-400", level: 95 },
      { name: "API Design", icon: Server, color: "text-emerald-400", level: 83 },
      { name: "Database Design", icon: Database, color: "text-yellow-400", level: 80 },
    ],
  },
];

export function SkillsSection() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative"
    >
      {/* Subtle background gradient */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-transparent via-midnight-800/30 to-transparent"
            : "bg-gradient-to-b from-transparent via-gray-50/80 to-transparent"
        }`}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div
              className={`w-8 h-[1px] ${
                theme === "dark" ? "bg-midnight-500" : "bg-gray-300"
              }`}
            />
            <span
              className={`text-xs font-mono tracking-widest uppercase ${
                theme === "dark" ? "text-tokyo-blue/60" : "text-indigo-400/60"
              }`}
            >
              What I do
            </span>
            <div
              className={`w-8 h-[1px] ${
                theme === "dark" ? "bg-midnight-500" : "bg-gray-300"
              }`}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-light-text"
            }`}
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto text-base md:text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            From deep backend engineering to pixel-perfect interfaces, here is
            what I bring to the table
          </motion.p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="group"
            >
              {/* Category label */}
              <h3
                className={`font-mono text-xs tracking-widest uppercase mb-4 pb-2 ${
                  theme === "dark"
                    ? "text-gray-500 border-b border-midnight-600/50"
                    : "text-gray-400 border-b border-gray-200"
                }`}
              >
                // {category.name}
              </h3>

              {/* Skills */}
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group/skill cursor-default"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon
                          className={`w-4 h-4 transition-colors duration-300 ${
                            hoveredSkill === skill.name
                              ? skill.color
                              : theme === "dark"
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`font-mono text-xs ${
                          theme === "dark"
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className={`h-1 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-midnight-600" : "bg-gray-100"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full transition-colors duration-300 ${
                          hoveredSkill === skill.name
                            ? `bg-gradient-to-r ${
                                skill.color === "text-tokyo-teal"
                                  ? "from-tokyo-teal/70 to-tokyo-teal"
                                  : skill.color === "text-tokyo-blue"
                                  ? "from-tokyo-blue/70 to-tokyo-blue"
                                  : skill.color === "text-tokyo-orange"
                                  ? "from-tokyo-orange/70 to-tokyo-orange"
                                  : "from-tokyo-purple/70 to-tokyo-purple"
                              }`
                            : theme === "dark"
                            ? "bg-gray-500/40"
                            : "bg-indigo-400/40"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            "REST APIs",
            "PostgreSQL",
            "Docker",
            "Git",
            "Figma",
            "Responsive Design",
            "Authentication",
            "WebSocket",
          ].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all duration-300 ${
                theme === "dark"
                  ? "bg-midnight-700/50 text-gray-400 border border-midnight-600/30 hover:border-tokyo-blue/30 hover:text-tokyo-blue"
                  : "bg-gray-50 text-gray-500 border border-gray-200 hover:border-indigo-200 hover:text-indigo-500"
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
