import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FinancialServices from "./pages/industries/FinancialServices";
import Healthcare from "./pages/industries/Healthcare";
import Retail from "./pages/industries/Retail";
import Manufacturing from "./pages/industries/Manufacturing";
import Insurance from "./pages/industries/Insurance";
import RealEstate from "./pages/industries/RealEstate";
import Logistics from "./pages/industries/Logistics";
import HR from "./pages/industries/HR";
import IT from "./pages/functions/IT";
import Finance from "./pages/functions/Finance";
import Support from "./pages/functions/Support";
import HRFunction from "./pages/functions/HRFunction";
import Marketing from "./pages/functions/Marketing";
import Sales from "./pages/functions/Sales";
import RevenueOperations from "./pages/functions/RevenueOperations";
import Product from "./pages/functions/Product";
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
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/hr" element={<HR />} />
          <Route path="/functions/it" element={<IT />} />
          <Route path="/functions/finance" element={<Finance />} />
          <Route path="/functions/support" element={<Support />} />
          <Route path="/functions/hr" element={<HRFunction />} />
          <Route path="/functions/marketing" element={<Marketing />} />
          <Route path="/functions/sales" element={<Sales />} />
          <Route path="/functions/revenue-operations" element={<RevenueOperations />} />
          <Route path="/functions/product" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/security" element={<Security />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/bfsi" element={<Navigate to="/industries/financial-services" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
