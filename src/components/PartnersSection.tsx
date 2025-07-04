
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const PartnersSection = () => {
  const { language } = useLanguage();
  const [api, setApi] = useState<any>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const partners = [
    { name: 'Partner 1', logo: '🏢' },
    { name: 'Partner 2', logo: '🏛️' },
    { name: 'Partner 3', logo: '🏭' },
    { name: 'Partner 4', logo: '🏬' },
    { name: 'Partner 5', logo: '🏪' },
    { name: 'Partner 6', logo: '🏫' },
    { name: 'Partner 7', logo: '🏦' },
    { name: 'Partner 8', logo: '🏨' },
    { name: 'Partner 9', logo: '🏤' },
    { name: 'Partner 10', logo: '🏣' },
    { name: 'Partner 11', logo: '🏢' },
    { name: 'Partner 12', logo: '🏛️' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#159bc7] to-[#4968aa] animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-right">
          <h2 className="text-4xl font-bold text-white mb-4 font-tajwal">
            {language === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-tajwal">
            {language === 'ar' 
              ? 'فخورون بشراكتنا مع مؤسسات رائدة في مختلف القطاعات'
              : 'Proud of our partnerships with leading institutions across various sectors'
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
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 mx-auto group animate-fade-in"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300" />
            <CarouselNext className="text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300" />
          </Carousel>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-blue-100 font-tajwal text-lg">
            {language === 'ar' 
              ? 'وأكثر من 25+ عميل راضي عن خدماتنا المتميزة'
              : 'And more than 25+ satisfied clients with our distinguished services'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
