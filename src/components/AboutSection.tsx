
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    'أكثر من 10 سنوات خبرة في مجال التحول الرقمي',
    'شهادات معتمدة في إدارة المشاريع والتطوير المؤسسي',
    'نجح في قيادة أكثر من 50 مشروع تحول رقمي',
    'خبرة واسعة في القطاع الحكومي والخاص',
    'متخصص في تطوير الاستراتيجيات المؤسسية'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic">
              من الرؤية إلى التمكين
            </h2>
            
            <div className="space-y-6 text-gray-600 font-arabic text-lg leading-relaxed">
              <p>
                خبير استراتيجي بريادة تقنيات المعلومات الأردنية، أساعدك في تحقيق طموحاتك في التحول الرقمي والتجديد المؤسسي، مع التركيز على تطوير الحلول المبتكرة التي تناسب احتياجاتك المحددة.
              </p>
              
              <p>
                أؤمن بأن التحول الرقمي ليس مجرد تطبيق تقنيات جديدة، بل هو عملية شاملة تشمل تطوير الثقافة المؤسسية وبناء القدرات البشرية وتحسين العمليات بشكل متكامل.
              </p>
              
              <p>
                مهمتي هي مساعدة المؤسسات على تحقيق أهدافها الاستراتيجية من خلال تطبيق أفضل الممارسات العالمية في مجال التحول الرقمي والتطوير المؤسسي المستدام.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-arabic">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-8 font-arabic text-center">
              إنجازات بالأرقام
            </h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200 font-arabic">مشروع مكتمل</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-200 font-arabic">سنوات خبرة</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-200 font-arabic">عميل راضي</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200 font-arabic">نسبة النجاح</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
