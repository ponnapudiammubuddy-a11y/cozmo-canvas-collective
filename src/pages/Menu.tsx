import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import SEO from '@/components/SEO';

// Import beverage category images
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

// Import food category images
import soupsImg from '@/assets/menu/soups.jpg';
import saladsImg from '@/assets/menu/salads.jpg';
import easyBitesImg from '@/assets/menu/easy-bites.jpg';
import appetizersVegImg from '@/assets/menu/appetizers-veg.jpg';
import appetizersNonvegImg from '@/assets/menu/appetizers-nonveg.jpg';
import sandwichesImg from '@/assets/menu/sandwiches.jpg';
import burgersImg from '@/assets/menu/burgers.jpg';
import pizzasImg from '@/assets/menu/pizzas.jpg';
import healthyBowlsImg from '@/assets/menu/healthy-bowls.jpg';
import pastaImg from '@/assets/menu/pasta.jpg';
import riceNoodlesImg from '@/assets/menu/rice-noodles.jpg';
import chefSpecialImg from '@/assets/menu/chef-special.jpg';
import breadsImg from '@/assets/menu/breads.jpg';
import dessertsImg from '@/assets/menu/desserts.jpg';
import cookiesImg from '@/assets/menu/cookies.jpg';
import cakesImg from '@/assets/menu/cakes.jpg';

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
  note?: string;
}

