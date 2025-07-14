import React from 'react';
import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Hotel Booking Website',
      description: 'Full-stack hotel booking platform with admin dashboard for managing rooms, users, and bookings. Features authentication, search/sort functionality, and booking calendar.',
      role: 'Full-stack Developer',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Clerk Auth'],
      icon: '🏨',
      github: 'https://github.com/Muskan392/hotel-booking',
      live: 'https://hotel-booking-six-tawny.vercel.app/',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
  title: 'Movie Booking Website',
  description: 'Responsive movie booking platform featuring categorized listings for Anime, Movies, Series, and K-Dramas. Built with React and Tailwind CSS with smooth routing and UI components.',
  role: 'Frontend Developer',
  tech: ['React', 'Tailwind CSS', 'TypeScript', 'React Router', 'Vite'],
  icon: '🎬',
  github: 'https://github.com/Muskan392/Movie',
  live: 'https://movie-seven-indol.vercel.app/',
  gradient: 'from-red-500 to-yellow-500'
},

    {
  title: 'StudySync-ToDo App',
  description: 'Fully functional task manager with features like task creation, reminders, progress tracking, study group organization, and dark mode support.',
  role: 'Frontend Development',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'LocalStorage'],
  icon: '📝',
  github: 'https://github.com/Muskan392/todo-app',
  live: 'https://todo-app-black-six.vercel.app/',
  gradient: 'from-purple-500 to-indigo-600'
},
{
  title: 'MoodMate',
description: 'A personal mood tracking app with emoji-based mood selection, inspirational messages, and localStorage support to track emotional well-being. Includes dark theme, animated UI, and notes saving feature.',
role: 'Frontend Development',
tech: ['React', 'Tailwind CSS', 'Framer Motion', 'LocalStorage'],
icon: '🌈',
github: 'https://github.com/Muskan392/MoodMate',
live: 'https://mood-mate-mocha.vercel.app/',
gradient: 'from-pink-500 to-purple-600'
}

  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm text-blue-400 font-medium">Role: {project.role}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;