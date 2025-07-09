import React from 'react';
import { Building, Calendar, Code, Cloud } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Microsoft Future Ready Talent Program
                    </h3>
                    <p className="text-xl text-blue-400 font-medium">AI Intern</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>1 Month</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Built and deployed AI/ML projects using Azure notebooks and cloud services. 
                  Gained hands-on experience with Microsoft Azure ecosystem, Python for AI development, 
                  and computer vision APIs. Collaborated with mentors and peers on innovative AI solutions.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm flex items-center gap-2">
                    <Cloud className="h-4 w-4" />
                    Azure
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Python
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    Computer Vision APIs
                  </span>
                  <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm">
                    Machine Learning
                  </span>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 bg-blue-500/5 rounded-r-lg p-4">
                  <p className="text-blue-300 font-medium">Key Achievement:</p>
                  <p className="text-gray-300 text-sm">
                    Successfully deployed AI-powered applications on Azure cloud platform with 
                    real-time data processing capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;