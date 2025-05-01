import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and About */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-razi-red rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-arabic">رازي</h3>
                <p className="text-xs font-arabic text-razi-red">قبل ما يفوت الأوان</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Innovating healthcare solutions that save lives through timely intervention. Our commitment is to be there when every second counts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-razi-red transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-razi-red transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-razi-red transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-razi-red transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <h3 className="text-xl font-bold mb-6 relative pl-4 border-l-4 border-razi-red">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center">
                  <span className="w-2 h-2 bg-razi-red mr-2 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center">
                  <span className="w-2 h-2 bg-razi-red mr-2 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center">
                  <span className="w-2 h-2 bg-razi-red mr-2 rounded-full"></span>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center">
                  <span className="w-2 h-2 bg-razi-red mr-2 rounded-full"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center">
                  <span className="w-2 h-2 bg-razi-red mr-2 rounded-full"></span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white hover:pl-2 transition-all flex items-center">
                  <span className="w-2 h-2 bg-razi-red mr-2 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <h3 className="text-xl font-bold mb-6 relative pl-4 border-l-4 border-razi-red">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-razi-red mr-3 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">1234 Innovation Drive, Medical District, Amman, Jordan 11183</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-razi-red mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+962 6 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-razi-red mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@razi-health.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-razi-red mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">24/7 Emergency Support</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <h3 className="text-xl font-bold mb-6 relative pl-4 border-l-4 border-razi-red">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates on healthcare innovations and emergency response technologies.
            </p>
            <form>
              <div className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-razi-red"
                />
                <button 
                  type="submit" 
                  className="bg-razi-red text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm italic">
              "In healthcare, time is the most precious resource. Our mission is to help you use it wisely."
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Razi Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;