import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0)
  const { t } = useTranslation()
  const projects = [
    {
      title: t('workshop.topics.food_poisoning.title'),
      description: t('workshop.topics.food_poisoning.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.fainting.title'),
      description: t('workshop.topics.fainting.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.choking.title'),
      description: t('workshop.topics.choking.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.wounds.title'),
      description: t('workshop.topics.wounds.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.dehydration.title'),
      description: t('workshop.topics.dehydration.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.burns.title'),
      description: t('workshop.topics.burns.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.hypoglycemia.title'),
      description: t('workshop.topics.hypoglycemia.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.blood_pressure.title'),
      description: t('workshop.topics.blood_pressure.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.nose_bleeding.title'),
      description: t('workshop.topics.nose_bleeding.description'),
      tags: ['Workshop']
    },
    {
      title: t('workshop.topics.muscle_tension.title'),
      description: t('workshop.topics.muscle_tension.description'),
      tags: ['Workshop']
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-razi-blue mb-6 animate-on-scroll">
            {t('workshop.title')}
          </h2>
          <div className="w-20 h-1 bg-razi-red mx-auto mb-8 animate-on-scroll"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            {t('workshop.description')}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex flex-wrap justify-center gap-4 mb-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-razi-red text-white border border-razi-red'
                    : 'bg-gray-200 text-razi-blue border border-transparent hover:bg-razi-red hover:text-white'
                } px-6 py-4 rounded-lg shadow-md text-center`}
                onClick={() => setActiveProject(index)}
              >
                <h3 className={`text-xl font-bold ${activeProject === index ? 'text-white' : 'text-razi-blue'}`}>
                  {project.title}
                </h3>
                <div className="flex gap-2 flex-wrap justify-center mt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded ${
                        activeProject === index
                          ? 'bg-white text-razi-red'
                          : 'bg-gray-300 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-2/3 animate-on-scroll">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-xl p-6">
              <h3 className="text-2xl font-bold text-razi-blue mb-4">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {projects[activeProject].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
