import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock className="text-yellow-400" size={24} />, number: '2+', label: 'Years Teaching' },
    { icon: <Users className="text-yellow-400" size={24} />, number: '500+', label: 'Students Taught' },
    { icon: <Award className="text-yellow-400" size={24} />, number: '50+', label: 'Projects Completed' },
    { icon: <Star className="text-yellow-400" size={24} />, number: '4.9', label: 'Rating' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Sherherbano Faisal, a passionate Full Stack Developer with over 2 years of teaching experience. 
              I completed my Full Stack Development course from SMIT (Saylani Mass IT Training), where I gained 
              comprehensive knowledge in modern web technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey combines the technical expertise of a developer with the communication skills of an educator. 
              I believe in creating not just functional applications, but also in sharing knowledge and empowering 
              others to succeed in the tech industry.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether I'm building scalable web applications or teaching the next generation of developers, 
              I approach every challenge with dedication, creativity, and a commitment to excellence.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-white mb-4">My Mission</h3>
              <p className="text-gray-300">
                To bridge the gap between cutting-edge technology and accessible education, creating 
                innovative solutions while nurturing future tech leaders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black p-6 rounded-xl text-center hover:bg-gray-800 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;