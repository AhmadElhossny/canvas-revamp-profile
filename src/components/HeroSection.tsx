
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-[#159bc7] to-[#4968aa] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-12">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 font-tajwal leading-tight">
              {t('heroTitle')}
              <span className="block text-2xl lg:text-3xl xl:text-4xl mt-2 text-blue-200">
                {t('heroSubtitle')}
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-6 text-blue-100 font-tajwal leading-relaxed">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-tajwal text-base lg:text-lg px-6 py-4 transition-all duration-300"
              >
                {t('learnMore')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-tajwal text-base lg:text-lg px-6 py-4 transition-all duration-300"
              >
                {t('contactNow')}
              </Button>
            </div>
          </div>

          {/* Profile Image - Bottom Aligned */}
          <div className="flex justify-center lg:justify-end items-end h-full animate-slide-in-right">
            <div className="relative flex items-end justify-center lg:justify-end w-full h-full max-h-[500px] lg:max-h-[600px]">
              <img
                src="/lovable-uploads/30ae9730-1ae2-4130-a92b-684b5b85d62a.png"
                alt="مستشار التحول الرقمي"
                className="h-full w-auto object-contain object-bottom"
                style={{ 
                  maxHeight: '100%',
                  width: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
