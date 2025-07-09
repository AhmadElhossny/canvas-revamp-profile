
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

const OrganizationalConsultingPageContent = () => {
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
      title: language === 'ar' ? 'الإدارة والجودة المؤسسية' : 'Management & Institutional Quality',
      description: language === 'ar' ? 'تطوير أنظمة الإدارة وضمان الجودة المؤسسية' : 'Developing management systems and ensuring institutional quality'
    },
    {
      title: language === 'ar' ? 'إدارة الجودة (TQM) المتكاملة' : 'Total Quality Management (TQM)',
      description: language === 'ar' ? 'تطبيق معايير إدارة الجودة الشاملة والتحسين المستمر' : 'Implementing comprehensive quality management standards and continuous improvement'
    },
    {
      title: language === 'ar' ? 'تحليل الأعمال' : 'Business Analysis',
      description: language === 'ar' ? 'تحليل العمليات التجارية وتحديد الفرص التطويرية' : 'Business process analysis and identifying development opportunities'
    },
    {
      title: language === 'ar' ? 'استشارات الموارد البشرية' : 'HR Consulting',
      description: language === 'ar' ? 'استشارات متخصصة في تطوير وإدارة الموارد البشرية' : 'Specialized consulting in human resource development and management'
    },
    {
      title: language === 'ar' ? 'التدريب في مجال الإدارة والأعمال' : 'Management & Business Training',
      description: language === 'ar' ? 'برامج تدريبية متقدمة في الإدارة وتطوير الأعمال' : 'Advanced training programs in management and business development'
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
                <Building className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-tajwal bg-gradient-to-r from-[#159bc7] to-[#4968aa] bg-clip-text text-transparent">
              {language === 'ar' ? 'خدمات استشارية مهنية وتنظيمية' : 'Professional & Organizational Consulting'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-tajwal">
              {language === 'ar' 
                ? 'استشارات متخصصة في التطوير التنظيمي والإداري'
                : 'Specialized consulting in organizational and administrative development'
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

const OrganizationalConsultingPage = () => {
  return (
    <LanguageProvider>
      <OrganizationalConsultingPageContent />
    </LanguageProvider>
  );
};

export default OrganizationalConsultingPage;
