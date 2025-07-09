
import { Brain, Users, Zap, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const { language } = useLanguage();
  const [api, setApi] = useState<any>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const services = [
    {
      icon: Brain,
      title: language === 'ar' ? 'خدمات التحول الرقمي والتقنية الإدارية' : 'Digital Transformation & Administrative Technology',
      description: language === 'ar' 
        ? 'بناء حلول تقنية مخصصة وتحسين العمليات الداخلية'
        : 'Building custom technology solutions and optimizing internal processes',
      link: '/digital-transformation'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'خدمات الموارد البشرية وتطوير الكفاءات' : 'HR Services & Competency Development',
      description: language === 'ar'
        ? 'تطوير الاستراتيجيات وبرامج التدريب والتأهيل'
        : 'Developing strategies and training programs',
      link: '/hr-services'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'خدمات تحليل السوق والتسويق الرقمي' : 'Market Analysis & Digital Marketing',
      description: language === 'ar'
        ? 'تحليل السوق وإدارة منصات التواصل الاجتماعي'
        : 'Market analysis and social media management',
      link: '/market-analysis'
    },
    {
      icon: Target,
      title: language === 'ar' ? 'خدمات استشارية مهنية وتنظيمية' : 'Professional & Organizational Consulting',
      description: language === 'ar'
        ? 'الإدارة والجودة المؤسسية وتحليل الأعمال'
        : 'Management, institutional quality, and business analysis',
      link: '/organizational-consulting'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'الخدمات البحثية والأكاديمية' : 'Research & Academic Services',
      description: language === 'ar'
        ? 'الإرشاد الأكاديمي وتصميم البحوث العلمية'
        : 'Academic guidance and scientific research design',
      link: '/research-academic'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Icon */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Users className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-tajwal">
            {language === 'ar' ? 'الحلول الاستشارية المتقدمة' : 'Advanced Consulting Solutions'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-tajwal">
            {language === 'ar'
              ? 'خدمات متخصصة في تطوير الموارد البشرية والكفاءات المؤسسية'
              : 'Specialized services in human resources development and institutional competencies'
            }
          </p>
        </div>

        {/* Services Container with Curved Border Design */}
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative Border */}
          <div className="absolute inset-0 border-4 border-red-500 rounded-[3rem] transform rotate-1 opacity-20"></div>
          
          <div className="relative bg-white rounded-3xl p-8 shadow-lg">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                direction: language === 'ar' ? 'rtl' : 'ltr'
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <a href={service.link} className="block h-full">
                      <div className="group p-6 text-center h-full flex flex-col justify-center hover:bg-blue-50 rounded-2xl transition-all duration-300">
                        {/* Blue Dot */}
                        <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-4"></div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3 font-tajwal leading-tight">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 font-tajwal text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 hover:bg-red-600 border-0 text-white rounded-full shadow-lg" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 hover:bg-red-600 border-0 text-white rounded-full shadow-lg" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
