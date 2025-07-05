
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PartnersSection />
        <FAQSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
