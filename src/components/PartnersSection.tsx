
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

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
    { name: 'Partner 13', logo: '🏭' },
    { name: 'Partner 14', logo: '🏬' },
    { name: 'Partner 15', logo: '🏪' },
    { name: 'Partner 16', logo: '🏫' },
    { name: 'Partner 17', logo: '🏦' },
    { name: 'Partner 18', logo: '🏨' },
    { name: 'Partner 19', logo: '🏤' },
    { name: 'Partner 20', logo: '🏣' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#159bc7] to-[#4968aa] animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-in-right">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 font-tajwal">
            {language === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto font-tajwal leading-relaxed">
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
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 mx-auto group animate-fade-in shadow-lg hover:shadow-xl"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300 -left-8 sm:-left-12" />
            <CarouselNext className="text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300 -right-8 sm:-right-12" />
          </Carousel>
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-blue-100 font-tajwal text-lg sm:text-xl lg:text-2xl">
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
