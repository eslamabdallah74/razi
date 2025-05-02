import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<any[]>([])

  const language = i18n.language

  useEffect(() => {
    const loadTestimonials = async () => {
      const testimonialsData = await import(`../i18n/locales/${language}.json`)
      setTestimonials(testimonialsData.default?.testimonials || [])
    }

    loadTestimonials()
  }, [language])

  const currentTestimonials = testimonials

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
  }

  const god = [
    {
      id: "asrar-al-jamal-al-arabi",
      path: 'src/assets/images/newspapaer/asrar-elgama-eltby.jpeg',
      url: 'https://algmal.net/?p=18681/'
    },
    {
      id: "kalimatna",
      path: 'src/assets/images/newspapaer/klimtina.jpeg',
      url: 'https://www.instagram.com/p/DHQpL1GKh-3/?igsh=aHR6dzNnanZ5ZmVj'
    },
    {
      id: "masr-al-balad",
      path: 'src/assets/images/newspapaer/msr-elbald.jpg',
      url: 'https://misralbalad.com/%d8%b1%d8%a7%d8%b2%d9%8a-%d8%ad%d9%85%d9%84%d8%a9-%d8%a8%d8%a5%d8%b9%d9%84%d8%a7%d9%85-%d8%a7%d9%84%d8%b4%d8%b1%d9%88%d9%82-%d9%84%d9%86%d8%b4%d8%b1-%d8%ab%d9%82%d8%a7%d9%81%d8%a9-%d8%a7%d9%84/'
    },
    {
      id: "awaan-misr",
      path: 'src/assets/images/newspapaer/awan-msr.jpeg',
      url: 'https://www.awanmasr.com/?p=1804358'
    },
    {
      id: "sada-al-umma",
      path: 'src/assets/images/newspapaer/sady-eloma.jpeg',
      url: 'https://www.sadaelomma.com/2025/04/blog-post_784.html?fbclid=IwZXh0bgNhZW0CMTEAAR7F_kY7bv7ZZiz71uA45uCJhUR2lNH31svoXOXggqWtzXoH_pLS_hq9maBbKw_aem_HO8mJWrA6NuHppg4cq8Mqg&m=1'
    },
    {
      id: "al-jumhuriyya-al-jadida",
      path: 'src/assets/images/newspapaer/new-gomhorea.jpeg',
      url: 'https://newrepublic24.com/news/%d8%b1%d8%a7%d8%b2%d9%8a-%d8%ad%d9%85%d9%84%d8%a9-%d8%a8%d8%a5%d8%b9%d9%84%d8%a7%d9%85-%d8%a7%d9%84%d8%b4%d8%b1%d9%88%d9%82-%d9%84%d9%86%d8%b4%d8%b1-%d8%ab%d9%82%d8%a7%d9%81%d9%87-%d8%a7%d9%84/'
    }
  ]

  const getEntryById = (id: string) => {
    return god.find(entry => entry.id === id)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-razi-blue">
            {language === 'ar' ? 'تم ذكرنا في الصحافة' : 'Featured In the Press'}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تم تسليط الضوء على جهودنا في الصحافة المرموقة. إليك بعض من آراء الصحف حول عملنا.'
              : 'Our efforts have been highlighted in prominent newspapers. Here are some of the reviews from the press about our work.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-razi-red opacity-20">
              <Quote size={80} />
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <a
                  href={getEntryById(currentTestimonials[activeIndex]?.id)?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-razi-red flex-shrink-0 flex items-center justify-center bg-white"
                >
                  <img
                    src={getEntryById(currentTestimonials[activeIndex]?.id)?.path}
                    alt={currentTestimonials[activeIndex]?.author}
                    className="w-full h-full object-cover"
                  />
                </a>

                <div className={language === 'ar' ? 'text-right' : ''}>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    "{currentTestimonials[activeIndex]?.quote}"
                  </p>
                  <a
                    href={getEntryById(currentTestimonials[activeIndex]?.id)?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-razi-blue block"
                  >
                    {currentTestimonials[activeIndex]?.author}
                  </a>
                  <p className="text-gray-600">
                    {currentTestimonials[activeIndex]?.position}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                {language === 'ar' ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveIndex((activeIndex + 1) % currentTestimonials.length)
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-razi-red hover:text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>

                    <div className="flex gap-2">
                      {currentTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-razi-red scale-125' : 'bg-gray-300'
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setActiveIndex(
                          (activeIndex - 1 + currentTestimonials.length) % currentTestimonials.length
                        )
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-razi-red hover:text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setActiveIndex(
                          (activeIndex - 1 + currentTestimonials.length) % currentTestimonials.length
                        )
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-razi-red hover:text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <div className="flex gap-2">
                      {currentTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-razi-red scale-125' : 'bg-gray-300'
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setActiveIndex((activeIndex + 1) % currentTestimonials.length)
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-razi-red hover:text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
