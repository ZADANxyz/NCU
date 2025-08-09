import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProfileAuth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  
  const { login, signup } = useCart();
  const { toast } = useToast();

  const handleLogin = async () => {
    if (!email || !password) {
      toast({ title: "Missing Information", description: "Please enter both email and password.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await login(email, password);
    if (error) {
      toast({ title: "Login Failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Login Successful", description: "Welcome back!" });
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      toast({ title: "Missing Information", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: "Password Mismatch", description: "Passwords do not match.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await signup(email, password);
    if (error) {
      toast({ title: "Signup Failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Account Created", description: "Please check your email to verify your account." });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4 p-4 bg-white/40 dark:bg-black/30 rounded-xl border border-gold/40">
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email / Username
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>
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

        {mode === 'signup' && (
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
        )}

        {mode === 'login' ? (
          <>
            <Button onClick={handleLogin} className="w-full" disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
            </Button>
            <button onClick={() => setMode('signup')} className="w-full text-sm text-[#B19528] hover:underline">
              Don't have an account? Sign Up
            </button>
          </>
        ) : (
          <>
            <Button onClick={handleSignup} className="w-full" disabled={loading}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
            <button onClick={() => setMode('login')} className="w-full text-sm text-[#B19528] hover:underline">
              Already have an account? Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileAuth;