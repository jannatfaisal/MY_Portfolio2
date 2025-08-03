import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      title: 'Full Stack Web Development',
      issuer: 'SMIT (Saylani Mass IT Training)',
      date: '2019',
      description: 'Comprehensive certification in MERN stack development, covering React, Node.js, MongoDB, and Express.js',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'React.js Advanced Certification',
      issuer: 'Meta',
      date: '2020',
      description: 'Advanced React concepts including hooks, context API, and performance optimization',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'MongoDB University',
      date: '2020',
      description: 'Backend development with Node.js, Express.js, and MongoDB database management',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Teaching Excellence Award',
      issuer: 'Student Community',
      date: '2021',
      description: 'Recognition for outstanding teaching performance and student satisfaction ratings',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      description: 'Cloud computing fundamentals and AWS services certification',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'JavaScript ES6+ Mastery',
      issuer: 'freeCodeCamp',
      date: '2019',
      description: 'Modern JavaScript features and advanced programming concepts',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-yellow-400">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in web development and education
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slideshow */}
          <div className="relative overflow-hidden rounded-xl bg-black">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="order-2 md:order-1 space-y-6">
                      <div className="flex items-center space-x-3">
                        <Award className="text-yellow-400" size={28} />
                        <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <span className="text-yellow-400 font-semibold">Issued by: </span>
                          <span className="text-gray-300">{cert.issuer}</span>
                        </div>
                        <div>
                          <span className="text-yellow-400 font-semibold">Date: </span>
                          <span className="text-gray-300">{cert.date}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                    
                    <div className="order-1 md:order-2">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Certificate Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-400">
              {currentSlide + 1} of {certificates.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;