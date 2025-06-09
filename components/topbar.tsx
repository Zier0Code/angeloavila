import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const Topbar = () => {
  const navigations = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const nav of navigations) {
        const section = document.querySelector(nav.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = nav.href;
          }
        }
      }
      setCurrentSection(current);
      if (current && window.location.hash !== current) {
        history.replaceState(null, "", current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currentSection, setCurrentSection] = useState("");

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/80 border-b border-gray-200 dark:border-purple-500/20 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Angelo A.
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8 text-sm">
                {navigations.map((nav, idx) => {
                  const isActive = currentSection === nav.href;
                  return (
                    <a
                      key={idx}
                      href={nav.href}
                      className={`relative text-gray-700  ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "dark:text-gray-300"
                      } hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group`}
                    >
                      {nav.name}
                      <span
                        className={`
          absolute left-0 -bottom-1 h-0.5 w-full
          bg-blue-600 dark:bg-blue-400
          transition-transform duration-300
          ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-right"}
          group-hover:scale-x-100 group-hover:origin-left
        `}
                      />
                    </a>
                  );
                })}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
