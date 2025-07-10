
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import MarketAnalysisPage from "./pages/MarketAnalysisPage";
import HRServicesPage from "./pages/HRServicesPage";
import DigitalTransformationPage from "./pages/DigitalTransformationPage";
import OrganizationalConsultingPage from "./pages/OrganizationalConsultingPage";
import ResearchAcademicPage from "./pages/ResearchAcademicPage";
import { ThemeProvider } from "@/contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <LoadingScreen />
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/market-analysis" element={<MarketAnalysisPage />} />
            <Route path="/hr-services" element={<HRServicesPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/organizational-consulting" element={<OrganizationalConsultingPage />} />
            <Route path="/research-academic" element={<ResearchAcademicPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
