import React from 'react';
import { Heart, Shield, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">About Razi</h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-razi-red opacity-20 z-0"></div>
              <div className="relative z-10 bg-gray-100 p-10 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-razi-blue mb-4">Who We Are</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At Razi, we are pioneers in healthcare innovation, dedicated to saving lives through timely intervention. Founded on the principle that every moment counts in critical care, our team combines medical expertise with cutting-edge technology to develop solutions that bridge gaps in emergency response.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is embodied in our slogan "قبل ما يفوت الأوان" (Before it's too late) – a constant reminder of our commitment to providing tools and services that help medical professionals act decisively in life-saving situations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-razi-red">
                <div className="w-12 h-12 bg-razi-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-razi-red" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-razi-blue mb-2">Compassion</h4>
                <p className="text-gray-600">Every solution we create centers on improving patient outcomes with genuine care.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-razi-blue">
                <div className="w-12 h-12 bg-razi-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-razi-blue" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-razi-blue mb-2">Timeliness</h4>
                <p className="text-gray-600">We understand that in healthcare, time is of the essence and every second counts.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-razi-blue md:translate-y-4">
                <div className="w-12 h-12 bg-razi-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-razi-blue" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-razi-blue mb-2">Reliability</h4>
                <p className="text-gray-600">Our solutions are rigorously tested to ensure they perform flawlessly when needed most.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-razi-red md:translate-y-4">
                <div className="w-12 h-12 bg-razi-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-razi-red" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-razi-blue mb-2">Innovation</h4>
                <p className="text-gray-600">We continuously push boundaries to create life-saving technologies and methodologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;