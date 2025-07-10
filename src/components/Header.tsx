
import { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { name: language === 'ar' ? 'الرئيسية' : 'Home', href: '#home' },
    { name: language === 'ar' ? 'الخدمات' : 'Services', href: '#services' },
    { name: language === 'ar' ? 'من أنا؟' : 'Who Am I?', href: '#who-am-i' },
    { name: language === 'ar' ? 'الأسئلة' : 'Questions', href: '#faq' },
    { name: language === 'ar' ? 'تواصل معي' : 'Contact Me', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 shadow-sm animate-slide-in-right transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with transparent background */}
          <div className="flex items-center animate-fade-in">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/0570a851-dbe4-4e59-8c4f-921d0450ced5.png" 
                alt="Logo" 
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-tajwal font-medium transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#159bc7] after:to-[#4968aa] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4 animate-fade-in">
            {/* Dark Mode Toggle */}
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-blue-600"
              />
              <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>

            {/* Language Toggle */}
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
              className="md:hidden hover:scale-110 transition-transform duration-200 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 animate-fade-in transition-colors duration-300">
            <nav className="py-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-tajwal font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
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
