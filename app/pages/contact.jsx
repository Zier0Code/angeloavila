import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl transition-colors duration-300"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 transition-colors duration-300">
            I'm always interested in new opportunities and exciting projects.
            Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:avila.april.angelo@gmail.com">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-300/30 dark:shadow-blue-500/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/Zier0Code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/aprilangeloavila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
