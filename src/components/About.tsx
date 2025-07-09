import React from 'react';
import { Code, Cloud, Brain, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated Computer Science student with a passion for creating innovative solutions 
              through technology. My journey in programming started with curiosity and has evolved into 
              a deep commitment to mastering full-stack development.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science, I'm actively expanding my skillset 
              in modern web technologies, cloud computing, and algorithmic problem-solving. I believe 
              in continuous learning and staying updated with the latest industry trends.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                MERN Stack
              </span>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm">
                Cloud Computing
              </span>
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                DSA
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <Code className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Full Stack</h3>
              <p className="text-gray-400 text-sm">Building end-to-end web applications</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <Cloud className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Tech</h3>
              <p className="text-gray-400 text-sm">AWS practices</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <Brain className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-400 text-sm">Data structures and algorithms</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
              <Target className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Learning</h3>
              <p className="text-gray-400 text-sm">Continuously expanding knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;