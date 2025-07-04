
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { language } = useLanguage();
  
  const achievements = language === 'ar' ? [
    'أكثر من 10 سنوات خبرة في مجال التحول الرقمي',
    'شهادات معتمدة في إدارة المشاريع والتطوير المؤسسي',
    'نجح في قيادة أكثر من 50 مشروع تحول رقمي',
    'خبرة واسعة في القطاع الحكومي والخاص',
    'متخصص في تطوير الاستراتيجيات المؤسسية'
  ] : [
    'More than 10 years of experience in digital transformation',
    'Certified in project management and institutional development',
    'Successfully led more than 50 digital transformation projects',
    'Extensive experience in government and private sectors',
    'Specialized in developing institutional strategies'
  ];

  return (
    <section id="about" className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-tajwal">
              {language === 'ar' ? 'من الرؤية إلى التمكين' : 'From Vision to Empowerment'}
            </h2>
            
            <div className="space-y-6 text-gray-600 font-tajwal text-lg leading-relaxed">
              <p>
                {language === 'ar' 
                  ? 'خبير استراتيجي بريادة تقنيات المعلومات الأردنية، أساعدك في تحقيق طموحاتك في التحول الرقمي والتجديد المؤسسي، مع التركيز على تطوير الحلول المبتكرة التي تناسب احتياجاتك المحددة.'
                  : 'A strategic expert in Jordanian IT leadership, I help you achieve your ambitions in digital transformation and institutional renewal, focusing on developing innovative solutions that suit your specific needs.'
                }
              </p>
              
              <p>
                {language === 'ar'
                  ? 'أؤمن بأن التحول الرقمي ليس مجرد تطبيق تقنيات جديدة، بل هو عملية شاملة تشمل تطوير الثقافة المؤسسية وبناء القدرات البشرية وتحسين العمليات بشكل متكامل.'
                  : 'I believe that digital transformation is not just about implementing new technologies, but is a comprehensive process that includes developing institutional culture, building human capabilities, and improving processes in an integrated manner.'
                }
              </p>
              
              <p>
                {language === 'ar'
                  ? 'مهمتي هي مساعدة المؤسسات على تحقيق أهدافها الاستراتيجية من خلال تطبيق أفضل الممارسات العالمية في مجال التحول الرقمي والتطوير المؤسسي المستدام.'
                  : 'My mission is to help institutions achieve their strategic goals by applying global best practices in digital transformation and sustainable institutional development.'
                }
              </p>
            </div>

            <div className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200"
                     style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-tajwal">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-8 rounded-2xl text-white animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 font-tajwal text-center">
              {language === 'ar' ? 'إنجازات بالأرقام' : 'Achievements in Numbers'}
            </h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200 font-tajwal">
                  {language === 'ar' ? 'مشروع مكتمل' : 'Completed Projects'}
                </div>
              </div>
              
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-200 font-tajwal">
                  {language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-200 font-tajwal">
                  {language === 'ar' ? 'عميل راضي' : 'Satisfied Clients'}
                </div>
              </div>
              
              <div className="text-center animate-bounce-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200 font-tajwal">
                  {language === 'ar' ? 'نسبة النجاح' : 'Success Rate'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
