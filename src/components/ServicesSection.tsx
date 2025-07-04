
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
      title: language === 'ar' ? 'استراتيجية التحول الرقمي' : 'Digital Transformation Strategy',
      description: language === 'ar' 
        ? 'وضع خطط شاملة للتحول الرقمي وتطوير الاستراتيجيات المؤسسية المتقدمة'
        : 'Developing comprehensive digital transformation plans and advanced institutional strategies',
      link: '/digital-transformation'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'إدارة التغيير' : 'Change Management',
      description: language === 'ar'
        ? 'قيادة عمليات التغيير المؤسسي وتطوير القدرات البشرية والتنظيمية'
        : 'Leading institutional change processes and developing human and organizational capabilities',
      link: '/hr-services'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'تحسين العمليات' : 'Process Optimization',
      description: language === 'ar'
        ? 'تحليل وتطوير العمليات الداخلية لتحقيق أقصى كفاءة وفعالية'
        : 'Analyzing and developing internal processes for maximum efficiency and effectiveness',
      link: '/organizational-consulting'
    },
    {
      icon: Target,
      title: language === 'ar' ? 'التخطيط الاستراتيجي' : 'Strategic Planning',
      description: language === 'ar'
        ? 'وضع الخطط طويلة المدى وتحديد الأهداف الاستراتيجية للمؤسسات'
        : 'Setting long-term plans and defining strategic objectives for institutions',
      link: '/market-analysis'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'تطوير الأداء' : 'Performance Development',
      description: language === 'ar'
        ? 'قياس وتحليل الأداء المؤسسي وتطوير مؤشرات الأداء الرئيسية'
        : 'Measuring and analyzing institutional performance and developing key performance indicators',
      link: '/research-academic'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-right">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-tajwal">
            {language === 'ar' ? 'خدماتي المتخصصة' : 'My Specialized Services'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-tajwal">
            {language === 'ar'
              ? 'أقدم مجموعة شاملة من الخدمات الاستشارية المتخصصة في التحول الرقمي والتطوير المؤسسي'
              : 'I offer a comprehensive range of consulting services specialized in digital transformation and institutional development'
            }
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a href={service.link} className="block h-full">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md h-full cursor-pointer animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="text-center flex-1">
                          <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="text-white w-8 h-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 font-tajwal">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 font-tajwal leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-600 border-gray-300 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:text-white transition-all duration-300" />
            <CarouselNext className="text-gray-600 border-gray-300 hover:bg-gradient-to-r hover:from-[#159bc7] hover:to-[#4968aa] hover:text-white transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
