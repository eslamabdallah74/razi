import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Razi's Emergency Response Network has transformed how our hospital handles critical cases. Response times have decreased dramatically, and we've seen a measurable improvement in patient outcomes.",
      author: "Dr. Sarah Al-Mahmoud",
      position: "Chief of Emergency Medicine, Central Hospital",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The VitalTrack system provided by Razi has been a game-changer for our elderly patients. We can now monitor their health remotely and intervene before minor issues become emergencies.",
      author: "Fatima Khalid",
      position: "Director, ElderCare Facilities",
      image: "https://images.pexels.com/photos/7584690/pexels-photo-7584690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Implementing Razi's MedSync AI platform has given our medical team unprecedented insights into patient data. We're now able to predict and prevent emergencies rather than just responding to them.",
      author: "Dr. Ahmad Hassan",
      position: "Medical Director, Innovation Health Network",
      image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
        </div>
        
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-razi-red opacity-20">
              <Quote size={80} />
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-razi-red flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-razi-blue">{testimonials[activeIndex].author}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-razi-red hover:text-white flex items-center justify-center transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeIndex ? 'bg-razi-red scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-razi-red hover:text-white flex items-center justify-center transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;