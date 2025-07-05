
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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-tajwal">
            {language === 'ar' ? 'خدماتي المتخصصة' : 'My Specialized Services'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-tajwal">
            {language === 'ar'
              ? 'مجموعة شاملة من الخدمات الاستشارية المتخصصة في التحول الرقمي والتطوير المؤسسي'
              : 'A comprehensive range of consulting services specialized in digital transformation and institutional development'
            }
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              direction: language === 'ar' ? 'rtl' : 'ltr'
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <a href={service.link} className="block h-full">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 shadow-md h-full cursor-pointer bg-white rounded-2xl overflow-hidden">
                      <CardContent className="p-8 h-full flex flex-col text-center">
                        <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                          <service.icon className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 font-tajwal leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 font-tajwal leading-relaxed text-sm flex-1">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-600 border-gray-300 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:text-white hover:border-transparent transition-all duration-300 -left-12" />
            <CarouselNext className="text-gray-600 border-gray-300 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:text-white hover:border-transparent transition-all duration-300 -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
