import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Emergency Response Network",
      description: "A revolutionary system connecting ambulances, hospitals, and emergency responders through a unified platform, reducing response times by 47% in pilot regions.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Healthcare", "Emergency", "Technology"]
    },
    {
      title: "VitalTrack Wearable System",
      description: "Award-winning wearable technology that monitors critical vital signs and automatically alerts emergency services when life-threatening changes are detected.",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Wearable", "Healthcare", "Innovation"]
    },
    {
      title: "MedSync AI Platform",
      description: "An artificial intelligence platform that analyzes patient data in real-time to predict potential emergencies before they occur, now implemented in over 200 hospitals worldwide.",
      image: "https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AI", "Predictive Healthcare", "Technology"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">Our Work</h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            We're proud of the innovations we've developed and the lives they've helped save. 
            Here are some of our flagship projects that showcase our commitment to timely intervention.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Thumbnails */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 animate-on-scroll">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`cursor-pointer transition-all duration-300 ${
                  activeProject === index 
                    ? 'border-l-4 border-razi-red pl-4 bg-gray-50' 
                    : 'border-l-4 border-transparent pl-4 hover:border-razi-red hover:bg-gray-50'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <h3 className={`text-xl font-bold mb-2 ${
                  activeProject === index ? 'text-razi-red' : 'text-razi-blue'
                }`}>
                  {project.title}
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs px-2 py-1 rounded ${
                        activeProject === index 
                          ? 'bg-razi-red text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Featured Project */}
          <div className="w-full lg:w-2/3 animate-on-scroll">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{projects[activeProject].title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {projects[activeProject].description}
                </p>
                <button className="bg-razi-red text-white px-6 py-2 rounded-full shadow hover:bg-opacity-90 transition-all">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;