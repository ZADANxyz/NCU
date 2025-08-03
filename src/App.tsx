
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Apply from "./pages/Apply";
import Store from "./pages/Store";
import Media from "./pages/Media";
import Downloads from "./pages/Downloads";
import StudentHandbook from "./pages/downloads/StudentHandbook";
import TuitionFees from "./pages/downloads/TuitionFees";
import GraduateStudies from "./pages/downloads/GraduateStudies";
import CourseCatalogue from "./pages/downloads/CourseCatalogue";
import Degrees from "./pages/Degrees";
import AssociateOfArts from "./pages/degrees/AssociateOfArts";
import BachelorOfArts from "./pages/degrees/BachelorOfArts";
import MasterOfArts from "./pages/degrees/MasterOfArts";
import Doctorate from "./pages/degrees/Doctorate";
import BiblicalStudies from "./pages/degrees/courses/BiblicalStudies";
import ChristianLeadership from "./pages/degrees/courses/ChristianLeadership";
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
            <Routes>
              <Route path="/" element={<><Header /><main className="flex-1"><Index /></main></>} />
              <Route path="/about" element={<><Header /><main className="flex-1"><About /></main></>} />
              <Route path="/contact" element={<><Header /><main className="flex-1"><Contact /></main></>} />
              <Route path="/donate" element={<><Header /><main className="flex-1"><Donate /></main></>} />
              <Route path="/apply" element={<><Header /><main className="flex-1"><Apply /></main></>} />
              <Route path="/store" element={<><Header /><main className="flex-1"><Store /></main></>} />
              <Route path="/media" element={<><Header /><main className="flex-1"><Media /></main></>} />
              <Route path="/downloads" element={<><Header /><main className="flex-1"><Downloads /></main></>} />
              <Route path="/downloads/student-handbook" element={<><Header /><main className="flex-1"><StudentHandbook /></main></>} />
              <Route path="/downloads/tuition-fees" element={<><Header /><main className="flex-1"><TuitionFees /></main></>} />
              <Route path="/downloads/graduate-studies" element={<><Header /><main className="flex-1"><GraduateStudies /></main></>} />
              <Route path="/downloads/course-catalogue" element={<><Header /><main className="flex-1"><CourseCatalogue /></main></>} />
              <Route path="/degrees" element={<main className="flex-1"><Degrees /></main>} />
              <Route path="/degrees/associate-of-arts" element={<main className="flex-1"><AssociateOfArts /></main>} />
              <Route path="/degrees/bachelor-of-arts" element={<main className="flex-1"><BachelorOfArts /></main>} />
              <Route path="/degrees/master-of-arts" element={<main className="flex-1"><MasterOfArts /></main>} />
              <Route path="/degrees/doctorate" element={<main className="flex-1"><Doctorate /></main>} />
              <Route path="/degrees/associate-of-arts/biblical-studies" element={<main className="flex-1"><BiblicalStudies /></main>} />
              <Route path="/degrees/associate-of-arts/christian-leadership" element={<main className="flex-1"><ChristianLeadership /></main>} />
              <Route path="*" element={<><Header /><main className="flex-1"><NotFound /></main></>} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
