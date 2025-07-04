
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Header
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من أنا',
    portfolio: 'الأعمال',
    contact: 'تواصل معي',
    faq: 'الأسئلة الشائعة',
    
    // Hero Section
    heroTitle: 'مستشار في التحول الرقمي',
    heroSubtitle: 'وإدارة الجودة المؤسسية والحوكمة',
    heroDescription: 'أقدم استشارات احترافية متخصصة في التحول الرقمي، وإدارة الجودة، وتطوير المنظومات الإدارية. لمساعدتك على تحسين الأداء المؤسسي، وبناء استراتيجيات رقمية فعالة، وتحقيق التميز المستدام.',
    learnMore: 'اعرف المزيد',
    contactNow: 'تواصل الآن',
    
    // Services
    servicesTitle: 'خدماتي المتخصصة',
    servicesSubtitle: 'أقدم مجموعة شاملة من الخدمات الاستشارية المتخصصة في التحول الرقمي والتطوير المؤسسي',
    
    // About
    aboutTitle: 'من الرؤية إلى التمكين',
    aboutDescription1: 'خبير استراتيجي بريادة تقنيات المعلومات الأردنية، أساعدك في تحقيق طموحاتك في التحول الرقمي والتجديد المؤسسي، مع التركيز على تطوير الحلول المبتكرة التي تناسب احتياجاتك المحددة.',
    aboutDescription2: 'أؤمن بأن التحول الرقمي ليس مجرد تطبيق تقنيات جديدة، بل هو عملية شاملة تشمل تطوير الثقافة المؤسسية وبناء القدرات البشرية وتحسين العمليات بشكل متكامل.',
    
    // Footer
    footerDescription: 'مستشار في التحول الرقمي وإدارة الجودة المؤسسية والحوكمة',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات التواصل',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
    faq: 'FAQ',
    
    // Hero Section
    heroTitle: 'Digital Transformation Consultant',
    heroSubtitle: 'Institutional Quality Management & Governance',
    heroDescription: 'I provide professional consulting services specialized in digital transformation, quality management, and administrative systems development. Helping you improve institutional performance, build effective digital strategies, and achieve sustainable excellence.',
    learnMore: 'Learn More',
    contactNow: 'Contact Now',
    
    // Services
    servicesTitle: 'My Specialized Services',
    servicesSubtitle: 'I offer a comprehensive range of consulting services specialized in digital transformation and institutional development',
    
    // About
    aboutTitle: 'From Vision to Empowerment',
    aboutDescription1: 'A strategic expert in Jordanian IT leadership, I help you achieve your ambitions in digital transformation and institutional renewal, focusing on developing innovative solutions that suit your specific needs.',
    aboutDescription2: 'I believe that digital transformation is not just about implementing new technologies, but is a comprehensive process that includes developing institutional culture, building human capabilities, and improving processes in an integrated manner.',
    
    // Footer
    footerDescription: 'Digital Transformation Consultant & Institutional Quality Management and Governance',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    allRightsReserved: 'All Rights Reserved',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'font-arabic' : ''} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
