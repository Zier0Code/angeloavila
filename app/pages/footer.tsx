import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const FooterSection = () => {
  return (
    <>
      <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                Angelo Avila
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Full-stack developer creating beautiful web experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-300">
                Support
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Need help or have questions? Reach out to me anytime!
                </p>

                {/* <Link
                  href="#"
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link> */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4 transition-colors duration-300">
                Contact
              </h4>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <Mail className="w-4 h-4 inline mr-2" />
                  avila.april.angelo@gmail.com
                </p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <Github className="w-4 h-4 inline mr-2" />
                  github.com/Zier0Code
                </p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <Linkedin className="w-4 h-4 inline mr-2" />
                  linkedin.com/in/aprilangeloavila
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-slate-800 mt-8 pt-8 text-center transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
              © {new Date().getFullYear()} Angelo Avila. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
