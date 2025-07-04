
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
    },
    {
      question: language === 'ar'
        ? 'ما هي مدة تنفيذ المشاريع الاستشارية؟'
        : 'What is the duration of consulting projects?',
      answer: language === 'ar'
        ? 'تختلف مدة المشاريع حسب طبيعتها وحجمها، من بضعة أسابيع للاستشارات البسيطة إلى عدة أشهر للمشاريع المعقدة.'
        : 'Project duration varies depending on their nature and size, from a few weeks for simple consultations to several months for complex projects.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-right">
          <h2 className="text-4xl font-bold mb-4 font-tajwal bg-gradient-to-r from-[#159bc7] to-[#4968aa] bg-clip-text text-transparent">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-tajwal">
            {language === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتي'
              : 'Answers to the most common questions about my services'
            }
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${Math.floor(index/2) * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 flex items-center justify-between group"
              >
                <span className="font-tajwal text-lg font-medium flex-1 text-gray-800 group-hover:text-gray-900 leading-relaxed">
                  {faq.question}
                </span>
                <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-2 rounded-full ml-3 group-hover:scale-110 transition-transform duration-200">
                  {openFAQ === index ? (
                    <ChevronUp className="w-4 h-4 text-white" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 text-gray-600 font-tajwal leading-relaxed animate-fade-in border-t border-gray-100">
                  <div className="pt-4">
                    {faq.answer}
                  </div>
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
