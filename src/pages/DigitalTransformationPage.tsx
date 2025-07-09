
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Cog } from 'lucide-react';

const DigitalTransformationPageContent = () => {
  const { language } = useLanguage();
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  const services = [
    {
      title: language === 'ar' ? 'بناء حلول تقنية مخصصة' : 'Custom Technology Solutions',
      description: language === 'ar' ? 'تطوير وبناء الحلول التقنية المتقدمة حسب احتياجات العملاء' : 'Developing and building advanced technology solutions according to client needs'
    },
    {
      title: language === 'ar' ? 'خدمة تصميم الجرافيك الاحترافي' : 'Professional Graphic Design',
      description: language === 'ar' ? 'تصميم الهوية البصرية والمواد التسويقية بجودة عالية' : 'Designing visual identity and marketing materials with high quality'
    },
    {
      title: language === 'ar' ? 'تحليل البيانات والتقارير المؤسسية' : 'Data Analysis & Institutional Reports',
      description: language === 'ar' ? 'تحليل البيانات وإعداد التقارير الاستراتيجية للمؤسسات' : 'Data analysis and preparing strategic reports for institutions'
    },
    {
      title: language === 'ar' ? 'تحسين تجربة المستخدم للأنظمة' : 'System User Experience Optimization',
      description: language === 'ar' ? 'تطوير وتحسين واجهات المستخدم لتحقيق أفضل تجربة' : 'Developing and improving user interfaces for optimal experience'
    },
    {
      title: language === 'ar' ? 'أتمتة العمليات الداخلية' : 'Internal Process Automation',
      description: language === 'ar' ? 'أتمتة العمليات والإجراءات لزيادة الكفاءة والإنتاجية' : 'Automating processes and procedures to increase efficiency and productivity'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-xl">
                <Cog className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-tajwal bg-gradient-to-r from-[#159bc7] to-[#4968aa] bg-clip-text text-transparent">
              {language === 'ar' ? 'خدمات التحول الرقمي والتقنية الإدارية' : 'Digital Transformation & Administrative Technology'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-tajwal">
              {language === 'ar' 
                ? 'حلول تقنية متقدمة للتحول الرقمي والتطوير الإداري'
                : 'Advanced technical solutions for digital transformation and administrative development'
              }
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#159bc7] to-[#4968aa] rounded-full mb-4"></div>
                      <h3 className="text-xl font-bold text-gray-900 font-tajwal leading-relaxed mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-tajwal text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DigitalTransformationPage = () => {
  return (
    <LanguageProvider>
      <DigitalTransformationPageContent />
    </LanguageProvider>
  );
};

export default DigitalTransformationPage;
