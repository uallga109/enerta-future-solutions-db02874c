import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import Partners from "./pages/Partners";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import Contacto from "./pages/Contacto";
import InstalacionesElectricas from "./pages/servicios/InstalacionesElectricas";
import EnergiasRenovables from "./pages/servicios/EnergiasRenovables";
import PuntosCargaVE from "./pages/servicios/PuntosCargaVE";
import Climatizacion from "./pages/servicios/Climatizacion";
import GestionEnergetica from "./pages/servicios/GestionEnergetica";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios/instalaciones-electricas" element={<InstalacionesElectricas />} />
          <Route path="/servicios/energias-renovables" element={<EnergiasRenovables />} />
          <Route path="/servicios/puntos-carga-ve" element={<PuntosCargaVE />} />
          <Route path="/servicios/climatizacion" element={<Climatizacion />} />
          <Route path="/servicios/gestion-energetica" element={<GestionEnergetica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
