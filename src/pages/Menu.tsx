import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Download, Coffee, Snowflake, Leaf, Wine, IceCream } from 'lucide-react';
import SEO from '@/components/SEO';

// Import category images
import classicHotImg from '@/assets/menu/classic-hot.jpg';
import cafeSpecialHotImg from '@/assets/menu/cafe-special-hot.jpg';
import icedCoffeeImg from '@/assets/menu/iced-coffee.jpg';
import coldCoffeeImg from '@/assets/menu/cold-coffee.jpg';
import icedTeasImg from '@/assets/menu/iced-teas.jpg';
import espressoInfusionImg from '@/assets/menu/espresso-infusion.jpg';
import hotTeasImg from '@/assets/menu/hot-teas.jpg';
import matchaImg from '@/assets/menu/matcha.jpg';
import chocolateImg from '@/assets/menu/chocolate.jpg';
import shakesImg from '@/assets/menu/shakes.jpg';
import mojitosImg from '@/assets/menu/mojitos.jpg';
import slashesImg from '@/assets/menu/slashes.jpg';

interface MenuItem {
  name: string;
  price?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  image: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'classic-hot',
    name: 'Classic Hot',
    emoji: '☕',
    image: classicHotImg,
    items: [
      { name: 'Espresso' },
      { name: 'Double Espresso' },
      { name: 'Espresso Cubano' },
      { name: 'Americano' },
      { name: 'Cortado' },
      { name: 'Cappuccino' },
      { name: 'Latte' },
      { name: 'Mocha' },
    ]
  },
  {
    id: 'cafe-special-hot',
    name: 'Café Special Hot',
    emoji: '☕',
    image: cafeSpecialHotImg,
    items: [
      { name: 'Hazelnut Latte' },
      { name: 'Caramel Latte' },
      { name: 'Popcorn Latte' },
      { name: 'Irish Latte' },
      { name: 'Lavender Mocha' },
    ]
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    emoji: '🧊',
    image: icedCoffeeImg,
    items: [
      { name: 'Iced Americano' },
      { name: 'Iced Latte' },
      { name: 'Vietnamese Shakerato' },
      { name: 'French Vanilla Iced Latte' },
    ]
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    emoji: '❄️',
    image: coldCoffeeImg,
    items: [
      { name: 'Frappe' },
      { name: 'Choco Frappe' },
      { name: 'Hazelnut Cold Coffee' },
      { name: 'Caramel Cold Coffee' },
      { name: 'Nutella Cold Coffee' },
      { name: 'Brownie Cold Coffee' },
    ]
  },
  {
    id: 'iced-teas',
    name: 'Iced Teas',
    emoji: '🍹',
    image: icedTeasImg,
    items: [
      { name: 'Lemon Iced Tea' },
      { name: 'Passion Fruit Iced Tea' },
      { name: 'Blueberry Iced Tea' },
      { name: 'Peach Iced Tea' },
    ]
  },
  {
    id: 'espresso-infusion',
    name: 'Espresso Based Cold Infusion',
    emoji: '🍊',
    image: espressoInfusionImg,
    items: [
      { name: 'Espresso Cranberry' },
      { name: 'Espresso Orange' },
      { name: 'Espresso Fruit Mix' },
      { name: 'Espresso Dust' },
      { name: 'Espresso Refresher' },
    ]
  },
  {
    id: 'hot-teas',
    name: 'Hot Teas',
    emoji: '🍵',
    image: hotTeasImg,
    items: [
      { name: 'Green Tea' },
      { name: 'White Ginger Tea' },
      { name: 'Ayurvedic Khada Tea' },
      { name: 'Hibiscus Honey Tea' },
    ]
  },
  {
    id: 'matcha',
    name: 'Matcha',
    emoji: '🍃',
    image: matchaImg,
    items: [
      { name: 'Iced Matcha' },
      { name: 'Oat Milk Iced Matcha' },
      { name: 'Matcha Latte' },
      { name: 'Hazelnut Iced Matcha' },
      { name: 'Strawberry Iced Matcha' },
      { name: 'Coconut Matcha Cloud' },
    ]
  },
  {
    id: 'chocolate',
    name: 'Signature Chocolate',
    emoji: '🍫',
    image: chocolateImg,
    items: [
      { name: 'Hot Chocolate' },
      { name: 'Spiced Hot Chocolate' },
      { name: 'Iced Chocolate' },
    ]
  },
  {
    id: 'shakes',
    name: 'Shakes',
    emoji: '🥤',
    image: shakesImg,
    items: [
      { name: 'Vanilla Shake' },
      { name: 'Chocolate Shake' },
      { name: 'Blueberry Shake' },
      { name: 'Ferrero Rocher Shake' },
      { name: 'Mango Shake' },
      { name: 'Strawberry Shake' },
      { name: 'Mix Fruit Shake' },
      { name: 'Pina Colada' },
    ]
  },
  {
    id: 'mojitos',
    name: 'Mojitos & Refreshers',
    emoji: '🌿',
    image: mojitosImg,
    items: [
      { name: 'Virgin Mojito' },
      { name: 'Fresh Lime Soda (Sweet / Salt)' },
      { name: 'Melon Refresher' },
      { name: 'Orange Refresher' },
      { name: 'Spiced Jamun Refresher' },
      { name: 'Blue Lagoon' },
      { name: 'Cosmopolitan' },
      { name: 'Ginger Ale' },
      { name: 'Aampanna Mojito' },
      { name: 'Kiwi Mojito' },
      { name: 'Blue Mojito' },
      { name: 'Men at Work' },
      { name: 'Blueberry Mojito' },
      { name: 'Black Currant Mojito' },
      { name: 'Big Billion' },
      { name: 'Raspberry Mojito' },
    ]
  },
  {
    id: 'slashes',
    name: 'Slashes',
    emoji: '❄️',
    image: slashesImg,
    items: [
      { name: 'Kiwi Slashes' },
      { name: 'Mango Slashes' },
      { name: 'Strawberry Slashes' },
      { name: 'Blueberry Slashes' },
    ]
  },
];

