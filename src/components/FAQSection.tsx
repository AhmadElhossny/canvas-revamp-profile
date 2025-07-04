
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQSection = () => {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: language === 'ar' 
        ? 'هل يمكنني أن أطلب خدمات مرقية قبل استشارة؟' 
        : 'Can I request services before consultation?',
      answer: language === 'ar'
        ? 'بالطبع، أخصص الجزء بناء على احتياجاتك، سواء كنت بحاجة إلى خدمة واحدة أو مجموعة شاملة من الخدمات المترابطة.'
        : 'Of course, I customize the part based on your needs, whether you need a single service or a comprehensive set of interconnected services.'
    },
    {
      question: language === 'ar'
        ? 'لست خبيرة خدماتها ولا بمئرة، هل يمكنني الاستفادة من خدماتها؟'
        : 'I\'m not an expert in services, can I benefit from your services?',
      answer: language === 'ar'
        ? 'نعم! أعمل مع الأفراد والمؤسسات بغض النظر عن خبرتها التقنية، وأقدم لهم المساعدة المناسبة لاحتياجاتهم المحددة.'
        : 'Yes! I work with individuals and institutions regardless of their technical expertise, providing them with appropriate assistance for their specific needs.'
    },
    {
      question: language === 'ar'
        ? 'هل يمكنني الاستفادة من خدماتك إن كنت طالباً أو باحثاً؟'
        : 'Can I benefit from your services if I\'m a student or researcher?',
      answer: language === 'ar'
        ? 'أقدم خدمات دعم متنوعة للطلاب والباحثين، تشمل: إعداد المقترحات البحثية، تحليل البيانات، إعداد العروض التقديمية، والاستشارات الأكاديمية.'
        : 'I provide various support services for students and researchers, including: research proposal preparation, data analysis, presentation preparation, and academic consulting.'
    },
    {
      question: language === 'ar'
        ? 'هل تقدم خدمات تدربية للأفراد أو الفرق؟'
        : 'Do you provide training services for individuals or teams?',
      answer: language === 'ar'
        ? 'نعم، أعمل على تطوير حقائب تدريبية متخصصة في مجالات مثل التحول الرقمي، تطوير الأداء، والتقنيات الإدارية الحديثة.'
        : 'Yes, I develop specialized training packages in areas such as digital transformation, performance development, and modern administrative techniques.'
    },
    {
      question: language === 'ar'
        ? 'هل يمكنني الاستعانة بك كمستشار داخلي لفترة معينة؟'
        : 'Can I hire you as an internal consultant for a specific period?',
      answer: language === 'ar'
        ? 'أنعم، أقدم خدمات الاستشارة المؤقتة أو الدعم المؤسسي، حيث أقدم المشورة الاحترافية والخدماتنا المتوسطة المدى.'
        : 'Yes, I provide temporary consulting services or institutional support, offering professional advice and medium-term services.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-arabic">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-arabic">
            {language === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتي'
              : 'Answers to the most common questions about my services'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-arabic text-lg font-medium flex-1">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0 ml-3" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0 ml-3" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 text-gray-300 font-arabic leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
