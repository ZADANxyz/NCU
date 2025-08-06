import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface CartAuthProps {
  isDark: boolean;
  onEmailSet: (email: string) => void;
  onAuthComplete: () => void;
}

const CartAuth: React.FC<CartAuthProps> = ({ isDark, onEmailSet, onAuthComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mode, setMode] = useState<'initial' | 'signup' | 'login' | 'guest'>('initial');
  const [loading, setLoading] = useState(false);
  
  const { user, profile, login, signup } = useCart();
  const { toast } = useToast();

  if (user) {
    return (
      <div className="p-4 bg-white/40 dark:bg-black/30 rounded-xl border border-gold/40">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          User is logged in as: <span className="font-medium text-[#B19528]">
            {profile?.first_name ? `${profile.first_name} (${user.email})` : user.email}
          </span>
        </div>
      </div>
    );
  }

  const handleEmailChange = (value: string) => {
    setEmail(value);
    onEmailSet(value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    const { error } = await login(email, password);
    
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Login Successful",
        description: "Welcome back!"
      });
      onAuthComplete();
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    const { error } = await signup(email, password);
    
    if (error) {
      toast({
        title: "Signup Failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Account Created",
        description: "Please check your email to verify your account."
      });
      onAuthComplete();
    }
    setLoading(false);
  };

  const handleContinueAsGuest = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email for receipt information.",
        variant: "destructive"
      });
      return;
    }
    setMode('guest');
    onAuthComplete();
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white/40 dark:bg-black/30 rounded-xl border border-gold/40">
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address *
            </label>
            <div className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Enter your email"
                className="flex-1"
                disabled={loading}
              />
              {mode === 'initial' && email && (
                <Button
                  onClick={() => setMode('login')}
                  variant="outline"
                  size="sm"
                  disabled={loading}
                  className="whitespace-nowrap"
                >
                  Login
                </Button>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              We need your email for receipt and order tracking purposes.
            </p>
          </div>

          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  disabled={loading}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleSignup}
                  className="flex-1"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </div>
              <button
                onClick={handleContinueAsGuest}
                className="w-full text-sm text-[#B19528] hover:underline"
                disabled={loading}
              >
                Continue As Guest
              </button>
            </>
          )}

          {mode === 'login' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={loading}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleLogin}
                  className="flex-1"
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Login'}
                </Button>
              </div>
              <button
                onClick={handleContinueAsGuest}
                className="w-full text-sm text-[#B19528] hover:underline"
                disabled={loading}
              >
                Continue As Guest
              </button>
            </>
          )}

          {mode === 'initial' && email && (
            <>
              <Button
                onClick={() => setMode('signup')}
                variant="outline"
                className="w-full"
                disabled={loading}
              >
                Create New Account
              </Button>
              <button
                onClick={handleContinueAsGuest}
                className="w-full text-sm text-[#B19528] hover:underline"
                disabled={loading}
              >
                Continue As Guest
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartAuth;