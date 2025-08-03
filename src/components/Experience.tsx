import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer & Lead Instructor',
      company: 'Freelance & Teaching',
      period: '2019 - Present',
      location: 'Remote / On-site',
      description: 'Leading full-stack development projects while teaching and mentoring aspiring developers.',
      achievements: [
        'Taught 500+ students modern web development technologies',
        'Developed 50+ full-stack applications using MERN stack',
        'Created comprehensive curriculum for full-stack development',
        'Maintained 4.9/5 student satisfaction rating'
      ]
    },
    {
      role: 'Full Stack Development Graduate',
      company: 'SMIT (Saylani Mass IT Training)',
      period: '2018 - 2019',
      location: 'Karachi, Pakistan',
      description: 'Completed intensive full-stack development program covering modern web technologies.',
      achievements: [
        'Mastered MERN stack development',
        'Built multiple real-world projects',
        'Earned certification in full-stack development',
        'Developed strong foundation in software engineering principles'
      ]
    },
    {
      role: 'Teaching Assistant & Mentor',
      company: 'Various Coding Bootcamps',
      period: '2019 - 2023',
      location: 'Multiple Locations',
      description: 'Assisted in teaching web development concepts and mentored students.',
      achievements: [
        'Helped students debug complex coding challenges',
        'Conducted code reviews and provided constructive feedback',
        'Organized study groups and coding workshops',
        'Improved student pass rates by 30%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-yellow-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A journey combining technical expertise with educational excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-yellow-400 hidden md:block"></div>
              )}
              
              <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-yellow-400 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <h4 className="text-xl text-yellow-400 mb-2">{exp.company}</h4>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <Award className="text-yellow-400 mr-2" size={18} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;