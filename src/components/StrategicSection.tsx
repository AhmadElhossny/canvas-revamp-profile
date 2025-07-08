import { useLanguage } from '@/contexts/LanguageContext';

const StrategicSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Vision Image */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23159bc7%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M100%2020L180%20100L100%20180L20%20100Z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-no-repeat bg-right-top bg-contain"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 font-tajwal">
            {language === 'ar' 
              ? 'الصعود الاستراتيجي يبدأ بالوضوح'
              : 'Strategic Ascent Begins with Clarity'
            }
          </h2>
          
          <div className="space-y-6 text-gray-600 font-tajwal text-lg leading-relaxed">
            <p className="text-justify">
              {language === 'ar'
                ? 'عندما تشرع المؤسسات أو الأفراد في رحلات تحويلية، فإنهم لا يحتاجون فقط إلى خارطة طريق - بل يحتاجون إلى بوصلة استراتيجية لتوجيههم عبر التعقيد.'
                : 'When organizations or individuals embark on transformative journeys, they don\'t just need a roadmap – they need a strategic compass to guide them through complexity.'
              }
            </p>
            
            <p className="text-justify text-[#159bc7] font-semibold">
              {language === 'ar'
                ? 'لا أعمل كمستشار يقدم نصائح عامة. أعمل كحليف استراتيجي - أرسم مسارًا واضحًا وعمليًا وقابلًا للتنفيذ يتجاوز التحديات ويؤدي إلى نتائج ذات معنى.'
                : 'I don\'t serve as a consultant offering generic advice. I act as a strategic ally – drawing a clear, practical, and executable path that transcends challenges and leads to meaningful outcomes.'
              }
            </p>
            
            <p className="text-justify text-[#4968aa]">
              {language === 'ar'
                ? 'مهمتي ليست ببساطة أن أريك القمة، بل أن أسير بجانبك - من خلال خطوات محسوبة وقرارات مدروسة وإرث من التأثير المستدام.'
                : 'My mission is not simply to show you the summit, but to walk beside you – through calculated steps, informed decisions, and a legacy of sustainable impact.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicSection;