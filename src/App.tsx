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
import ContactUs from "./pages/ContactUs";
import Security from "./pages/Security";
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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/security" element={<Security />} />
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
