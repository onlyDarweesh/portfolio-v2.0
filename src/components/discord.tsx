"use client";

import { useTheme } from "@/app/theme-provider";
import { motion } from "framer-motion";
import { Bot, Heart, Sparkles, Zap, Trophy, Shield, Music, Code } from "lucide-react";


const features = [
  { icon: Bot, title: "Moderation", desc: "AutoMod, warnings, mutes, bans — all customizable per server" },
  { icon: Music, title: "Music", desc: "High-quality music playback with queue management and filters" },
  { icon: Trophy, title: "Leveling", desc: "XP system with custom roles, leaderboards, and rewards" },
  { icon: Zap, title: "Utility", desc: "Reminders, polls, embeds, and dozens of quality-of-life tools" },
  { icon: Shield, title: "Security", desc: "Anti-raid, anti-spam, verification gates, and audit logging" },
  { icon: Sparkles, title: "Custom", desc: "Open architecture — request features and watch them ship" },
];

export function DiscordBotsSection() {
  const { theme } = useTheme();

  return (
    <section id="discord" className="py-24 md:py-32 relative">
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-transparent via-midnight-800/20 to-transparent"
            : "bg-gradient-to-b from-transparent via-indigo-50/50 to-transparent"
        }`}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-8 h-[1px] ${theme === "dark" ? "bg-midnight-500" : "bg-gray-300"}`} />
            <span className={`text-xs font-mono tracking-widest uppercase ${theme === "dark" ? "text-tokyo-teal/60" : "text-emerald-400/60"}`}>
              Specialization
            </span>
            <div className={`w-8 h-[1px] ${theme === "dark" ? "bg-midnight-500" : "bg-gray-300"}`} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-light-text"}`}
          >
            Discord Bot{" "}
            <span className="bg-gradient-to-r from-tokyo-teal to-tokyo-cyan bg-clip-text text-transparent">
              Development
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto text-base md:text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
          >
            Custom bots that transform servers — powered by Python, built with care,
            running 24/7 on reliable infrastructure
          </motion.p>
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <Heart className="w-5 h-5 text-tokyo-red" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-8 h-1.5 rounded-full bg-tokyo-teal/80" />
            ))}
          </div>
          <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
            5/5 Server Rating
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`group rounded-xl p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-midnight-800/40 border border-midnight-600/20 hover:border-tokyo-teal/20 hover:bg-midnight-700/40"
                  : "bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-lg"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-midnight-600/50 group-hover:bg-tokyo-teal/10"
                    : "bg-gray-50 group-hover:bg-indigo-50"
                }`}
              >
                <feature.icon className="w-5 h-5 text-tokyo-teal group-hover:scale-110 transition-transform" />
              </div>

              <h3
                className={`text-base font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-light-text"
                }`}
              >
                {feature.title}
              </h3>

              <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-tokyo-teal/90 to-tokyo-cyan/90 hover:from-tokyo-teal hover:to-tokyo-cyan text-midnight-900 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-tokyo-teal/20 hover:shadow-tokyo-teal/40 hover:-translate-y-0.5"
          >
            <Code className="w-4 h-4" />
            Need a Custom Bot?
          </a>
        </motion.div>
      </div>
    </section>
  );
}
