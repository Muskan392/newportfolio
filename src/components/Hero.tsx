import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import  mImage from '../assets/m.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Picture */}
       <img 
  src={mImage}
  alt="Muskan Keshri"
  width={160}
  height={160}
  loading="lazy"
  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-gray-700 object-cover"
/>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
         Muskan Keshri
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Aspiring Full Stack Developer | DSA Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about building innovative web applications and solving complex problems. 
          Currently mastering the MERN stack and exploring cloud technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work <ArrowRight className="h-5 w-5" />
          </button>
          
     <a href="/Resume.pdf" download>
  <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300">
    <Download className="h-5 w-5" />
    Download Resume
  </button>
</a>


        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Muskan392" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/muskan669/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a
  href="mailto:keshrimuskan997@gmail.com?subject=Hey%20There!"
 className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
>
  <Mail />
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
