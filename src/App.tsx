
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import Store from "./pages/Store";
import Media from "./pages/Media";
import Downloads from "./pages/Downloads";
import StudentHandbook from "./pages/downloads/StudentHandbook";
import TuitionFees from "./pages/downloads/TuitionFees";
import GraduateStudies from "./pages/downloads/GraduateStudies";
import CourseCatalogue from "./pages/downloads/CourseCatalogue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
                <Route path="/store" element={<Store />} />
                <Route path="/media" element={<Media />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/downloads/student-handbook" element={<StudentHandbook />} />
                <Route path="/downloads/tuition-fees" element={<TuitionFees />} />
                <Route path="/downloads/graduate-studies" element={<GraduateStudies />} />
                <Route path="/downloads/course-catalogue" element={<CourseCatalogue />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
