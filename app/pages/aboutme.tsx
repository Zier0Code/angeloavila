import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const AboutmeSection = () => {
  return (
    <>
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                I am a recent Computer Science graduate from STI College with a
                strong foundation in software development, problem-solving, and
                systems analysis. During my internship at MFI, I worked as a
                System Developer, where I contributed to building and improving
                internal systems, gaining hands-on experience in real-world
                development environments.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
                I am passionate about continuous learning and always stay up to
                date with emerging technologies, especially in the fields of
                artificial intelligence, automation, and software engineering
                best practices. I enjoy exploring new tools, frameworks, and AI
                trends that push the boundaries of what{"\x27"}s possible with
                modern technology.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-500/30 transition-colors duration-300"
                >
                  Problem Solver
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30 transition-colors duration-300"
                >
                  Collaborative
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 dark:bg-cyan-500/20 text-indigo-800 dark:text-cyan-300 border-indigo-200 dark:border-cyan-500/30 transition-colors duration-300"
                >
                  Continuous Learner
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-500/30 transition-colors duration-300"
                >
                  Leader
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about1.png"
                alt="About me"
                width={400}
                height={400}
                className="rounded-lg shadow-xl shadow-gray-200/50 dark:shadow-purple-500/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutmeSection;
