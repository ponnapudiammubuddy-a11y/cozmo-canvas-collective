import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { 
  UtensilsCrossed, 
  CalendarDays, 
  Users,
  TrendingUp
} from 'lucide-react';

interface Stats {
  menuItems: number;
  categories: number;
  pendingBookings: number;
  totalBookings: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    menuItems: 0,
    categories: 0,
    pendingBookings: 0,
    totalBookings: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [menuItemsRes, categoriesRes, bookingsRes, pendingBookingsRes] = await Promise.all([
        supabase.from('menu_items').select('id', { count: 'exact', head: true }),
        supabase.from('menu_categories').select('id', { count: 'exact', head: true }),
        supabase.from('bookings').select('id', { count: 'exact', head: true }),
        supabase.from('bookings').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
      ]);

      setStats({
        menuItems: menuItemsRes.count || 0,
        categories: categoriesRes.count || 0,
        totalBookings: bookingsRes.count || 0,
        pendingBookings: pendingBookingsRes.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Menu Items',
      value: stats.menuItems,
      icon: UtensilsCrossed,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: TrendingUp,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: CalendarDays,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      title: 'Pending Bookings',
      value: stats.pendingBookings,
      icon: Users,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-display text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome to CE Hospitality Admin Panel</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => (
            <Card key={stat.title} className="bg-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="h-8 w-16 bg-muted animate-pulse rounded" />
                ) : (
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a 
                href="/admin/menu" 
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <UtensilsCrossed className="w-5 h-5 text-primary" />
                <span>Manage Menu Items</span>
              </a>
              <a 
                href="/admin/bookings" 
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <CalendarDays className="w-5 h-5 text-primary" />
                <span>View Bookings</span>
              </a>
              <a 
                href="/admin/users" 
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Users className="w-5 h-5 text-primary" />
                <span>Manage Users</span>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Activity tracking coming soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
