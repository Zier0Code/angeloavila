import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      title: "Blogify",
      description:
        "A simple full-stack web application for creating Blogs with React, Vite.js , TailwindCSS , and Supabase,",
      image: "/images/project1.PNG",
      tech: ["React", "Node.js", "Supabase", "TailwindCSS", "Vite.js"],
      github: "https://github.com/Zier0Code/simple-web-blog",
      live: "https://blogifyv0.vercel.app",
    },
    {
      title: "Calculator FastAPI",
      description:
        "Professional Calculator API built with FastAPI Updated for Pydantic V2 compatibility and pytest testing",
      image: "/images/project2.PNG",
      tech: ["Python", "FastAPI", "pytests", "Flask", "uvicorn server"],
      github: "https://github.com/Zier0Code/fastapi-calculator",
      // live: "#",
    },
    {
      title: "ORCA: Intent-Based Chatbot",
      description:
        "ORCA is an intent-base chatbot that to can be used for various purposes, such as customer support, information retrieval, and more.",
      image: "/images/project3.PNG",
      tech: ["Python", "ReactJS", "TailwindCss", "Flask", "Laravel"],
      github: "https://github.com/Zier0Code/orca-chatbot-thesis-2",
      live: "https://drive.google.com/file/d/1vnmLlLfgqJkJBD3k-L4LStiGhckBcEft/view",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-200/20 dark:hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/50"
              >
                <CardHeader className="p-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-300 dark:border-blue-500/50 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    {project?.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
