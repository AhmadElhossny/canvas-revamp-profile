
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RotatingText = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const englishTexts = [
    "Digital Transformation",
    "Governance", 
    "Organizational Strategy"
  ];

  const arabicTexts = [
    "التحول الرقمي",
    "الحوكمة",
    "الاستراتيجية المؤسسية"
  ];

  const texts = language === 'ar' ? arabicTexts : englishTexts;
  const staticText = language === 'ar' ? 'خبير في ' : 'Expert in ';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative">
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8 font-tajwal leading-tight">
        <span className="text-white/80">
          {staticText}
        </span>
        <span className="relative inline-block min-w-[200px] sm:min-w-[250px] lg:min-w-[300px]">
          <span 
            key={currentIndex}
            className="text-white animate-fade-in absolute top-0 left-0 w-full"
          >
            {texts[currentIndex]}
          </span>
        </span>
      </h1>
    </div>
  );
};

export default RotatingText;
