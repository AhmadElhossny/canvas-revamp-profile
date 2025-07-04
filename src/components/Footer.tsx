
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white animate-fade-in">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="flex items-center mb-6">
              <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/0570a851-dbe4-4e59-8c4f-921d0450ced5.png" 
                  alt="Logo" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 font-tajwal leading-relaxed max-w-md">
              {t('footerDescription')}
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 space-x-reverse">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:text-white transition-all duration-300 hover:scale-110 text-gray-300"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 font-tajwal text-white">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {[
                { name: t('home'), href: '#home' },
                { name: t('services'), href: '#services' },
                { name: t('about'), href: '#about' },
                { name: t('portfolio'), href: '#portfolio' },
                { name: t('faq'), href: '#faq' }
              ].map((item, index) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:bg-clip-text hover:text-transparent transition-all duration-200 font-tajwal hover:translate-x-2 inline-block font-medium"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 font-tajwal text-white">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '+962 79 123 4567' },
                { icon: Mail, text: 'info@consultant.com' },
                { icon: MapPin, text: 'عمّان، الأردن' }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-200">
                  <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-2 rounded-full">
                    <item.icon className="w-4 h-4 text-white flex-shrink-0" />
                  </div>
                  <span className="text-gray-300 font-tajwal">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 font-tajwal text-sm">
            © 2024 {t('allRightsReserved')}
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:bg-clip-text hover:text-transparent text-sm transition-all duration-200 font-tajwal">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="text-gray-400 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:bg-clip-text hover:text-transparent text-sm transition-all duration-200 font-tajwal">
              {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
