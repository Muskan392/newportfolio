import React from 'react';
import { Trophy, Star, Code, Award, Mic, BookOpen } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coding Profiles */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">🧑‍💻 Coding Profiles</h3>
            </div>

            <div className="space-y-4">
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/keshrimuskan997/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition">
                  <div>
                    <p className="text-white font-medium">LeetCode</p>
                    <p className="text-gray-400 text-sm">Enhancing Problem Solving Skills</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </a>

              {/* GeeksforGeeks */}
              <a
                href="https://www.geeksforgeeks.org/user/keshrimuskan669/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition">
                  <div>
                    <p className="text-white font-medium">GeeksforGeeks</p>
                    <p className="text-gray-400 text-sm">Consistent Profile</p>
                  </div>
                  <Trophy className="h-6 w-6 text-green-400" />
                </div>
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">📚 Certifications</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <p className="text-white font-medium">AWS Cloud Practitioner</p>
                <p className="text-gray-400 text-sm">CLF-C02 - In Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <p className="text-white font-medium">Full Stack Development</p>
                <p className="text-gray-400 text-sm">MERN Stack - Self-learned</p>
                <Award className="h-5 w-5 text-green-400 mt-2" />
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <p className="text-white font-medium">Data Structures & Algorithms</p>
                <p className="text-gray-400 text-sm">NeetCode 250, GFG, LC</p>
                <Code className="h-5 w-5 text-blue-400 mt-2" />
              </div>
            </div>
          </div>

          {/* Competitions */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Mic className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-semibold text-white">🎤 Competitions</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <p className="text-white font-medium">Inter-college Hackathons</p>
                <p className="text-gray-400 text-sm">Multiple Participations</p>
                <div className="flex items-center gap-2 mt-2">
                  <Trophy className="h-4 w-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm">Active Participant</span>
                </div>
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <p className="text-white font-medium">Event Anchoring</p>
                <p className="text-gray-400 text-sm">SLG Tech & Cultural Fests</p>
                <div className="flex items-center gap-2 mt-2">
                  <Mic className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400 text-sm">Host & Presenter</span>
                </div>
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg">
                <p className="text-white font-medium">Technical Workshops</p>
                <p className="text-gray-400 text-sm">Regular Attendee</p>
                <BookOpen className="h-5 w-5 text-purple-400 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
