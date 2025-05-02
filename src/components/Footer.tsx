import React from 'react'
import { Instagram, Facebook } from 'lucide-react'
import { SiTiktok } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo2.jpeg'

const socialLinks = [
  {
    icon: <Instagram size={16} />,
    href: 'https://www.instagram.com/razi_campaign?igsh=MXBpYXd5cXFiZzdmZw%3D%3D&utm_source=qr',
  },
  {
    icon: <Facebook size={16} />,
    href: 'https://www.facebook.com/profile.php?id=61568272869304&mibextid=wwXIfr',
  },
  {
    icon: <SiTiktok size={16} />,
    href: 'https://www.tiktok.com/@razi_campaign?_t=ZS-8vzgoD2SMuA&_r=1',
  },
]

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <div className="flex items-center mb-6 gap-2">
              <img src={logo} alt="Razi Logo" className="w-10 h-10 rounded-full mr-3 object-cover" />
              <div>
                <h3 className="text-2xl font-bold font-arabic">{t('footer.logo')}</h3>
                <p className="text-xs font-arabic text-razi-red">{t('footer.slogan')}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{t('footer.description')}</p>
            <div className={`flex ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              {socialLinks.map(({ icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-razi-red transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <h3 className="text-xl font-bold mb-6 relative pl-4 border-l-4 border-razi-red">{t('footer.subscribeTitle')}</h3>
            <p className="text-gray-500 text-sm italic">{t('footer.quote')}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
