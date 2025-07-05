
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23159bc7%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M40%2040L20%2060h40L40%2040zM40%2040L60%2020v40L40%2040z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-tajwal">
            {language === 'ar' ? 'من الرؤية إلى التمكين' : 'From Vision to Empowerment'}
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 font-tajwal leading-relaxed">
            {language === 'ar' ? (
              <>
                <p>
                  عندما تشرع المنظمات أو الأفراد في رحلات تحويلية، فإنهم لا يحتاجون فقط إلى خارطة طريق - بل يحتاجون إلى بوصلة استراتيجية لتوجيههم عبر التعقيد.
                </p>
                <p>
                  أنا لا أعمل كمستشار يقدم نصائح عامة. أعمل كحليف استراتيجي - أرسم مساراً واضحاً وعملياً وقابلاً للتنفيذ يتجاوز التحديات ويؤدي إلى نتائج ذات معنى.
                </p>
                <p>
                  <span className="text-[#159bc7] font-semibold">مهمتي</span> ليست ببساطة أن أريك القمة، بل أن أسير بجانبك - من خلال خطوات محسوبة وقرارات مدروسة وإرث من التأثير المستدام.
                </p>
              </>
            ) : (
              <>
                <p>
                  When organizations or individuals embark on transformative journeys, they don't just need a roadmap – they need a strategic compass to guide them through complexity.
                </p>
                <p>
                  I don't serve as a consultant offering generic advice. I act as a strategic ally – drawing a clear, practical, and executable path that transcends challenges and leads to meaningful outcomes.
                </p>
                <p>
                  <span className="text-[#159bc7] font-semibold">My mission</span> is not simply to show you the summit, but to walk beside you – through calculated steps, informed decisions, and a legacy of sustainable impact.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
