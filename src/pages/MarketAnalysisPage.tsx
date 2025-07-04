
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

const MarketAnalysisPageContent = () => {
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
    language === 'ar' ? 'إدارة منصات التواصل الاجتماعي' : 'Social Media Management',
    language === 'ar' ? 'كتابة المحتوى الرقمي' : 'Digital Content Writing',
    language === 'ar' ? 'تحسين محركات البحث SEO' : 'SEO Optimization',
    language === 'ar' ? 'تخطيط الحملات الرقمية' : 'Digital Campaign Planning',
    language === 'ar' ? 'دراسة توجهات العملاء المستهدفين' : 'Target Customer Analysis',
    language === 'ar' ? 'تحليل السوق والمنافسين' : 'Market & Competitor Analysis'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-xl">
                <BarChart3 className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-tajwal bg-gradient-to-r from-[#159bc7] to-[#4968aa] bg-clip-text text-transparent">
              {language === 'ar' ? 'خدمات تحليل السوق والتسويق الرقمي' : 'Market Analysis & Digital Marketing Services'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-tajwal">
              {language === 'ar' 
                ? 'مجموعة شاملة من الخدمات المتخصصة في تحليل السوق والتسويق الرقمي'
                : 'A comprehensive range of specialized services in market analysis and digital marketing'
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

const MarketAnalysisPage = () => {
  return (
    <LanguageProvider>
      <MarketAnalysisPageContent />
    </LanguageProvider>
  );
};

export default MarketAnalysisPage;
