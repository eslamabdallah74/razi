import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import img1 from '../assets/images/sponsors/1.jpeg'
import img2 from '../assets/images/sponsors/2.jpeg'
import img3 from '../assets/images/sponsors/3.jpeg'
import img4 from '../assets/images/sponsors/4.jpeg'
import img5 from '../assets/images/sponsors/5.jpeg'
import img6 from '../assets/images/sponsors/6.jpeg'

const sponsorImages = [img1, img2, img3, img4, img5, img6]

const Sponsors = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const [isHovered, setIsHovered] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('sponsors-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section 
      id="sponsors-section"
      className={`bg-gradient-to-b from-white to-gray-50 py-16 px-4 overflow-hidden ${
        isArabic ? 'rtl' : 'ltr'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-razi-blue ${
            isArabic ? 'font-arabic' : ''
          }`}
          initial={{ scale: 0.9 }}
          animate={inView ? { scale: 1 } : { scale: 0.9 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: 'spring',
            stiffness: 200 
          }}
        >
          {t('sponsors.title')}
        </motion.h2>

        <div 
          className="relative w-full overflow-hidden rounded-xl shadow-lg py-8 bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`flex w-max gap-16 px-8 ${
              isHovered ? 'animate-none' : 'animate-marquee'
            }`}
            style={{
              animationDuration: '30s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {[...sponsorImages, ...sponsorImages].map((img, idx) => (
              <motion.div
                key={`sponsor-${idx}`}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center justify-center"
              >
                <motion.img
                  src={img}
                  alt={`Sponsor ${(idx % sponsorImages.length) + 1}`}
                  className="h-40 md:h-40 w-auto object-contain filter hover:drop-shadow-xl transition-all duration-300"
                  draggable={false}
                  loading="lazy"
                  whileHover={{ 
                    rotate: [0, -2, 2, -2, 0],
                    transition: { duration: 0.5 }
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Sponsors
