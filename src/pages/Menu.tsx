import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import { MenuItemCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import SEO from '@/components/SEO';

import signatureCoffee from '@/assets/signature-coffee.jpg';
import mocktail from '@/assets/mocktail.jpg';
import dessert from '@/assets/dessert.jpg';
import chefSpecial from '@/assets/chef-special.jpg';
import starters from '@/assets/starters.jpg';

const menuCategories = [
  { id: 'all', name: 'All Items' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'starters', name: 'Starters' },
  { id: 'main', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'specials', name: 'Chef Specials' },
];

const menuItems = [
  // Coffee
  { id: 1, name: 'Signature Espresso', description: 'Bold single-origin espresso with rich crema.', price: '₹180', image: signatureCoffee, category: 'coffee' },
  { id: 2, name: 'Artisan Latte', description: 'Velvety steamed milk with espresso and latte art.', price: '₹250', image: signatureCoffee, category: 'coffee' },
  { id: 3, name: 'Cappuccino Classico', description: 'Traditional Italian cappuccino with perfect foam.', price: '₹220', image: signatureCoffee, category: 'coffee' },
  { id: 4, name: 'Cold Brew Reserve', description: '24-hour cold-steeped coffee, smooth and bold.', price: '₹280', image: signatureCoffee, category: 'coffee' },
  
  // Beverages
  { id: 5, name: 'Sunset Spritzer', description: 'Citrus, passion fruit, and sparkling soda.', price: '₹320', image: mocktail, category: 'beverages' },
  { id: 6, name: 'Berry Bliss', description: 'Mixed berries blended with mint and lime.', price: '₹290', image: mocktail, category: 'beverages' },
  { id: 7, name: 'Tropical Paradise', description: 'Mango, pineapple, and coconut cream.', price: '₹350', image: mocktail, category: 'beverages' },
  { id: 8, name: 'Ginger Fizz', description: 'Fresh ginger, lemon, and sparkling water.', price: '₹260', image: mocktail, category: 'beverages' },
  
  // Starters
  { id: 9, name: 'Truffle Arancini', description: 'Crispy risotto balls with truffle aioli.', price: '₹450', image: starters, category: 'starters' },
  { id: 10, name: 'Bruschetta Trio', description: 'Classic tomato, mushroom, and olive tapenade.', price: '₹380', image: starters, category: 'starters' },
  { id: 11, name: 'Prawn Tempura', description: 'Light battered prawns with sweet chili dip.', price: '₹520', image: starters, category: 'starters' },
  { id: 12, name: 'Mezze Platter', description: 'Hummus, falafel, pita, and fresh vegetables.', price: '₹580', image: starters, category: 'starters' },
  
  // Main Course
  { id: 13, name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter sauce.', price: '₹890', image: chefSpecial, category: 'main' },
  { id: 14, name: 'Lamb Rack', description: 'Herb-crusted lamb with mint jus.', price: '₹1080', image: chefSpecial, category: 'main' },
  { id: 15, name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms.', price: '₹680', image: chefSpecial, category: 'main' },
  { id: 16, name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction.', price: '₹950', image: chefSpecial, category: 'main' },
  
  // Desserts
  { id: 17, name: 'Tiramisu Royale', description: 'Classic Italian with espresso-soaked ladyfingers.', price: '₹380', image: dessert, category: 'desserts' },
  { id: 18, name: 'Chocolate Fondant', description: 'Warm chocolate cake with molten center.', price: '₹420', image: dessert, category: 'desserts' },
  { id: 19, name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar top.', price: '₹350', image: dessert, category: 'desserts' },
  { id: 20, name: 'Panna Cotta', description: 'Italian cream dessert with berry compote.', price: '₹320', image: dessert, category: 'desserts' },
  
  // Chef Specials
  { id: 21, name: 'Beef Tenderloin', description: 'Premium steak with red wine reduction.', price: '₹1200', image: chefSpecial, category: 'specials' },
  { id: 22, name: 'Lobster Thermidor', description: 'Classic French preparation with brandy cream.', price: '₹1580', image: chefSpecial, category: 'specials' },
  { id: 23, name: 'Wagyu Burger', description: 'A5 Wagyu patty with truffle mayo.', price: '₹980', image: chefSpecial, category: 'specials' },
  { id: 24, name: 'Seafood Tower', description: 'Fresh oysters, prawns, and crab.', price: '₹2100', image: chefSpecial, category: 'specials' },
];

// Menu Schema for SEO
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cozmo Cafe Bistro Lounge Menu",
  "description": "Full menu of coffee, beverages, starters, main course, desserts and chef specials at Cozmo Cafe Hyderabad",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Coffee",
      "description": "Premium artisan coffee selection",
      "hasMenuItem": menuItems.filter(i => i.category === 'coffee').map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('₹', ''),
          "priceCurrency": "INR"
        }
      }))
    },
    {
      "@type": "MenuSection",
      "name": "Beverages & Mocktails",
      "description": "Refreshing mocktails and beverages",
      "hasMenuItem": menuItems.filter(i => i.category === 'beverages').map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('₹', ''),
          "priceCurrency": "INR"
        }
      }))
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Menu | Cozmo Cafe Bistro Lounge Hyderabad - Coffee, Food & Drinks"
        description="Explore our menu at Cozmo Cafe Hyderabad. Premium coffee, refreshing mocktails, delicious starters, gourmet main course, desserts & chef specials. Best cafe menu in Banjara Hills."
        keywords="cafe menu Hyderabad, coffee menu, mocktails menu, restaurant menu Banjara Hills, best food Hyderabad, cafe food prices, lounge menu, desserts Hyderabad"
        canonicalUrl="https://cozmocafe.com/menu"
        structuredData={menuSchema}
      />
      
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Culinary Excellence in Hyderabad
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Discover our carefully curated selection of artisan coffee, refreshing beverages, 
            gourmet dishes, and delectable desserts at Cozmo Cafe Bistro Lounge Hyderabad.
          </p>
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <Button variant="gold-outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <Section>
        <nav aria-label="Menu categories" className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard 
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              category={menuCategories.find(c => c.id === item.category)?.name}
            />
          ))}
        </div>
      </Section>

      {/* Special Notes */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Dietary Information</h2>
          <p className="text-muted-foreground mb-6">
            We cater to various dietary requirements at our Hyderabad cafe. Please inform our staff about any 
            allergies or dietary restrictions. Vegetarian, vegan, Jain, and gluten-free options are available.
          </p>
          <p className="text-sm text-muted-foreground">
            Prices are subject to GST and service charge. 
            Menu items may vary seasonally. Best cafe menu prices in Hyderabad.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Menu;
