
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipe" element={<div className="pt-32 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Équipe - En construction</h1></div>} />
            <Route path="/galerie" element={<div className="pt-32 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Galerie - En construction</h1></div>} />
            <Route path="/avis" element={<div className="pt-32 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Avis - En construction</h1></div>} />
            <Route path="/contact" element={<div className="pt-32 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Contact - En construction</h1></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
