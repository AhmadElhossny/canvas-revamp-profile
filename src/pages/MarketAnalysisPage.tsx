
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart3, 
  Share2, 
  PenTool, 
  Search, 
  Target, 
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

const MarketAnalysisContent = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Share2,
      title: language === 'ar' ? 'إدارة منصات التواصل الاجتماعي' : 'Social Media Management',
      description: language === 'ar' 
        ? 'إدارة شاملة لحسابات التواصل الاجتماعي مع استراتيجيات محتوى مبتكرة وتفاعل فعال مع الجمهور المستهدف'
        : 'Comprehensive management of social media accounts with innovative content strategies and effective audience engagement'
    },
    {
      icon: PenTool,
      title: language === 'ar' ? 'كتابة المحتوى الرقمي' : 'Digital Content Writing',
      description: language === 'ar'
        ? 'إنتاج محتوى رقمي عالي الجودة يجذب القراء ويحقق أهداف التسويق مع مراعاة قواعد السيو'
        : 'High-quality digital content production that attracts readers and achieves marketing goals while following SEO best practices'
    },
    {
      icon: Search,
      title: language === 'ar' ? 'تحسين محركات البحث SEO' : 'SEO Optimization',
      description: language === 'ar'
        ? 'تحسين مواقع الويب لمحركات البحث لزيادة الظهور العضوي وجذب المزيد من الزوار المستهدفين'
        : 'Website optimization for search engines to increase organic visibility and attract more targeted visitors'
    },
    {
      icon: Target,
      title: language === 'ar' ? 'تخطيط الحملات الرقمية' : 'Digital Campaign Planning',
      description: language === 'ar'
        ? 'تصميم وتنفيذ حملات تسويقية رقمية مدروسة تحقق أعلى معدلات التحويل والعائد على الاستثمار'
        : 'Design and execute strategic digital marketing campaigns that achieve the highest conversion rates and ROI'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'دراسة توجهات العملاء المستهدفين' : 'Target Customer Analysis',
      description: language === 'ar'
        ? 'تحليل عميق لسلوك العملاء المستهدفين وتفضيلاتهم لبناء استراتيجيات تسويقية أكثر فعالية'
        : 'Deep analysis of target customer behavior and preferences to build more effective marketing strategies'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'تحليل السوق والمنافسين' : 'Market & Competitor Analysis',
      description: language === 'ar'
        ? 'دراسة شاملة للسوق والمنافسين لتحديد الفرص والتهديدات وبناء ميزة تنافسية مستدامة'
        : 'Comprehensive market and competitor study to identify opportunities and threats and build sustainable competitive advantage'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <BarChart3 className="text-white w-10 h-10" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-tajwal">
              {language === 'ar' ? 'خدمات تحليل السوق والتسويق الرقمي' : 'Market Analysis & Digital Marketing Services'}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-tajwal">
              {language === 'ar'
                ? 'مجموعة شاملة من الخدمات المتخصصة في تحليل السوق والتسويق الرقمي'
                : 'A comprehensive range of specialized services in market analysis and digital marketing'
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-md bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-[#159bc7] to-[#4968aa] p-3 rounded-xl w-14 h-14 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <service.icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-tajwal text-center leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-tajwal leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketAnalysisPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <MarketAnalysisContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default MarketAnalysisPage;
