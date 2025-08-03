import React from 'react';
import { ChevronDown, Code, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sherherbano <span className="text-yellow-400">Faisal</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
              <Code className="text-yellow-400" size={20} />
              <span className="text-gray-300">Web Developer</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
              <BookOpen className="text-yellow-400" size={20} />
              <span className="text-gray-300">Educator</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Full Stack Developer with 2+ years of teaching experience.<br />
            SMIT Graduate passionate about creating amazing web experiences<br />
            and empowering the next generation of developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#about"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;