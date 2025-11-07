import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import CheckinPage from "./pages/CheckinPage";
import OvernightPage from "./pages/OvernightPage";
import ApplicationPage from "./pages/ApplicationPage";
import PointsPage from "./pages/PointsPage";
import MaintenancePage from "./pages/MaintenancePage";
import FormsPage from "./pages/FormsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/checkin" element={<CheckinPage />} />
              <Route path="/overnight" element={<OvernightPage />} />
              <Route path="/application" element={<ApplicationPage />} />
              <Route path="/points" element={<PointsPage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route path="/forms" element={<FormsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
