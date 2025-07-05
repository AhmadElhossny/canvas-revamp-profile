
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
    { name: language === 'ar' ? 'الخدمات' : 'Services', href: '#services' },
    { name: language === 'ar' ? 'من أنا؟' : 'Who Am I?', href: '#about' },
    { name: language === 'ar' ? 'الأسئلة' : 'Questions', href: '#faq' },
    { name: language === 'ar' ? 'تواصل معي' : 'Contact Me', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm animate-slide-in-right">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with shadow for visibility */}
          <div className="flex items-center animate-fade-in">
            <a href="/" className="block">
              <div className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/0570a851-dbe4-4e59-8c4f-921d0450ced5.png" 
                  alt="Logo" 
                  className="h-8 w-auto drop-shadow-md"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-12">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-tajwal font-medium transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#159bc7] after:to-[#4968aa] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4 animate-fade-in">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#159bc7] to-[#4968aa] text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium font-tajwal">
                {language === 'ar' ? 'EN' : 'AR'}
              </span>
            </button>

            <button
              className="md:hidden hover:scale-110 transition-transform duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <nav className="py-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-gray-700 hover:text-blue-600 font-tajwal font-medium hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
