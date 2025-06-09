import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl transition-colors duration-300"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl transition-colors duration-300"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Image
              src="/images/me.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-blue-300 dark:border-blue-500/50 shadow-xl shadow-blue-200/50 dark:shadow-blue-500/20 transition-all duration-300"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400">
              Angelo Avila
            </span>
          </h1>
          <p className="text-xl md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Skilled full-stack developer passionate about coding and committed
            to delivering high-quality, reliable solutions that provide
            exceptional value to clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-300/30 dark:shadow-blue-500/25 transition-all duration-300"
              >
                View My Work
              </Button>
            </a>
            <a
              href="/pdf/Avila_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 bg-white/80 dark:bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
