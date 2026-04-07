"use client";

import { useTheme } from "@/app/theme-provider";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const socialLinks = [
    {
      label: "GitHub",
      value: "@onlydarweesh",
      url: "https://github.com/onlydarweesh",
      icon: Github,
      color: "hover:text-tokyo-blue",
      bgColor: "hover:bg-tokyo-blue/10",
    },
    {
      label: "Instagram",
      value: "@itsrealsak",
      url: "https://instagram.com/itsrealsak",
      icon: Instagram,
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/10",
    },
    {
      label: "Discord",
      value: ".onlydarwesh",
      url: null,
      icon: MessageSquare,
      color: "hover:text-indigo-400",
      bgColor: "hover:bg-indigo-400/10",
    },
    {
      label: "Email",
      value: "sohaibabbaskhan02@gmail.com",
      url: "mailto:sohaibabbaskhan02@gmail.com",
      icon: Mail,
      color: "hover:text-tokyo-orange",
      bgColor: "hover:bg-tokyo-orange/10",
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-8 h-[1px] ${theme === "dark" ? "bg-midnight-500" : "bg-gray-300"}`} />
            <span className={`text-xs font-mono tracking-widest uppercase ${theme === "dark" ? "text-tokyo-blue/60" : "text-indigo-400/60"}`}>
              Let&apos;s connect
            </span>
            <div className={`w-8 h-[1px] ${theme === "dark" ? "bg-midnight-500" : "bg-gray-300"}`} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-light-text"}`}
          >
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-lg mx-auto text-base md:text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
          >
            Ready to start a project? Or just want to say hi? Drop me a message.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group flex items-center gap-4 p-5 rounded-xl transition-all duration-300 ${
                link.url
                  ? `cursor-pointer ${theme === "dark" ? "bg-midnight-800/40 border border-midnight-600/20 hover:border-tokyo-blue/20" : "bg-white border border-gray-100 hover:border-indigo-100"}`
                  : `cursor-pointer ${theme === "dark" ? "bg-midnight-800/40 border border-midnight-600/20 hover:border-tokyo-blue/20" : "bg-white border border-gray-100 hover:border-indigo-100"}`
              }`}
              onClick={() => {
                if (link.label === "Discord") {
                  copyToClipboard(link.value, link.label);
                }
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${link.bgColor} ${
                  theme === "dark" ? "bg-midnight-600/50" : "bg-gray-50"
                }`}
              >
                <link.icon className={`w-5 h-5 ${link.color} transition-colors`} />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs font-mono uppercase tracking-wider mb-0.5 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </p>
                <p
                  className={`font-medium truncate ${
                    theme === "dark" ? "text-gray-200" : "text-light-text"
                  }`}
                >
                  {link.value}
                </p>
              </div>

              {/* Action */}
              <div className="shrink-0">
                {link.label === "Discord" ? (
                  copied === link.label ? (
                    <Check className="w-4 h-4 text-tokyo-teal" />
                  ) : (
                    <Copy
                      className={`w-4 h-4 transition-colors cursor-pointer ${
                        theme === "dark" ? "text-gray-500 hover:text-white" : "text-gray-400 hover:text-gray-600"
                      }`}
                    />
                  )
                ) : (
                  link.url && (
                    <ExternalLink
                      className={`w-4 h-4 transition-colors ${
                        theme === "dark" ? "text-gray-500 group-hover:text-tokyo-blue" : "text-gray-400 group-hover:text-indigo-500"
                      }`}
                    />
                  )
                )}
              </div>

              {link.url && (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`Visit ${link.label}`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`mt-12 p-8 rounded-2xl ${
            theme === "dark"
              ? "bg-midnight-800/40 border border-midnight-600/20"
              : "bg-white border border-gray-100 shadow-sm"
          }`}
        >
          <h3 className={`text-lg font-semibold mb-6 font-mono ${theme === "dark" ? "text-white" : "text-light-text"}`}>
            <span className="text-tokyo-blue">$</span> quick_message
          </h3>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Hook up to your form handler / email service
              const form = e.currentTarget;
              const formData = new FormData(form);
              console.log("Message:", Object.fromEntries(formData));
              form.reset();
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Name"
                className={`w-full px-4 py-3 rounded-xl text-sm transition-colors ${
                  theme === "dark"
                    ? "bg-midnight-700/50 border border-midnight-600/30 text-white placeholder:text-gray-500 focus:border-tokyo-blue/50"
                    : "bg-gray-50 border border-gray-200 text-light-text placeholder:text-gray-400 focus:border-indigo-300"
                } focus:outline-none focus:ring-1 focus:ring-tokyo-blue/20`}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-xl text-sm transition-colors ${
                  theme === "dark"
                    ? "bg-midnight-700/50 border border-midnight-600/30 text-white placeholder:text-gray-500 focus:border-tokyo-blue/50"
                    : "bg-gray-50 border border-gray-200 text-light-text placeholder:text-gray-400 focus:border-indigo-300"
                } focus:outline-none focus:ring-1 focus:ring-tokyo-blue/20`}
              />
            </div>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Your message..."
              className={`w-full px-4 py-3 rounded-xl text-sm resize-none transition-colors ${
                theme === "dark"
                  ? "bg-midnight-700/50 border border-midnight-600/30 text-white placeholder:text-gray-500 focus:border-tokyo-blue/50"
                  : "bg-gray-50 border border-gray-200 text-light-text placeholder:text-gray-400 focus:border-indigo-300"
              } focus:outline-none focus:ring-1 focus:ring-tokyo-blue/20`}
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-tokyo-blue/90 to-tokyo-purple/90 hover:from-tokyo-blue hover:to-tokyo-purple text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-tokyo-blue/20 hover:shadow-tokyo-blue/40 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
