import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  BrowserRouter, 
  Routes, 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Opportunities from "./pages/Opportunities";
import Projects from "./pages/Projects";
import DNAxOSCI from "./pages/DNAxOSCI";
import NotFound from "./pages/NotFound";
import AuthCallback from "./pages/AuthCallback";
import ProtectedRoute from "./components/ProtectedRoute";
import Rewards from "./pages/Rewards";
import Internships from "./pages/Internships";
import Hackathons from "./pages/Hackathons";
import JobOpenings from "./pages/JobOpenings";
import FreeResources from "./pages/FreeResources";
import Mentorship from "./pages/Mentorship";
import Workshops from "./pages/Workshops";

const queryClient = new QueryClient();

import { UserProvider } from './contexts/user-context';

import MobileNav from './components/MobileNav';

const Layout = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Outlet />
      <MobileNav />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route 
        path="/events" 
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        } 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/hackathons" element={<Hackathons />} />
      <Route path="/job-openings" element={<JobOpenings />} />
      <Route path="/free-resources" element={<FreeResources />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dna-osci" element={<DNAxOSCI />} />
      <Route 
        path="/rewards" 
        element={
          <ProtectedRoute>
            <Rewards />
          </ProtectedRoute>
        }
      />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
