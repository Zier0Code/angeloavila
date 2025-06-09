import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Palette } from "lucide-react";
import React from "react";

const SkillSection = () => {
  return (
    <>
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                icon: <Code className="w-8 h-8" />,
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vue.js",
                ],
                color: "blue",
              },
              {
                category: "Backend",
                icon: <Database className="w-8 h-8" />,
                skills: [
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Express",
                ],
                color: "purple",
              },
              {
                category: "Design",
                icon: <Palette className="w-8 h-8" />,
                skills: [
                  "Figma",
                  "Wireframing",
                  "UI/UX Design",
                  "Responsive Design",
                ],
                color: "indigo",
              },
              {
                category: "Tools",
                icon: <Globe className="w-8 h-8" />,
                skills: ["Git", "Laragon", "Postman API", "Vercel", "FastAPI"],
                color: "cyan",
              },
            ].map((skillGroup, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border-gray-200 dark:border-slate-700 text-center hover:shadow-lg hover:shadow-blue-200/20 dark:hover:shadow-blue-500/10 transition-all duration-300"
              >
                <CardHeader>
                  <div
                    className={`flex justify-center text-${skillGroup.color}-600 dark:text-${skillGroup.color}-400 mb-4 transition-colors duration-300`}
                  >
                    {skillGroup.icon}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`bg-${skillGroup.color}-100 dark:bg-${skillGroup.color}-500/20 text-${skillGroup.color}-800 dark:text-${skillGroup.color}-300 border-${skillGroup.color}-200 dark:border-${skillGroup.color}-500/30 m-1 transition-colors duration-300`}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default SkillSection;
