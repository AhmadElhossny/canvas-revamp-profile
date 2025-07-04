
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { language } = useLanguage();

  // Placeholder partner logos - you can replace these with actual partner logos
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
    <section className="py-20 bg-gradient-to-r from-[#159bc7] to-[#4968aa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-arabic">
            {language === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-arabic">
            {language === 'ar' 
              ? 'فخورون بشراكتنا مع مؤسسات رائدة في مختلف القطاعات'
              : 'Proud of our partnerships with leading institutions across various sectors'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 mx-auto group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-100 font-arabic text-lg">
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
