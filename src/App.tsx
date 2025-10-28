import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FinancialServices from "./pages/industries/FinancialServices";
import Healthcare from "./pages/industries/Healthcare";
import MediaMarketing from "./pages/industries/MediaMarketing";
import Finance from "./pages/functions/Finance";
import HRFunction from "./pages/functions/HRFunction";
import Marketing from "./pages/functions/Marketing";
import Sales from "./pages/functions/Sales";
import DocumentProcessing from "./pages/use-cases/DocumentProcessing";
import DataExtraction from "./pages/use-cases/DataExtraction";
import CustomerSupport from "./pages/use-cases/CustomerSupport";
import ComplianceMonitoring from "./pages/use-cases/ComplianceMonitoring";
import UseCases from "./pages/UseCases";
import ContactUs from "./pages/ContactUs";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/media-marketing" element={<MediaMarketing />} />
          <Route path="/functions/finance" element={<Finance />} />
          <Route path="/functions/hr" element={<HRFunction />} />
          <Route path="/functions/marketing" element={<Marketing />} />
          <Route path="/functions/sales" element={<Sales />} />
          <Route path="/use-cases/document-processing" element={<DocumentProcessing />} />
          <Route path="/use-cases/data-extraction" element={<DataExtraction />} />
          <Route path="/use-cases/customer-support" element={<CustomerSupport />} />
          <Route path="/use-cases/compliance-monitoring" element={<ComplianceMonitoring />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/bfsi" element={<Navigate to="/industries/financial-services" replace />} />
          <Route path="/industries/insurance" element={<Navigate to="/industries/financial-services" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
