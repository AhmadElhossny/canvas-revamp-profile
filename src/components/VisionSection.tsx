
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-6 lg:py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23159bc7%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M40%2040L20%2060h40L40%2040zM40%2040L60%2020v40L40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4 font-tajwal">
            {language === 'ar' ? 'من الرؤية إلى التمكين' : 'From Vision to Empowerment'}
          </h2>
          
          <div className="space-y-4 text-gray-700 font-tajwal">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              {language === 'ar' 
                ? 'خبير استراتيجي بريادة تقنيات المعلومات الأردنية، أساعدك في تحقيق طموحاتك في التحول الرقمي والتجديد المؤسسي، مع التركيز على تطوير الحلول المبتكرة التي تناسب احتياجاتك المحددة.'
                : 'A strategic expert in Jordanian IT leadership, I help you achieve your ambitions in digital transformation and institutional renewal, focusing on developing innovative solutions that suit your specific needs.'
              }
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              {language === 'ar'
                ? 'أؤمن بأن التحول الرقمي ليس مجرد تطبيق تقنيات جديدة، بل هو عملية شاملة تشمل تطوير الثقافة المؤسسية وبناء القدرات البشرية وتحسين العمليات بشكل متكامل.'
                : 'I believe that digital transformation is not just about implementing new technologies, but is a comprehensive process that includes developing institutional culture, building human capabilities, and improving processes in an integrated manner.'
              }
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              {language === 'ar'
                ? 'مهمتي هي مساعدة المؤسسات على تحقيق أهدافها الاستراتيجية من خلال تطبيق أفضل الممارسات العالمية في مجال التحول الرقمي والتطوير المؤسسي المستدام.'
                : 'My mission is to help organizations achieve their strategic goals through applying global best practices in digital transformation and sustainable institutional development.'
              }
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900">
                  {language === 'ar' ? 'الخبرة والإنجازات:' : 'Experience & Achievements:'}
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'ar' ? 'أكثر من 10 سنوات خبرة في مجال التحول الرقمي' : 'More than 10 years of experience in digital transformation'}</li>
                  <li>• {language === 'ar' ? 'شهادات معتمدة في إدارة المشاريع والتطوير المؤسسي' : 'Certified credentials in project management and institutional development'}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900">
                  {language === 'ar' ? 'التخصص:' : 'Specialization:'}
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• {language === 'ar' ? 'نجح في قيادة أكثر من 50 مشروع تحول رقمي' : 'Successfully led more than 50 digital transformation projects'}</li>
                  <li>• {language === 'ar' ? 'خبرة واسعة في القطاع الحكومي والخاص' : 'Extensive experience in government and private sectors'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
