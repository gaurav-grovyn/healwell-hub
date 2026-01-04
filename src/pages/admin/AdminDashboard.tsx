import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, MessageSquare, Settings, LogOut, Menu, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: MessageSquare, label: 'Queries', path: '/admin/queries' },
  { icon: Settings, label: 'Services', path: '/admin/services' },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Pending Queries', value: '45', change: '-5%' },
    { label: 'Active Services', value: '12', change: '+2' },
    { label: 'Bookings Today', value: '28', change: '+18%' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Admin Panel</span>
          </Link>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location.pathname === item.path ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary'}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">A</div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6">
                <div className="text-muted-foreground text-sm mb-1">{stat.label}</div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-primary">{stat.change}</div>
              </motion.div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
            <div className="text-muted-foreground text-center py-8">Connect to database to view real data</div>
          </div>
        </main>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default AdminDashboard;
