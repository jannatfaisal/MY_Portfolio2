import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Former Student - Now Frontend Developer',
      content: 'Sherherbano ma\'am is an exceptional teacher. Her way of explaining complex concepts in simple terms helped me land my first developer job. She is patient, knowledgeable, and truly cares about her students\' success.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Fatima Khan',
      role: 'Full Stack Developer',
      content: 'I learned React and Node.js from Sherherbano. Her teaching methodology is outstanding - she makes sure every student understands before moving forward. Thanks to her guidance, I\'m now working as a full-stack developer.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Usman Ali',
      role: 'Backend Developer',
      content: 'Best instructor I\'ve ever had! Sherherbano ma\'am not only taught me coding but also helped me develop problem-solving skills. Her real-world examples and hands-on approach made learning enjoyable and effective.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Aisha Malik',
      role: 'React Developer',
      content: 'Sherherbano ma\'am is not just a teacher, she\'s a mentor. She helped me transition from a complete beginner to a confident developer. Her support extended beyond classroom hours, and she was always available for doubts.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Muhammad Bilal',
      role: 'MERN Stack Developer',
      content: 'Outstanding teacher with deep knowledge of full-stack development. Sherherbano ma\'am\'s structured approach and practical projects prepared me well for the industry. I highly recommend her to anyone wanting to learn web development.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Zara Ahmed',
      role: 'Frontend Developer',
      content: 'Learning from Sherherbano was a game-changer for my career. Her patience, expertise, and dedication to student success is remarkable. She makes complex topics easy to understand and provides excellent career guidance.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student <span className="text-yellow-400">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What my students say about their learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Quote className="text-yellow-400 mr-2" size={24} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-900 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Overall Teaching Rating</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-4xl font-bold text-yellow-400">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
            </div>
            <p className="text-gray-400">Based on 500+ student reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;