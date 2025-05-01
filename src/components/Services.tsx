import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeartPulse, Sun, AlertCircle, BookOpen, Users } from 'lucide-react'

const Services: React.FC = () => {
  const { t } = useTranslation()

  const knowMoreAboutUs = () => {
    window.open('https://www.facebook.com/share/16RwbcYN4V/', '_blank')
  }

  const services = [
    {
      icon: <HeartPulse className="text-white" size={32} />,
      title: t('services.list.firstAid.title'),
      description: t('services.list.firstAid.description'),
      bgClass: 'bg-razi-red'
    },
    {
      icon: <Sun className="text-white" size={32} />,
      title: t('services.list.heat.title'),
      description: t('services.list.heat.description'),
      bgClass: 'bg-razi-blue'
    },
    {
      icon: <AlertCircle className="text-white" size={32} />,
      title: t('services.list.choking.title'),
      description: t('services.list.choking.description'),
      bgClass: 'bg-razi-red'
    },
    {
      icon: <BookOpen className="text-white" size={32} />,
      title: t('services.list.resources.title'),
      description: t('services.list.resources.description'),
      bgClass: 'bg-razi-blue'
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: t('services.list.events.title'),
      description: t('services.list.events.description'),
      bgClass: 'bg-razi-red'
    },
    {
      icon: <HeartPulse className="text-white" size={32} />,
      title: t('services.list.awareness.title'),
      description: t('services.list.awareness.description'),
      bgClass: 'bg-razi-blue'
    }
    
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">{t('services.title')}</h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            {t('services.summary')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <button onClick={knowMoreAboutUs} className="bg-razi-blue text-white px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all animate-on-scroll">
            {t('services.button')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services