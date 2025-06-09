"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import HeroSection from "./pages/hero";
import AboutmeSection from "./pages/aboutme";
import ProjectSection from "./pages/projects";
import SkillSection from "./pages/skills";
import ContactSection from "./pages/contact";
import Topbar from "@/components/topbar";
import FooterSection from "./pages/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <Topbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutmeSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Skills Section */}
      <SkillSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
