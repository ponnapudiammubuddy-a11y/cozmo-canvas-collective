import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import { MenuItemCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

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
  { id: 1, name: 'Signature Espresso', description: 'Bold single-origin espresso with rich crema.', price: '$4.50', image: signatureCoffee, category: 'coffee' },
  { id: 2, name: 'Artisan Latte', description: 'Velvety steamed milk with espresso and latte art.', price: '$6.50', image: signatureCoffee, category: 'coffee' },
  { id: 3, name: 'Cappuccino Classico', description: 'Traditional Italian cappuccino with perfect foam.', price: '$5.50', image: signatureCoffee, category: 'coffee' },
  { id: 4, name: 'Cold Brew Reserve', description: '24-hour cold-steeped coffee, smooth and bold.', price: '$6.00', image: signatureCoffee, category: 'coffee' },
  
  // Beverages
  { id: 5, name: 'Sunset Spritzer', description: 'Citrus, passion fruit, and sparkling soda.', price: '$8.00', image: mocktail, category: 'beverages' },
  { id: 6, name: 'Berry Bliss', description: 'Mixed berries blended with mint and lime.', price: '$7.50', image: mocktail, category: 'beverages' },
  { id: 7, name: 'Tropical Paradise', description: 'Mango, pineapple, and coconut cream.', price: '$8.50', image: mocktail, category: 'beverages' },
  { id: 8, name: 'Ginger Fizz', description: 'Fresh ginger, lemon, and sparkling water.', price: '$6.50', image: mocktail, category: 'beverages' },
  
  // Starters
  { id: 9, name: 'Truffle Arancini', description: 'Crispy risotto balls with truffle aioli.', price: '$14.00', image: starters, category: 'starters' },
  { id: 10, name: 'Bruschetta Trio', description: 'Classic tomato, mushroom, and olive tapenade.', price: '$12.00', image: starters, category: 'starters' },
  { id: 11, name: 'Prawn Tempura', description: 'Light battered prawns with sweet chili dip.', price: '$16.00', image: starters, category: 'starters' },
  { id: 12, name: 'Mezze Platter', description: 'Hummus, falafel, pita, and fresh vegetables.', price: '$18.00', image: starters, category: 'starters' },
  
  // Main Course
  { id: 13, name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter sauce.', price: '$28.00', image: chefSpecial, category: 'main' },
  { id: 14, name: 'Lamb Rack', description: 'Herb-crusted lamb with mint jus.', price: '$34.00', image: chefSpecial, category: 'main' },
  { id: 15, name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms.', price: '$22.00', image: chefSpecial, category: 'main' },
  { id: 16, name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction.', price: '$30.00', image: chefSpecial, category: 'main' },
  
  // Desserts
  { id: 17, name: 'Tiramisu Royale', description: 'Classic Italian with espresso-soaked ladyfingers.', price: '$12.00', image: dessert, category: 'desserts' },
  { id: 18, name: 'Chocolate Fondant', description: 'Warm chocolate cake with molten center.', price: '$14.00', image: dessert, category: 'desserts' },
  { id: 19, name: 'Crème Brûlée', description: 'Vanilla custard with caramelized sugar top.', price: '$11.00', image: dessert, category: 'desserts' },
  { id: 20, name: 'Panna Cotta', description: 'Italian cream dessert with berry compote.', price: '$10.00', image: dessert, category: 'desserts' },
  
  // Chef Specials
  { id: 21, name: 'Beef Tenderloin', description: 'Premium steak with red wine reduction.', price: '$38.00', image: chefSpecial, category: 'specials' },
  { id: 22, name: 'Lobster Thermidor', description: 'Classic French preparation with brandy cream.', price: '$48.00', image: chefSpecial, category: 'specials' },
  { id: 23, name: 'Wagyu Burger', description: 'A5 Wagyu patty with truffle mayo.', price: '$32.00', image: chefSpecial, category: 'specials' },
  { id: 24, name: 'Seafood Tower', description: 'Fresh oysters, prawns, and crab.', price: '$65.00', image: chefSpecial, category: 'specials' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Culinary Excellence
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Discover our carefully curated selection of dishes, crafted with the finest 
            ingredients and served with passion.
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

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
            We cater to various dietary requirements. Please inform our staff about any 
            allergies or dietary restrictions. Vegetarian, vegan, and gluten-free options are available.
          </p>
          <p className="text-sm text-muted-foreground">
            Prices are subject to service charge and applicable taxes. 
            Menu items may vary seasonally.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Menu;
