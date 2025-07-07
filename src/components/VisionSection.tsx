import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Compass with 10% opacity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 lg:w-[600px] lg:h-[600px]">
          <svg viewBox="0 0 400 400" className="w-full h-full text-gray-600">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1"/>
            
            {/* Compass lines */}
            <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="1"/>
            <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="1"/>
            <line x1="73" y1="73" x2="327" y2="327" stroke="currentColor" strokeWidth="1"/>
            <line x1="327" y1="73" x2="73" y2="327" stroke="currentColor" strokeWidth="1"/>
            
            {/* Compass points */}
            <polygon points="200,30 210,50 200,40 190,50" fill="currentColor"/>
            <polygon points="200,370 210,350 200,360 190,350" fill="currentColor"/>
            <polygon points="30,200 50,190 40,200 50,210" fill="currentColor"/>
            <polygon points="370,200 350,190 360,200 350,210" fill="currentColor"/>
            
            {/* Center circle */}
            <circle cx="200" cy="200" r="8" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 font-tajwal">
            {language === 'ar' ? 'من الرؤية إلى التمكين' : 'From Vision to Empowerment'}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-tajwal">
            {language === 'ar'
              ? 'نحول الأفكار المبتكرة إلى حلول عملية تدفع المؤسسات نحو التميز والنجاح المستدام في عصر التحول الرقمي'
              : 'We transform innovative ideas into practical solutions that drive organizations towards excellence and sustainable success in the digital transformation era'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;