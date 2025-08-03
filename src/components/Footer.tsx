import React from 'react';
import { Heart, Code, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              Sherherbano <span className="text-yellow-400">Faisal</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & Educator passionate about creating amazing web experiences 
              and empowering the next generation of developers.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Code size={16} className="text-yellow-400" />
              <span>SMIT Graduate</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Testimonials', 'Certificates', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code size={16} className="text-yellow-400" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={16} className="text-yellow-400" />
                <span>Web Development Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code size={16} className="text-yellow-400" />
                <span>React.js Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={16} className="text-yellow-400" />
                <span>Code Mentoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-center md:text-left">
            <p>© 2025 Sherherbano Faisal. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>and</span>
            <Code className="text-yellow-400" size={16} />
            <span>in Pakistan</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Turning ideas into digital reality • Empowering minds through education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;