
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const ResearchAcademicPageContent = () => {
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
      title: language === 'ar' ? 'الإرشاد الأكاديمي' : 'Academic Guidance',
      description: language === 'ar' ? 'توجيه وإرشاد الطلاب والباحثين في مسيرتهم الأكاديمية' : 'Guiding and mentoring students and researchers in their academic journey'
    },
    {
      title: language === 'ar' ? 'تصميم عروض تقديمية تحتية' : 'Professional Presentation Design',
      description: language === 'ar' ? 'إعداد وتصميم العروض التقديمية المهنية والأكاديمية' : 'Creating and designing professional and academic presentations'
    },
    {
      title: language === 'ar' ? 'خدمة التقييم الأكاديمي' : 'Academic Evaluation Services',
      description: language === 'ar' ? 'تقييم الأبحاث والمشاريع الأكاديمية بمعايير علمية' : 'Evaluating research and academic projects with scientific standards'
    },
    {
      title: language === 'ar' ? 'صياغة مقترحات البحث' : 'Research Proposal Writing',
      description: language === 'ar' ? 'كتابة وصياغة مقترحات البحث العلمي المتخصصة' : 'Writing and formulating specialized scientific research proposals'
    },
    {
      title: language === 'ar' ? 'تحليل البيانات وتفسير النتائج' : 'Data Analysis & Results Interpretation',
      description: language === 'ar' ? 'تحليل البيانات الإحصائية وتفسير النتائج البحثية' : 'Statistical data analysis and research results interpretation'
    },
    {
      title: language === 'ar' ? 'إعداد أدوات البحث والاستبيانات' : 'Research Tools & Survey Development',
      description: language === 'ar' ? 'تصميم وإعداد الأدوات البحثية والاستبيانات العلمية' : 'Designing and developing research tools and scientific surveys'
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
                <BookOpen className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-tajwal bg-gradient-to-r from-[#159bc7] to-[#4968aa] bg-clip-text text-transparent">
              {language === 'ar' ? 'الخدمات البحثية والأكاديمية' : 'Research & Academic Services'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-tajwal">
              {language === 'ar' 
                ? 'خدمات متخصصة في البحث العلمي والإرشاد الأكاديمي'
                : 'Specialized services in scientific research and academic guidance'
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

const ResearchAcademicPage = () => {
  return (
    <LanguageProvider>
      <ResearchAcademicPageContent />
    </LanguageProvider>
  );
};

export default ResearchAcademicPage;
