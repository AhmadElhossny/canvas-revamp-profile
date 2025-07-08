
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-[#159bc7] to-[#4968aa] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] py-12 sm:py-16 lg:py-20">
          {/* Content - Left Side */}
          <div className="text-white animate-fade-in flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 font-tajwal leading-tight">
              {language === 'ar' 
                ? 'مستشار في التحول الرقمي والجودة المؤسسية والحوكمة'
                : 'Consultant in Digital Transformation, Institutional Quality, and Governance'
              }
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 font-tajwal leading-relaxed text-white/90 text-justify">
              {language === 'ar'
                ? 'أقدم خدمات استشارية متخصصة في التحول الرقمي وإدارة الجودة المؤسسية والحوكمة. هدفي هو دعم المؤسسات في تعزيز الكفاءة التشغيلية وتطوير الحلول الرقمية الاستراتيجية وتحقيق التميز المستدام مع أطر حوكمة قوية.'
                : 'I offer specialized consulting services in digital transformation, institutional quality management, and governance. My goal is to support organizations in enhancing operational efficiency, developing strategic digital solutions, and achieving sustainable excellence with robust governance frameworks.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-tajwal text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>📱</span>
                {language === 'ar' ? 'تواصل الآن' : 'Contact Now'}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-tajwal text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>❓</span>
                {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              </Button>
            </div>
          </div>

          {/* Profile Image - Right Side, touching bottom */}
          <div className="flex justify-center lg:justify-end items-end h-full order-1 lg:order-2 animate-slide-in-right">
            <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
              <img
                src="/lovable-uploads/30ae9730-1ae2-4130-a92b-684b5b85d62a.png"
                alt={language === 'ar' ? 'مستشار التحول الرقمي' : 'Digital Transformation Consultant'}
                className={`max-h-[80vh] w-auto object-contain ${
                  language === 'en' ? 'scale-x-[-1]' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
