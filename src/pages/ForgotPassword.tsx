import { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="relative z-10 w-full max-w-md">
          <div className="glass-card p-8 rounded-2xl border border-green-400/30 text-center">
            <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>
            <p className="text-muted-foreground mb-6">
              We've sent a password reset link to <span className="text-green-400">{email}</span>
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full bg-green-400 text-black hover:bg-green-500">
                <Link to="/login">Back to Login</Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="w-full border-gray-700 hover:bg-gray-800"
              >
                Try Different Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Login */}
        <div className="mb-8">
          <Link 
            to="/login" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Link>
        </div>

        {/* Forgot Password Card */}
        <div className="glass-card p-8 rounded-2xl border border-cyan-400/30">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Reset Form */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Reset Button */}
            <Button 
              type="submit" 
              className="w-full bg-cyan-400 text-black hover:bg-cyan-500 py-3 font-semibold"
            >
              Send Reset Link
            </Button>
          </form>

          {/* Back to Login Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Remember your password?{' '}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
