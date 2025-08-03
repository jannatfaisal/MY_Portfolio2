import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 98, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 88, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-600' },
        { name: 'Express.js', level: 92, color: 'bg-gray-700' },
        { name: 'MongoDB', level: 85, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-700' },
        { name: 'REST APIs', level: 93, color: 'bg-purple-500' },
        { name: 'GraphQL', level: 75, color: 'bg-pink-500' }
      ]
    },
    {
      title: 'Teaching & Others',
      skills: [
        { name: 'Curriculum Design', level: 95, color: 'bg-red-500' },
        { name: 'Student Mentoring', level: 98, color: 'bg-indigo-500' },
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-600' },
        { name: 'AWS', level: 78, color: 'bg-orange-600' },
        { name: 'Docker', level: 70, color: 'bg-blue-400' },
        { name: 'Agile/Scrum', level: 85, color: 'bg-yellow-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-yellow-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set spanning both technical development and educational expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-yellow-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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