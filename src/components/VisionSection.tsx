
import { useLanguage } from '@/contexts/LanguageContext';
import { Compass } from 'lucide-react';

const VisionSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Compass Background with 10% opacity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <Compass size={400} className="text-gray-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 font-tajwal">
            {language === 'ar' ? 'من الرؤية إلى التمكين' : 'From Vision to Empowerment'}
          </h2>

          <div className="space-y-6 text-gray-600 font-tajwal leading-relaxed">
            <p className="text-lg sm:text-xl lg:text-2xl">
              {language === 'ar' 
                ? 'خبير استراتيجي في القيادة التقنية الأردنية، أساعدك في تحقيق طموحاتك في التحول الرقمي والتجديد المؤسسي، مع التركيز على تطوير حلول مبتكرة تناسب احتياجاتك المحددة.'
                : 'A strategic expert in Jordanian IT leadership, I help you achieve your ambitions in digital transformation and institutional renewal, focusing on developing innovative solutions that suit your specific needs.'
              }
            </p>

            <p className="text-base sm:text-lg lg:text-xl">
              {language === 'ar'
                ? 'أؤمن بأن التحول الرقمي ليس مجرد تطبيق تقنيات جديدة، بل هو عملية شاملة تتضمن تطوير الثقافة المؤسسية، وبناء القدرات البشرية، وتحسين العمليات بطريقة متكاملة.'
                : 'I believe that digital transformation is not just about implementing new technologies, but is a comprehensive process that includes developing institutional culture, building human capabilities, and improving processes in an integrated manner.'
              }
            </p>

            <p className="text-base sm:text-lg lg:text-xl">
              {language === 'ar'
                ? 'مهمتي هي مساعدة المؤسسات على تحقيق أهدافها الاستراتيجية من خلال تطبيق أفضل الممارسات العالمية في التحول الرقمي والتنمية المؤسسية المستدامة.'
                : 'My mission is to help institutions achieve their strategic goals by applying global best practices in digital transformation and sustainable institutional development.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
