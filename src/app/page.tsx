"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { DiscordBotsSection } from "@/components/discord";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useTheme } from "@/app/theme-provider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-midnight-900 text-white"
          : "bg-light-bg text-light-text"
      }`}
    >
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <DiscordBotsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
