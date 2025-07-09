import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Vignan University',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.45',
      icon: '🎓',
      color: 'from-blue-500 to-purple-600'
    },
    {
      degree: '12th Grade (Science)',
      institution: 'DAV Public School',
      duration: '2022',
      grade: '86%',
      icon: '📚',
      color: 'from-green-500 to-teal-600'
    },
    {
      degree: '10th Grade',
      institution: 'DAV Public School',
      duration: '2020',
      grade: '94.5%',
      icon: '📖',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{edu.icon}</span>
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h3>

                <p className="text-gray-300 mb-4 font-medium">
                  {edu.institution}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">{edu.grade}</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-400">Academic Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;