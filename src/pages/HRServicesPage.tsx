
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const HRServicesPageContent = () => {
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
    language === 'ar' ? 'إعداد الاستراتيجيات والسياسات' : 'Strategy & Policy Development',
    language === 'ar' ? 'برامج رفع القادة والموظفين الجدد' : 'Leadership & New Employee Programs',
    language === 'ar' ? 'تحليل فجوات الأداء وتقييم القدرات' : 'Performance Gap Analysis',
    language === 'ar' ? 'تصميم برامج التدريب والتطوير' : 'Training Program Design',
    language === 'ar' ? 'استشارات الموارد البشرية' : 'HR Consulting'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-xl">
                <Users className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-tajwal bg-gradient-to-r from-[#159bc7] to-[#4968aa] bg-clip-text text-transparent">
              {language === 'ar' ? 'خدمات الموارد البشرية وتطوير الكفاءات' : 'HR Services & Competency Development'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-tajwal">
              {language === 'ar' 
                ? 'خدمات متخصصة في تطوير الموارد البشرية والكفاءات المؤسسية'
                : 'Specialized services in human resources development and institutional competencies'
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
                      <h3 className="text-xl font-bold text-gray-900 font-tajwal leading-relaxed">
                        {service}
                      </h3>
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

const HRServicesPage = () => {
  return (
    <LanguageProvider>
      <HRServicesPageContent />
    </LanguageProvider>
  );
};

export default HRServicesPage;
