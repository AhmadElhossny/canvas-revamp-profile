
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StrategicSection from '@/components/StrategicSection';
import WhoAmISection from '@/components/WhoAmISection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <StrategicSection />
        <WhoAmISection />
        <ServicesSection />
        <PartnersSection />
        <FAQSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
