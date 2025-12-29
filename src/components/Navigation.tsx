import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about',
    subItems: [
      { name: 'Company Overview', href: '/about#overview' },
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Our History', href: '/about#history' },
      { name: 'Leadership', href: '/about#leadership' },
    ]
  },
  { 
    name: 'Menu', 
    href: '/menu',
    subItems: [
      { name: 'Coffee', href: '/menu#coffee' },
      { name: 'Beverages', href: '/menu#beverages' },
      { name: 'Starters', href: '/menu#starters' },
      { name: 'Main Course', href: '/menu#main' },
      { name: 'Desserts', href: '/menu#desserts' },
      { name: 'Chef Specials', href: '/menu#specials' },
    ]
  },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Offers', href: '/offers' },
  { name: 'Booking', href: '/booking' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="hidden lg:block border-b border-border/30">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+123 456 7890</span>
            </a>
            <a href="mailto:info@cehospitality.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@cehospitality.com</span>
            </a>
          </div>
          <div className="text-muted-foreground">
            Open Daily: 8:00 AM – 11:00 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display text-xl text-primary-foreground font-bold">CE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg text-foreground leading-tight">C E Hospitality</h1>
              <p className="text-xs text-primary">Cozmo Cafe Bistro Lounge</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-xl py-2 animate-fade-in">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <Link to="/booking">Reserve a Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-foreground hover:text-primary transition-colors border-b border-border/30"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="mt-4">
              <Button variant="gold" className="w-full" asChild>
                <Link to="/booking" onClick={() => setIsOpen(false)}>Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
