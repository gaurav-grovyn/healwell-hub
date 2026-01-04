import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - in production, this would be proper auth
    if (credentials.email === 'admin@247care.com' && credentials.password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      toast({ title: 'Invalid credentials', description: 'Try admin@247care.com / admin123', variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen bg-hero-pattern flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
          <p className="text-muted-foreground">The 247 Care Management</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card rounded-2xl p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email"><Mail className="w-4 h-4 inline mr-2" />Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@247care.com"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password"><Lock className="w-4 h-4 inline mr-2" />Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <Button type="submit" variant="healthcare" size="lg" className="w-full">Sign In</Button>
          <p className="text-xs text-center text-muted-foreground">Demo: admin@247care.com / admin123</p>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
