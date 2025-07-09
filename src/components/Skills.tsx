import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', color: 'text-blue-400' },
        { name: 'Java(Basic)', color: 'text-red-400' },
       
        { name: 'JavaScript', color: 'text-yellow-300' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', color: 'text-blue-400' },
        { name: 'HTML5', color: 'text-orange-400' },
        { name: 'CSS3', color: 'text-blue-500' },
        { name: 'Tailwind', color: 'text-cyan-400' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', color: 'text-green-400' },
        { name: 'Express', color: 'text-gray-400' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', color: 'text-green-500' },
        { name: 'MySQL', color: 'text-blue-600' }
      ]
    },
    {
      title: 'Cloud/DevOps',
      skills: [
        { name: 'AWS', color: 'text-orange-500' },
        { name: 'Git', color: 'text-red-500' },
       
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center mb-3 ${skill.color}`}>
                      <span className="text-2xl font-bold">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;