
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-primary flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-arabic leading-tight">
              مستشار في التحول الرقمي
              <span className="block text-3xl lg:text-4xl mt-2 text-blue-200">
                وإدارة التجديد المؤسسية والحكومية
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 font-arabic leading-relaxed">
              أقدم خدمات استشارية متكاملة في التحول الرقمي والتجديد المؤسسي، بريادة تقنيات المعلومات الأردنية، مساعدتك في تحسين الأداء المؤسسي وخدمة العملاء بجودة عالية وسرعة فائقة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-arabic text-lg px-8 py-6"
              >
                اطلع على أعمالي
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-arabic text-lg px-8 py-6"
              >
                تواصل معي
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
              <img
                src="/lovable-uploads/c6772f8d-51fc-453a-991c-20066b7dbd00.png"
                alt="مستشار التحول الرقمي"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