const menuData: MenuCategory[] = [
  // ===== BEVERAGES =====
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
  // ===== FOOD =====
  {
    id: 'soups',
    name: 'Soup',
    emoji: '🍲',
    image: soupsImg,
    items: [
      { name: 'Tomato Basil', price: '₹199' },
      { name: 'Spinach & Broccoli', price: '₹229' },
      { name: 'Cream of Mushroom', price: '₹229' },
      { name: 'Tom Kha', price: '₹219' },
      { name: 'Chicken Chowder', price: '₹239' },
      { name: 'Hot & Sour Chicken', price: '₹219' },
      { name: 'Man Chow Chicken', price: '₹219' },
      { name: 'Tom Yum Seafood', price: '₹239' },
    ]
  },
  {
    id: 'salads',
    name: 'Salad',
    emoji: '🥗',
    image: saladsImg,
    items: [
      { name: 'Millet & Root Vegetable', price: '₹249' },
      { name: 'Watermelon & Feta', price: '₹279' },
      { name: 'Caesar Salad', price: '₹269' },
    ],
    note: 'Add-ons: Chicken – ₹99 | Seafood – ₹129 | Multi Seed – ₹79'
  },
  {
    id: 'easy-bites',
    name: 'Easy Bites',
    emoji: '🍟',
    image: easyBitesImg,
    items: [
      { name: 'Fries (Salted / Peri Peri / Cheesy / Karam Podi)', price: '₹199 / ₹229 / ₹249 / ₹229' },
      { name: 'Lotus Stem Chips', price: '₹229' },
      { name: 'Fish Fingers', price: '₹299' },
    ]
  },
  {
    id: 'appetizers-veg',
    name: 'Appetizers – Veg',
    emoji: '🌱',
    image: appetizersVegImg,
    items: [
      { name: 'Nachos Veg', price: '₹299' },
      { name: 'Pesto Mushroom Toast', price: '₹249' },
      { name: 'Pepper Toast', price: '₹219' },
      { name: 'Cheese Jalapeno Poppers', price: '₹289' },
      { name: 'Avocado Nigiri', price: '₹299' },
      { name: 'Kung Pao Paneer', price: '₹279' },
      { name: 'Mushroom Salt & Pepper', price: '₹279' },
    ]
  },
  {
    id: 'appetizers-nonveg',
    name: 'Appetizers – Non Veg',
    emoji: '🍗',
    image: appetizersNonvegImg,
    items: [
      { name: 'Nachos Chicken', price: '₹329' },
      { name: 'Crispy Parmesan Chicken', price: '₹329' },
      { name: 'Salmon Nigiri', price: '₹329' },
      { name: 'Kung Pao Chicken', price: '₹299' },
      { name: 'Chicken Chilli', price: '₹279' },
      { name: 'Crispy Pepper Chicken', price: '₹269' },
      { name: 'Chicken Takrai', price: '₹319' },
      { name: 'California Roll', price: '₹349' },
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sando',
    emoji: '🥪',
    image: sandwichesImg,
    items: [
      { name: 'Bombay Style Sandwich', price: '₹249' },
      { name: 'American Spinach Ricotta', price: '₹299' },
      { name: 'Red Roaster Home Cheese Sando', price: '₹279' },
      { name: 'Grilled Chicken & Avocado Sando', price: '₹299' },
      { name: 'Cuban Sando', price: '₹279' },
      { name: 'Red Roaster Chicken Sando', price: '₹299' },
    ],
    note: 'All sandwiches served with fries'
  },
  {
    id: 'burgers',
    name: 'Burgers',
    emoji: '🍔',
    image: burgersImg,
    items: [
      { name: 'Veggies Overloaded', price: '₹249' },
      { name: 'Paneer Chilli Burger', price: '₹249' },
      { name: 'Chicken Crunch', price: '₹299' },
      { name: 'Korean Chicken Burger', price: '₹299' },
    ],
    note: 'All burgers served with fries'
  },
  {
    id: 'pizzas',
    name: 'Pizza (9 inch)',
    emoji: '🍕',
    image: pizzasImg,
    items: [
      { name: 'Classic Margherita', price: '₹369' },
      { name: 'Farm House', price: '₹399' },
      { name: 'Pesto Al Fungi', price: '₹399' },
      { name: 'Pesto Polo', price: '₹429' },
      { name: 'Polo Mexican', price: '₹429' },
      { name: 'Chicken Pepperoni', price: '₹429' },
    ]
  },
  {
    id: 'healthy-bowls',
    name: 'Healthy Bowls',
    emoji: '🥗',
    image: healthyBowlsImg,
    items: [
      { name: 'Quinoa Bowl', price: '₹299' },
      { name: 'Millet Bowl', price: '₹299' },
    ],
    note: 'Add-ons: Chicken – ₹99 | Seafood – ₹109'
  },
  {
    id: 'pasta',
    name: 'Pasta',
    emoji: '🍝',
    image: pastaImg,
    items: [
      { name: 'Alfredo (Veg / Non Veg)', price: '₹319 / ₹349' },
      { name: 'Arrabbiata (Veg / Non Veg)', price: '₹309 / ₹339' },
      { name: 'Pesto (Veg / Non Veg)', price: '₹329 / ₹359' },
      { name: 'Aglio e Olio (Veg / Non Veg)', price: '₹299 / ₹329' },
    ],
    note: 'Available in Penne / Spaghetti'
  },
  {
    id: 'rice-noodles',
    name: 'Rice & Noodles',
    emoji: '🍜',
    image: riceNoodlesImg,
    items: [
      { name: 'Pad Thai Noodles', price: '₹299' },
      { name: 'Vegan Ramen', price: '₹299' },
      { name: 'Hakka Noodles', price: '₹249' },
      { name: 'Veg Fried Rice (Plain / Schezwan)', price: '₹229 / ₹249' },
      { name: 'Egg Fried Rice (Plain / Schezwan)', price: '₹249 / ₹269' },
      { name: 'Chicken Fried Rice (Plain / Schezwan)', price: '₹269 / ₹289' },
    ]
  },
  {
    id: 'chef-special',
    name: 'Chef Special',
    emoji: '👨‍🍳',
    image: chefSpecialImg,
    items: [
      { name: 'Stuffed Chicken with Orange Capers Sauce', price: '₹349' },
      { name: 'Steam Pomfret with Creamy Garlic Sauce', price: '₹449' },
      { name: 'Pesto Rice with Creamy Paprika Vegetable', price: '₹329' },
      { name: 'Spicy Thai Basil Tofu with Jasmine Rice', price: '₹349' },
      { name: 'Chicken Steak with Red Wine Sauce', price: '₹399' },
      { name: 'Triple Schezwan Fried Rice', price: '₹249' },
      { name: 'Stir Fried Tofu', price: '₹249' },
      { name: 'Gochujang Korean Wings', price: '₹229' },
    ]
  },
  {
    id: 'breads',
    name: 'Breads & Croissants',
    emoji: '🍞',
    image: breadsImg,
    items: [
      { name: 'Focaccia', price: '₹150' },
      { name: 'Brioche Loaf (500g)', price: '₹240' },
      { name: 'Sandwich Loaf (1500g)', price: '₹120' },
      { name: 'Multigrain Loaf (1500g)', price: '₹150' },
      { name: 'Butter Croissant', price: '₹85' },
      { name: 'Chocolate Croissant', price: '₹129' },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    emoji: '🍰',
    image: dessertsImg,
    items: [
      { name: 'Classic Tiramisu', price: '₹249' },
      { name: 'Opera Cake', price: '₹249' },
      { name: 'Tres Leches', price: '₹199' },
      { name: 'Classic New York Cheesecake', price: '₹199' },
      { name: 'Russian Medovik', price: '₹119' },
      { name: 'Red Velvet Cupcake', price: '₹99' },
      { name: 'Triple Chocolate Brownie with Vanilla Ice Cream', price: '₹199' },
      { name: 'Apricot Delight', price: '₹249' },
      { name: 'Coconut Mousse', price: '₹249' },
      { name: 'Panna Cotta (Seasonal Fruit / Chocolate)', price: '₹219 / ₹209' },
    ]
  },
  {
    id: 'cookies',
    name: 'Cookies & Berliners',
    emoji: '🍪',
    image: cookiesImg,
    items: [
      { name: 'Choco Chip Cookie', price: '₹69' },
      { name: 'Oatmeal Raisin Cookie', price: '₹59' },
      { name: 'French Macaron (6 pcs)', price: '₹199' },
      { name: 'Chocolate Berliner', price: '₹149' },
      { name: 'Blueberry Berliner', price: '₹149' },
      { name: 'Chocolate Doughnut', price: '₹119' },
    ]
  },
  {
    id: 'cakes',
    name: 'Cakes',
    emoji: '🎂',
    image: cakesImg,
    items: [
      { name: 'Red Velvet (500g)', price: '₹750' },
      { name: 'Black Forest', price: '₹650' },
      { name: 'Belgium Chocolate', price: '₹700' },
    ]
  },
];

// Menu Schema for SEO
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cozmo Cafe Bistro Lounge Menu",
  "description": "Complete café menu featuring coffee, teas, food, desserts and more at Cozmo Cafe Hyderabad",
  "hasMenuSection": menuData.map(category => ({
    "@type": "MenuSection",
    "name": category.name,
    "hasMenuItem": category.items.map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      ...(item.price && {
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('₹', '').split(' ')[0],
          "priceCurrency": "INR"
        }
      })
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
        title="Menu | Cozmo Cafe Bistro Lounge Hyderabad - Coffee, Food, Desserts & More"
        description="Explore our complete café menu at Cozmo Cafe Hyderabad. Classic coffee, specialty lattes, matcha, pizzas, pasta, burgers, desserts and more. Best café menu in KPHB."
        keywords="cafe menu Hyderabad, coffee menu KPHB, pizza, pasta, burgers, desserts, shakes, mojitos, iced tea, café food"
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
            From classic espressos to gourmet dishes, 
            discover our carefully curated selection of beverages and food.
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
      <Section className="py-6 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <nav aria-label="Menu categories" className="flex flex-wrap justify-center gap-2">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
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
            className={`py-12 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-card'}`}
          >
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    {category.emoji} {category.name}
                  </h2>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center justify-between gap-3 py-2 border-b border-border/50 last:border-0 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                          <span className="text-base text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                        </div>
                        {item.price && (
                          <span className="text-sm font-medium text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {category.note && (
                    <p className="mt-4 text-sm text-muted-foreground italic">
                      {category.note}
                    </p>
                  )}
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
