import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicPortal from "./pages/PublicPortal";
import AdminDashboard from "./pages/AdminDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import NGODashboard from "./pages/NGODashboard";
import VerifierDashboard from "./pages/VerifierDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/public" element={<PublicPortal />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<AdminDashboard />} />
          <Route path="/admin/verification" element={<AdminDashboard />} />
          <Route path="/admin/market" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
          <Route path="/company/marketplace" element={<CompanyDashboard />} />
          <Route path="/company/portfolio" element={<CompanyDashboard />} />
          <Route path="/company/trading" element={<CompanyDashboard />} />
          <Route path="/ngo/dashboard" element={<NGODashboard />} />
          <Route path="/ngo/projects" element={<NGODashboard />} />
          <Route path="/ngo/upload" element={<NGODashboard />} />
          <Route path="/ngo/credits" element={<NGODashboard />} />
          <Route path="/verifier/dashboard" element={<VerifierDashboard />} />
          <Route path="/developer/dashboard" element={<NGODashboard />} />
          <Route path="/buyer/dashboard" element={<CompanyDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