// Menu Schema for SEO
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cozmo Cafe Bistro Lounge Menu",
  "description": "Complete beverage menu featuring coffee, teas, matcha, shakes, mojitos and more at Cozmo Cafe Hyderabad",
  "hasMenuSection": menuData.map(category => ({
    "@type": "MenuSection",
    "name": category.name,
    "hasMenuItem": category.items.map(item => ({
      "@type": "MenuItem",
      "name": item.name,
    }))
  }))
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Menu | Cozmo Cafe Bistro Lounge Hyderabad - Coffee, Teas, Shakes & More"
        description="Explore our complete café menu at Cozmo Cafe Hyderabad. Classic coffee, specialty lattes, matcha, shakes, mojitos, iced teas and refreshers. Best café menu in KPHB."
        keywords="cafe menu Hyderabad, coffee menu KPHB, matcha drinks, mojitos, shakes, iced tea, café beverages, lounge menu Hyderabad"
        canonicalUrl="https://cozmocafe.com/menu"
        structuredData={menuSchema}
      />
      
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Crafted with Passion
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            From classic espressos to signature matcha creations, 
            discover our carefully curated selection of premium beverages.
          </p>
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <Button variant="gold-outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <Section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <nav aria-label="Menu categories" className="flex flex-wrap justify-center gap-2 md:gap-3">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
              }`}
            >
              <span className="mr-1">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </nav>
      </Section>

      {/* Menu Categories */}
      <div className="py-16">
        {menuData.map((category, categoryIndex) => (
          <section 
            key={category.id} 
            id={category.id}
            className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-card'}`}
          >
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="text-4xl">{category.emoji}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                    {category.emoji} {category.name}
                  </h2>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center gap-3 py-3 border-b border-border/50 last:border-0 group"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                        <span className="text-lg text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Special Notes */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Dietary Information</h2>
          <p className="text-muted-foreground mb-6">
            We cater to various dietary requirements at our Hyderabad cafe. Please inform our staff about any 
            allergies or dietary restrictions. Vegetarian, vegan, and lactose-free options are available.
          </p>
          <p className="text-sm text-muted-foreground">
            Prices are subject to GST and service charge. 
            Menu items may vary seasonally.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Menu;
