
import { 
  FileText, 
  Users, 
  Cog, 
  BarChart3, 
  Search, 
  Briefcase,
  Target,
  Building,
  Layers,
  Settings,
  TrendingUp,
  Award,
  BookOpen,
  UserCheck,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioSection = () => {
  const { language } = useLanguage();

  const serviceCategories = [
    {
      title: language === 'ar' ? 'خدمات تحليل السوق والتسويق الرقمي' : 'Market Analysis & Digital Marketing Services',
      icon: BarChart3,
      services: [
        language === 'ar' ? 'إدارة منصات التواصل الاجتماعي' : 'Social Media Management',
        language === 'ar' ? 'كتابة المحتوى الرقمي' : 'Digital Content Writing',
        language === 'ar' ? 'تحسين محركات البحث SEO' : 'SEO Optimization',
        language === 'ar' ? 'تخطيط الحملات الرقمية' : 'Digital Campaign Planning',
        language === 'ar' ? 'دراسة توجهات العملاء المستهدفين' : 'Target Customer Analysis',
        language === 'ar' ? 'تحليل السوق والمنافسين' : 'Market & Competitor Analysis'
      ]
    },
    {
      title: language === 'ar' ? 'خدمات الموارد البشرية وتطوير الكفاءات' : 'HR Services & Competency Development',
      icon: Users,
      services: [
        language === 'ar' ? 'إعداد الاستراتيجيات والسياسات' : 'Strategy & Policy Development',
        language === 'ar' ? 'برامج رفع القادة والموظفين الجدد' : 'Leadership & New Employee Programs',
        language === 'ar' ? 'تحليل فجوات الأداء وتقييم القدرات' : 'Performance Gap Analysis',
        language === 'ar' ? 'تصميم برامج التدريب والتطوير' : 'Training Program Design',
        language === 'ar' ? 'استشارات الموارد البشرية' : 'HR Consulting'
      ]
    },
    {
      title: language === 'ar' ? 'خدمات التحول الرقمي والتقنية الإدارية' : 'Digital Transformation & Administrative Technology',
      icon: Cog,
      services: [
        language === 'ar' ? 'بناء حلول تقنية مخصصة' : 'Custom Technology Solutions',
        language === 'ar' ? 'خدمة تصميم الجرافيك الاحترافي' : 'Professional Graphic Design',
        language === 'ar' ? 'تحليل البيانات والتقارير المؤسسية' : 'Data Analysis & Institutional Reports',
        language === 'ar' ? 'تحسين تجربة المستخدم للأنظمة' : 'System User Experience Optimization',
        language === 'ar' ? 'أتمتة العمليات الداخلية' : 'Internal Process Automation'
      ]
    },
    {
      title: language === 'ar' ? 'خدمات استشارية مهنية وتنظيمية' : 'Professional & Organizational Consulting',
      icon: Building,
      services: [
        language === 'ar' ? 'الإدارة والجودة المؤسسية' : 'Management & Institutional Quality',
        language === 'ar' ? 'إدارة الجودة (TQM) المتكاملة' : 'Total Quality Management (TQM)',
        language === 'ar' ? 'تحليل الأعمال' : 'Business Analysis',
        language === 'ar' ? 'استشارات الموارد البشرية' : 'HR Consulting',
        language === 'ar' ? 'التدريب في مجال الإدارة والأعمال' : 'Management & Business Training'
      ]
    },
    {
      title: language === 'ar' ? 'الخدمات البحثية والأكاديمية' : 'Research & Academic Services',
      icon: BookOpen,
      services: [
        language === 'ar' ? 'الإرشاد الأكاديمي' : 'Academic Guidance',
        language === 'ar' ? 'تصميم عروض تقديمية تحتية' : 'Professional Presentation Design',
        language === 'ar' ? 'خدمة التقييم الأكاديمي' : 'Academic Evaluation Services',
        language === 'ar' ? 'صياغة مقترحات البحث' : 'Research Proposal Writing',
        language === 'ar' ? 'تحليل البيانات وتفسير النتائج' : 'Data Analysis & Results Interpretation',
        language === 'ar' ? 'إعداد أدوات البحث والاستبيانات' : 'Research Tools & Survey Development'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic">
            {language === 'ar' ? 'محفظة أعمالي المتخصصة' : 'My Specialized Portfolio'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
            {language === 'ar' 
              ? 'مجموعة شاملة من الخدمات المتخصصة في مختلف مجالات التحول الرقمي والتطوير المؤسسي'
              : 'A comprehensive range of specialized services in various fields of digital transformation and institutional development'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-arabic flex-1">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#159bc7] to-[#4968aa] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-arabic text-sm leading-relaxed">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
