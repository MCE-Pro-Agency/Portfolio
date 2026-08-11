import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PortfolioSites from "./pages/PortfolioSites.tsx";
import PortfolioLogos from "./pages/PortfolioLogos.tsx";
import PortfolioVideos from "./pages/PortfolioVideos.tsx";
import PortfolioFlyers from "./pages/PortfolioFlyers.tsx";
import Realisations from "./pages/Realisations.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio/sites" element={<PortfolioSites />} />
          <Route path="/portfolio/logos" element={<PortfolioLogos />} />
          <Route path="/portfolio/videos" element={<PortfolioVideos />} />
          <Route path="/portfolio/flyers" element={<PortfolioFlyers />} />
          <Route path="/realisations" element={<Realisations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
