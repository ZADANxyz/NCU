import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import FooterSection from "@/pages/home/sections/FooterSection";
import BackToTopButton from "@/pages/home/sections/BackToTopButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Apply from "./pages/Apply";
import ApplyFinal from "./pages/ApplyFinal";
import Store from "./pages/Store";
import Media from "./pages/Media";
import Downloads from "./pages/Downloads";
import DownloadViewer from "./pages/downloads/DownloadViewer";
import Degrees from "./pages/Degrees";
import AssociateOfArts from "./pages/degrees/AssociateOfArts";
import BachelorOfArts from "./pages/degrees/BachelorOfArts";
import MasterOfArts from "./pages/degrees/MasterOfArts";
import Doctorate from "./pages/degrees/Doctorate";
import CourseViewer from "./pages/degrees/CourseViewer";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="/apply/final" element={<ApplyFinal />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/downloads" element={<Downloads />} />
                  <Route path="/downloads/:slug" element={<DownloadViewer />} />
                  <Route path="/degrees" element={<Degrees />} />
                  <Route path="/degrees/associate-of-arts" element={<AssociateOfArts />} />
                  <Route path="/degrees/bachelor-of-arts" element={<BachelorOfArts />} />
                  <Route path="/degrees/master-of-arts" element={<MasterOfArts />} />
                  <Route path="/degrees/doctorate" element={<Doctorate />} />
                  <Route path="/degrees/:degreeLevel/:slug" element={<CourseViewer />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/:username" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <FooterSection />
              <BackToTopButton />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;