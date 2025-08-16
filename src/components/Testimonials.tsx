import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      
    content: `Assalam o Alaikum, miss 😊 We're doing great, thanks for asking.
Overall our experience in SMIT has been fantastic so far. Your classes have been engaging and we appreciate the effort you put into making the material interesting and easy to understand.
Thank you again for all your hard work, and we look forward to the rest of the semester!`,
 
      rating: 5,
    },
    {
      // name: 'Fatima Khan',
      // role: 'Full Stack Developer',
content: ` salam mam,
First of all, you are a very good teacher. You teach us like a friend and the SMIT experience is going very well. Insha Allah, very soon we will become a successful web developer if you are with us because you are a very good teacher. Your praise cannot be expressed in words. Your teaching method is very good. ❤️

*Urooj Faiz Muhammad*`,      rating: 5,
      // image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      // name: 'Usman Ali',
      // role: 'Backend Developer',
content: `Peace be upon you dear teacher, I am very happy with your teaching. I remember everything you taught me and we will continue to grow in the same way. May Allah bless you always, Ameen. 😊`,
      rating: 5,
      // image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      // name: 'Aisha Malik',
      // role: 'React Developer',
content: `A teacher is someone who can either make or destroy the future of any student in the best possible way. We are all very lucky to have a teacher who wants to make her every student a champion. جزاک اللہ`,
      rating: 5,
      // image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      // name: 'Muhammad Bilal',
      // role: 'MERN Stack Developer',
content: `Assalam o Alaikum, miss 😊 We're doing great, thanks for asking. Overall, our experience in SMIT has been fantastic so far. Your classes have been engaging, and we appreciate the effort you put into making the material interesting and easy to understand.
Thank you again for all your hard work, and we look forward to the rest of the semester! 🙏`,
      rating: 5,
      // image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      // name: 'Zara Ahmed',
      // role: 'Frontend Developer',
content: `salam Mam. My experience at SMIT is all amazing. There are very few teachers like you who explain everything in detail. I have spent three years in university, but I haven't experienced the kind of teaching like you have provided.`,
      rating: 5,
      // image: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
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
            <div key={index} >
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