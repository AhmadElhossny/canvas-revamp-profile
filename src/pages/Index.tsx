
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen font-arabic" dir="rtl">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
};

export default Index;
