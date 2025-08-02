import { useState } from 'react';
import { Eye, EyeOff, Github, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { signIn, signInWithGithub } from '@/lib/auth';
import { supabase } from '@/lib/supabase';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) throw error;

      toast({
        title: "Success",
        description: "Logged in successfully!",
      });
      
      // Redirect to home page after successful login
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to login",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to DNA Forge Hub
          </Link>
        </div>

        {/* Login Card */}
        <div className="glass-card p-8 rounded-2xl border border-green-400/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-400">INIT</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your DNA Forge Hub account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-400 bg-gray-800 border-gray-600 rounded focus:ring-green-400"
                />
                <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-green-400 hover:text-green-300">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full bg-green-400 text-black hover:bg-green-500 py-3 font-semibold"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-sm text-muted-foreground">or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Social Login */}
          <Button
            variant="outline"
            className="w-full border-gray-700 hover:bg-gray-800 py-3"
            onClick={async () => {
              try {
                const { data, error } = await supabase.auth.signInWithOAuth({
                  provider: 'github',
                  options: {
                    redirectTo: `${window.location.origin}/auth/callback`
                  }
                });
                
                if (error) throw error;
                
                // Redirect will happen automatically
              } catch (error: any) {
                toast({
                  title: "Error",
                  description: error.message || "Failed to sign in with GitHub",
                  variant: "destructive"
                });
              }
            }}
          >
            <Github className="h-5 w-5 mr-2" />
            Continue with GitHub
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-400 hover:text-green-300 font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
