
import { Brain, Users, Zap, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'استراتيجية التحول الرقمي',
      description: 'وضع خطط شاملة للتحول الرقمي وتطوير الاستراتيجيات المؤسسية المتقدمة'
    },
    {
      icon: Users,
      title: 'إدارة التغيير',
      description: 'قيادة عمليات التغيير المؤسسي وتطوير القدرات البشرية والتنظيمية'
    },
    {
      icon: Zap,
      title: 'تحسين العمليات',
      description: 'تحليل وتطوير العمليات الداخلية لتحقيق أقصى كفاءة وفعالية'
    },
    {
      icon: Target,
      title: 'التخطيط الاستراتيجي',
      description: 'وضع الخطط طويلة المدى وتحديد الأهداف الاستراتيجية للمؤسسات'
    },
    {
      icon: TrendingUp,
      title: 'تطوير الأداء',
      description: 'قياس وتحليل الأداء المؤسسي وتطوير مؤشرات الأداء الرئيسية'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic">
            خدماتي المتخصصة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-arabic">
            أقدم مجموعة شاملة من الخدمات الاستشارية المتخصصة في التحول الرقمي والتطوير المؤسسي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
