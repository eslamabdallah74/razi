import React from 'react'
import { useTranslation } from 'react-i18next'
import backgroundImage from '../assets/images/bg.png'

const AboutUs: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-razi-red opacity-20 z-0"></div>
              <div className="relative z-10 bg-white p-10 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-razi-blue mb-4">
                  {t('about.whoWeAre')}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('about.description')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.mission')}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 animate-on-scroll">
            <div className="relative group">
              <div className="absolute -top-6 -right-6 w-40 h-40 border-4 border-razi-blue opacity-20 z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
