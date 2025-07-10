
import { ArrowDown, Mail, Search, Users, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-screen">
          {/* Content - Left Side */}
          <div className="text-white animate-fade-in flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left py-12 sm:py-16 lg:py-20">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8 font-tajwal leading-tight">
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
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-tajwal text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {language === 'ar' ? 'تواصل الآن' : 'Contact Now'}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-tajwal text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              </Button>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 mx-auto w-fit hover:bg-white/20 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-white mx-auto" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 font-tajwal text-white">5</div>
                <div className="text-sm lg:text-base text-white/90 font-tajwal">
                  {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="group text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 mx-auto w-fit hover:bg-white/20 transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-white mx-auto" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 font-tajwal text-white">100+</div>
                <div className="text-sm lg:text-base text-white/90 font-tajwal">
                  {language === 'ar' ? 'مشروع ناجح' : 'Successful Projects'}
                </div>
              </div>
              <div className="group text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 mx-auto w-fit hover:bg-white/20 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-white mx-auto" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 font-tajwal text-white">20+</div>
                <div className="text-sm lg:text-base text-white/90 font-tajwal">
                  {language === 'ar' ? 'دورات حضرتها' : 'Courses Attended'}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="flex justify-center lg:justify-end items-end order-1 lg:order-2 animate-slide-in-right min-h-screen">
            <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
              <img
                src="/lovable-uploads/bc711a19-51c2-4c9d-9c60-4da7e43d8489.png"
                alt={language === 'ar' ? 'مستشار التحول الرقمي' : 'Digital Transformation Consultant'}
                className={`w-auto h-full object-cover object-bottom ${
                  language === 'ar' ? 'scale-x-[-1]' : ''
                }`}
                style={{ maxHeight: '100vh' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - positioned to not interfere with image */}
      <div className="absolute bottom-6 left-1/4 transform -translate-x-1/2 animate-bounce z-20">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300">
          <ArrowDown className="text-white drop-shadow-lg" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
