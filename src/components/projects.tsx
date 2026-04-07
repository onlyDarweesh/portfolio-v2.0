"use client";

import { useTheme } from "@/app/theme-provider";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aether UI Kit",
    description:
      "A premium component library built with React and Tailwind CSS. Features dark mode, accessibility, and smooth animations out of the box.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "ui",
    featured: true,
    stats: { components: "40+", downloads: "2K+" },
    codeUrl: "https://github.com/onlydarweesh",
    demoUrl: "#",
  },
  {
    title: "Charity Platform",
    description:
      "A full-stack donation and fundraising platform with real-time tracking, campaign management, and transparent impact reporting.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "web",
    featured: false,
    stats: {},
    codeUrl: "https://github.com/onlydarweesh",
    demoUrl: "#",
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio site — a minimal, code-centric design that showcased my early development journey and growth.",
    tags: ["HTML/CSS", "JavaScript", "Vanilla"],
    image: "code",
    featured: false,
    stats: {},
    codeUrl: "https://github.com/onlydarweesh",
    demoUrl: "#",
  },
];

export function ProjectsSection() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
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
              Featured work
            </span>
            <div
              className={`w-8 h-[1px] ${
                theme === "dark" ? "bg-midnight-500" : "bg-gray-300"
              }`}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-light-text"
            }`}
          >
            Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-2xl mx-auto text-base md:text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            A curated selection of projects that showcase the range of what I build
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                project.featured ? "md:col-span-1" : ""
              } ${
                theme === "dark"
                  ? "bg-midnight-800/60 border border-midnight-600/30 hover:border-midnight-500/50 hover:shadow-2xl hover:shadow-tokyo-blue/5"
                  : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl"
              }`}
            >
              {/* Decorative top bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${
                  i % 2 === 0
                    ? "from-tokyo-blue to-tokyo-purple"
                    : "from-tokyo-purple to-tokyo-cyan"
                }`}
              />

              <div className="p-6 md:p-8">
                {/* Project icon + stats */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-midnight-600/50"
                        : "bg-gray-50"
                    }`}
                  >
                    {project.image === "bot" && <Star className="w-5 h-5 text-tokyo-teal" />}
                    {project.image === "ui" && <ExternalLink className="w-5 h-5 text-tokyo-purple" />}
                    {project.image === "web" && <ArrowUpRight className="w-5 h-5 text-tokyo-cyan" />}
                    {project.image === "code" && <Github className="w-5 h-5 text-tokyo-orange" />}
                  </div>

                  {project.stats?.servers && (
                    <div className="flex gap-3">
                      {project.stats?.servers && (
                        <span
                          className={`text-xs font-mono ${
                            theme === "dark" ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {project.stats.servers} servers
                        </span>
                      )}
                      {project.stats.users && (
                        <span
                          className={`text-xs font-mono ${
                            theme === "dark" ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {project.stats.users} users
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <h3
                  className={`text-xl font-bold mb-3 group-hover:text-tokyo-blue transition-colors ${
                    theme === "dark" ? "text-white" : "text-light-text"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-md text-xs font-mono ${
                        theme === "dark"
                          ? "bg-midnight-600/50 text-gray-400"
                          : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "text-tokyo-blue hover:text-tokyo-cyan"
                        : "text-indigo-500 hover:text-indigo-600"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/onlydarweesh"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
              theme === "dark"
                ? "border border-midnight-500 text-gray-300 hover:border-tokyo-blue/50 hover:text-tokyo-blue hover:shadow-lg hover:shadow-tokyo-blue/5"
                : "border border-gray-200 text-gray-500 hover:border-indigo-200 hover:text-indigo-500 hover:shadow-lg"
            }`}
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
