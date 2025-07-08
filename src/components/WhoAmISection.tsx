import { CheckCircle, Target, Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhoAmISection = () => {
  const { language } = useLanguage();

  const features = language === 'ar' ? [
    {
      icon: Target,
      title: 'مؤثر في موقفي المهني',
      description: 'أؤمن بأن كل فرد وكل مؤسسة لديهم إمكانات لا محدودة للنمو والتطوير، وأعمل على تحويل هذه الإمكانات إلى واقع ملموس من خلال استراتيجيات مدروسة.'
    },
    {
      icon: Users,
      title: 'مهاراتي العملية',
      description: 'بناء الجسور بين الأطراف المختلفة في المؤسسة، وخلق بيئة عمل تشاركية تضمن التطوير المستدام والشامل للجميع.'
    },
    {
      icon: Briefcase,
      title: 'مجالاتي وخبراتي',
      description: 'خبرة واسعة في التحول الرقمي، إدارة المشاريع، تطوير الاستراتيجيات، وحلول الأعمال المبتكرة.'
    },
    {
      icon: Award,
      title: 'قيمي',
      description: 'الالتزام بأعلى معايير الجودة والمهنية، والسعي المستمر لتحقيق التميز في كل مشروع.'
    }
  ] : [
    {
      icon: Target,
      title: 'Professional Philosophy',
      description: 'I believe every individual and organization has unlimited potential for growth and development. I work to transform this potential into tangible reality through well-studied strategies.'
    },
    {
      icon: Users,
      title: 'My Skills',
      description: 'Building bridges between different stakeholders within organizations, creating collaborative work environments that ensure sustainable and comprehensive development for all.'
    },
    {
      icon: Briefcase,
      title: 'My Expertise',
      description: 'Extensive experience in digital transformation, project management, strategy development, and innovative business solutions.'
    },
    {
      icon: Award,
      title: 'My Values',
      description: 'Commitment to the highest standards of quality and professionalism, with continuous pursuit of excellence in every project.'
    }
  ];

  const stats = language === 'ar' ? [
    { number: '5+', label: 'سنوات خبرة' },
    { number: '100+', label: 'مشروع مكتمل' },
    { number: '25+', label: 'عميل راضي' },
    { number: '95%', label: 'نسبة النجاح' }
  ] : [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Completed Projects' },
    { number: '25+', label: 'Satisfied Clients' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-tajwal">
            {language === 'ar' ? 'من أنا؟' : 'Who Am I?'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#159bc7] to-[#4968aa] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-tajwal leading-relaxed text-justify">
            {language === 'ar'
              ? 'أنا خبير استراتيجي متخصص في التحول الرقمي وإدارة الجودة المؤسسية والحوكمة. أساعد المؤسسات في تحقيق التميز التشغيلي وتطوير الحلول الرقمية المبتكرة.'
              : 'I am a strategic expert specializing in digital transformation, institutional quality management, and governance. I help organizations achieve operational excellence and develop innovative digital solutions.'
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 font-tajwal">{stat.number}</div>
              <div className="text-gray-600 font-tajwal">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-[#159bc7]/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#159bc7] to-[#4968aa] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-tajwal">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-tajwal text-justify">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#159bc7] to-[#4968aa] rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4 font-tajwal">
            {language === 'ar' ? 'جاهز لبدء رحلة التحول؟' : 'Ready to Start Your Transformation Journey?'}
          </h3>
          <p className="text-lg mb-6 font-tajwal opacity-90">
            {language === 'ar'
              ? 'دعنا نعمل معًا لتحقيق أهدافك الاستراتيجية وبناء مستقبل رقمي مستدام'
              : 'Let\'s work together to achieve your strategic goals and build a sustainable digital future'
            }
          </p>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-5 h-5" />
            <span className="font-tajwal">
              {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmISection;