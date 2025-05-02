import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImage from '../assets/images/home.jpeg';

const AboutUs = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6">
            {t('about.title')}
          </h2>
          <motion.div 
            className="w-20 h-1 bg-razi-red mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-40 h-40 border-4 border-razi-red opacity-20 z-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
              <motion.div 
                className="relative z-10 bg-white p-10 rounded-lg shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-razi-blue mb-4">
                  {t('about.whoWeAre')}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('about.description')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.mission')}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute -top-6 -right-6 w-40 h-40 border-4 border-razi-blue opacity-20 z-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
              <motion.div 
                className="relative z-10 overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={openModal}
              >
                <img
                  src={backgroundImage}
                  alt="Razi Healthcare"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{t('about.values.innovation.title')}</h3>
                  <p className="text-sm">{t('about.values.innovation.description')}</p>
                </div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-transparent rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img
                src={backgroundImage}
                alt="Razi Healthcare"
                className="w-full max-h-[80vh] object-contain"
              />

              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-3">{t('about.values.innovation.title')}</h2>
                <p className="text-lg mb-6">{t('about.values.innovation.description')}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutUs;