import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const StudentContributors = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [visibleCards, setVisibleCards] = useState(0)

  const students = [
    { name: 'أدهم ايمن', gender: 'male' },
    { name: 'يوسف وائل', gender: 'male' },
    { name: 'محمد فؤاد', gender: 'male' },
    { name: 'محمد حماده', gender: 'male' },
    { name: 'سيف إمام', gender: 'male' },
    { name: 'سيف طعيمة', gender: 'male' },
    { name: 'سيف محمد', gender: 'male' },
    { name: 'ملك احمد', gender: 'female' },
    { name: 'حبيبة احمد صالح', gender: 'female' },
    { name: 'رميساء مكي منير', gender: 'female' },
    { name: 'حنين معتز ممدوح', gender: 'female' },
    { name: 'مريم عصام', gender: 'female' },
    { name: 'نور حافظ', gender: 'female' },
    { name: 'شهد انور', gender: 'female' },
    { name: 'ندي رضا', gender: 'female' },
    { name: 'جنا الزيني', gender: 'female' },
    { name: 'جنى حامد', gender: 'female' },
    { name: 'لجين رفعت', gender: 'female' },
    { name: 'روفيدا هيثم', gender: 'female' },
    { name: 'سلمى سامح', gender: 'female' },
    { name: 'مريم عبد الرحمن', gender: 'female' },
    { name: 'ندي رفعت', gender: 'female' },
    { name: 'اروي ناصف', gender: 'female' },
    { name: 'مريم صلاح', gender: 'female' },
    { name: 'أميرة ايمن', gender: 'female' },
    { name: 'روان حسين', gender: 'female' },
    { name: 'مريم صلاح', gender: 'female' },
    { name: 'سهيلة أسامه', gender: 'female' },
    { name: 'شهد أحمد', gender: 'female' },
    { name: 'فاطمه جمال', gender: 'female' }
  ]

  const sortedStudents = [
    ...students.filter(s => s.gender === 'male'),
    ...students.filter(s => s.gender === 'female')
  ]

  useEffect(() => {
    const totalCards = sortedStudents.length
    const timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCards(prev => {
          const newValue = prev + 3
          if (newValue >= totalCards) {
            clearInterval(interval)
            return totalCards
          }
          return newValue
        })
      }, 150)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [sortedStudents.length])

  return (
    <div
      className={`min-h-screen py-16 px-4 md:px-8 ${isRTL ? 'rtl' : 'ltr'}`}
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 220, 220, 0.4) 0%, transparent 25%),
          radial-gradient(circle at 80% 50%, rgba(220, 230, 255, 0.4) 0%, transparent 30%),
          radial-gradient(circle at 40% 80%, rgba(255, 250, 220, 0.4) 0%, transparent 25%),
          linear-gradient(to bottom, #ffffff, #f5f7fa)
        `
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative text-center mb-16">
          <h2
            className={`inline-block text-3xl md:text-4xl font-bold bg-clip-text text-razi-blue ${
              isRTL ? 'font-arabic' : 'font-serif'
            }`}
          >
            {isRTL ? 'فريق المساهمين الطلاب' : 'Our Student Contributors'}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'نحن فخورون بجميع الطلاب الذين ساهموا بجهودهم وإبداعهم في هذا المشروع'
              : 'We are proud of all the students who contributed their efforts and creativity to this project'}
          </p>
          <div className="absolute w-full h-1 -bottom-2 left-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedStudents.slice(0, visibleCards).map((student, index) => (
            <div
              key={`student-${index}`}
              className={`relative overflow-hidden transition-all duration-500 transform translate-y-0 opacity-100 scale-100 ${
                student.gender === 'male'
                  ? 'bg-razi-red-dark text-white'
                  : 'bg-razi-blue border border-razi-blue text-white'
              } rounded-xl shadow-md hover:shadow-lg p-4 md:p-5 flex items-center justify-center`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <h3
                className={`text-lg md:text-xl font-medium text-center ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                {student.name}
              </h3>

              <div className="absolute top-0 left-0 w-16 h-16 -translate-x-8 -translate-y-8 bg-white opacity-10 rounded-full" />
              <div className="absolute bottom-0 right-0 w-12 h-12 translate-x-6 translate-y-6 bg-white opacity-10 rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-12 bg-gray-300"></div>
            <svg className="w-8 h-8 text-gray-400 mx-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 8v4M12 16h.01" fill="white" />
            </svg>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            {isRTL ? 'شكراً لكل المساهمين' : 'Thank you to all contributors'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentContributors
