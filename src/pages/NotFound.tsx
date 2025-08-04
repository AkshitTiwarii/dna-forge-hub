import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pb-20 md:pb-0">
      <div className="text-center glass-card p-12 rounded-2xl border border-gray-800">
        <h1 className="text-6xl font-bold mb-6">
          <span className="gradient-text">404</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105"
        >
          <Home className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
