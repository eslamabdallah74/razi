import React from 'react';
import { HeartPulse, Stethoscope, Satellite, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <HeartPulse className="text-white" size={32} />,
      title: "Emergency Response Systems",
      description: "Cutting-edge technology that connects patients with emergency care providers faster than ever before, utilizing AI to prioritize and coordinate response efforts.",
      bgClass: "bg-razi-red"
    },
    {
      icon: <Stethoscope className="text-white" size={32} />,
      title: "Remote Patient Monitoring",
      description: "Advanced wearable devices and software solutions that allow healthcare providers to monitor vital signs and critical health metrics remotely in real-time.",
      bgClass: "bg-razi-blue"
    },
    {
      icon: <Satellite className="text-white" size={32} />,
      title: "Healthcare Data Analytics",
      description: "Sophisticated data analysis tools that transform medical information into actionable insights, helping medical professionals make faster, more informed decisions.",
      bgClass: "bg-razi-red"
    },
    {
      icon: <BookOpen className="text-white" size={32} />,
      title: "Medical Professional Training",
      description: "Immersive simulation-based training programs that prepare healthcare providers for high-pressure emergency situations through realistic scenarios.",
      bgClass: "bg-razi-blue"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">Our Services</h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            We provide innovative solutions to help healthcare professionals save lives and improve patient outcomes. Our services are designed with one goal in mind: to intervene before it's too late.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 animate-on-scroll"
            >
              <div className={`${service.bgClass} p-6 flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-razi-blue mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-razi-blue text-white px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all animate-on-scroll">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;