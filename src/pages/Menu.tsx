import { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Search, X, Coffee, UtensilsCrossed, Cake, ChefHat, Salad, ChevronDown, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import { generateMenuPdf } from '@/lib/generateMenuPdf';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

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
  isSignature?: boolean;
}

interface MenuSubCategory {
  id: string;
  name: string;
  emoji: string;
  image: string;
  items: MenuItem[];
  note?: string;
  type: 'beverage' | 'veg' | 'nonveg' | 'mixed';
}

interface MainCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  subcategories: MenuSubCategory[];
}

// Original menu data organized into main categories
const menuData: MainCategory[] = [
  {
    id: 'beverages',
    name: 'Beverages',
    icon: Coffee,
    description: 'Crafted coffees, teas & refreshing drinks',
    subcategories: [
      {
        id: 'classic-hot',
        name: 'Classic Hot',
        emoji: '☕',
        image: classicHotImg,
        type: 'beverage',
        items: [
          { name: 'Espresso' },
          { name: 'Double Espresso' },
          { name: 'Espresso Cubano' },
          { name: 'Americano' },
          { name: 'Cortado' },
          { name: 'Cappuccino', isSignature: true },
          { name: 'Latte' },
          { name: 'Mocha' },
        ]
      },
      {
        id: 'cafe-special-hot',
        name: 'Café Special Hot',
        emoji: '☕',
        image: cafeSpecialHotImg,
        type: 'beverage',
        items: [
          { name: 'Hazelnut Latte', isSignature: true },
          { name: 'Caramel Latte' },
          { name: 'Popcorn Latte' },
          { name: 'Irish Latte' },
          { name: 'Lavender Mocha', isSignature: true },
        ]
      },
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        emoji: '🧊',
        image: icedCoffeeImg,
        type: 'beverage',
        items: [
          { name: 'Iced Americano' },
          { name: 'Iced Latte' },
          { name: 'Vietnamese Shakerato', isSignature: true },
          { name: 'French Vanilla Iced Latte' },
        ]
      },
      {
        id: 'cold-coffee',
        name: 'Cold Coffee',
        emoji: '❄️',
        image: coldCoffeeImg,
        type: 'beverage',
        items: [
          { name: 'Frappe' },
          { name: 'Choco Frappe' },
          { name: 'Hazelnut Cold Coffee' },
          { name: 'Caramel Cold Coffee' },
          { name: 'Nutella Cold Coffee', isSignature: true },
          { name: 'Brownie Cold Coffee' },
        ]
      },
      {
        id: 'iced-teas',
        name: 'Iced Teas',
        emoji: '🍹',
        image: icedTeasImg,
        type: 'beverage',
        items: [
          { name: 'Lemon Iced Tea' },
          { name: 'Passion Fruit Iced Tea', isSignature: true },
          { name: 'Blueberry Iced Tea' },
          { name: 'Peach Iced Tea' },
        ]
      },
      {
        id: 'espresso-infusion',
        name: 'Espresso Cold Infusion',
        emoji: '🍊',
        image: espressoInfusionImg,
        type: 'beverage',
        items: [
          { name: 'Espresso Cranberry' },
          { name: 'Espresso Orange', isSignature: true },
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
        type: 'beverage',
        items: [
          { name: 'Green Tea' },
          { name: 'White Ginger Tea' },
          { name: 'Ayurvedic Khada Tea' },
          { name: 'Hibiscus Honey Tea', isSignature: true },
        ]
      },
      {
        id: 'matcha',
        name: 'Matcha',
        emoji: '🍃',
        image: matchaImg,
        type: 'beverage',
        items: [
          { name: 'Iced Matcha' },
          { name: 'Oat Milk Iced Matcha' },
          { name: 'Matcha Latte', isSignature: true },
          { name: 'Hazelnut Iced Matcha' },
          { name: 'Strawberry Iced Matcha' },
          { name: 'Coconut Matcha Cloud', isSignature: true },
        ]
      },
      {
        id: 'chocolate',
        name: 'Signature Chocolate',
        emoji: '🍫',
        image: chocolateImg,
        type: 'beverage',
        items: [
          { name: 'Hot Chocolate', isSignature: true },
          { name: 'Spiced Hot Chocolate' },
          { name: 'Iced Chocolate' },
        ]
      },
      {
        id: 'shakes',
        name: 'Shakes',
        emoji: '🥤',
        image: shakesImg,
        type: 'beverage',
        items: [
          { name: 'Vanilla Shake' },
          { name: 'Chocolate Shake' },
          { name: 'Blueberry Shake' },
          { name: 'Ferrero Rocher Shake', isSignature: true },
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
        type: 'beverage',
        items: [
          { name: 'Virgin Mojito' },
          { name: 'Fresh Lime Soda (Sweet / Salt)' },
          { name: 'Melon Refresher' },
          { name: 'Orange Refresher' },
          { name: 'Spiced Jamun Refresher', isSignature: true },
          { name: 'Blue Lagoon' },
          { name: 'Cosmopolitan' },
          { name: 'Ginger Ale' },
          { name: 'Aampanna Mojito' },
          { name: 'Kiwi Mojito' },
          { name: 'Blue Mojito', isSignature: true },
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
        type: 'beverage',
        items: [
          { name: 'Kiwi Slashes' },
          { name: 'Mango Slashes' },
          { name: 'Strawberry Slashes' },
          { name: 'Blueberry Slashes' },
        ]
      },
    ]
  },
  {
    id: 'starters',
    name: 'Starters',
    icon: Salad,
    description: 'Soups, salads & appetizing bites',
    subcategories: [
      {
        id: 'soups',
        name: 'Soup',
        emoji: '🍲',
        image: soupsImg,
        type: 'mixed',
        items: [
          { name: 'Tomato Basil', price: '₹199' },
          { name: 'Spinach & Broccoli', price: '₹229' },
          { name: 'Cream of Mushroom', price: '₹229', isSignature: true },
          { name: 'Tom Kha', price: '₹219' },
          { name: 'Chicken Chowder', price: '₹239' },
          { name: 'Hot & Sour Chicken', price: '₹219' },
          { name: 'Man Chow Chicken', price: '₹219' },
          { name: 'Tom Yum Seafood', price: '₹239', isSignature: true },
        ]
      },
      {
        id: 'salads',
        name: 'Salad',
        emoji: '🥗',
        image: saladsImg,
        type: 'veg',
        items: [
          { name: 'Millet & Root Vegetable', price: '₹249' },
          { name: 'Watermelon & Feta', price: '₹279', isSignature: true },
          { name: 'Caesar Salad', price: '₹269' },
        ],
        note: 'Add-ons: Chicken – ₹99 | Seafood – ₹129 | Multi Seed – ₹79'
      },
      {
        id: 'easy-bites',
        name: 'Easy Bites',
        emoji: '🍟',
        image: easyBitesImg,
        type: 'mixed',
        items: [
          { name: 'Fries (Salted / Peri Peri / Cheesy / Karam Podi)', price: '₹199 / ₹229 / ₹249 / ₹229' },
          { name: 'Lotus Stem Chips', price: '₹229', isSignature: true },
          { name: 'Fish Fingers', price: '₹299' },
        ]
      },
      {
        id: 'appetizers-veg',
        name: 'Appetizers – Veg',
        emoji: '🌱',
        image: appetizersVegImg,
        type: 'veg',
        items: [
          { name: 'Nachos Veg', price: '₹299' },
          { name: 'Pesto Mushroom Toast', price: '₹249', isSignature: true },
          { name: 'Pepper Toast', price: '₹219' },
          { name: 'Cheese Jalapeno Poppers', price: '₹289' },
          { name: 'Avocado Nigiri', price: '₹299', isSignature: true },
          { name: 'Kung Pao Paneer', price: '₹279' },
          { name: 'Mushroom Salt & Pepper', price: '₹279' },
        ]
      },
      {
        id: 'appetizers-nonveg',
        name: 'Appetizers – Non Veg',
        emoji: '🍗',
        image: appetizersNonvegImg,
        type: 'nonveg',
        items: [
          { name: 'Nachos Chicken', price: '₹329' },
          { name: 'Crispy Parmesan Chicken', price: '₹329', isSignature: true },
          { name: 'Salmon Nigiri', price: '₹329', isSignature: true },
          { name: 'Kung Pao Chicken', price: '₹299' },
          { name: 'Chicken Chilli', price: '₹279' },
          { name: 'Crispy Pepper Chicken', price: '₹269' },
          { name: 'Chicken Takrai', price: '₹319' },
          { name: 'California Roll', price: '₹349', isSignature: true },
        ]
      },
    ]
  },
  {
    id: 'main-course',
    name: 'Main Course',
    icon: UtensilsCrossed,
    description: 'Hearty sandos, burgers, pasta & more',
    subcategories: [
      {
        id: 'sandwiches',
        name: 'Sando',
        emoji: '🥪',
        image: sandwichesImg,
        type: 'mixed',
        items: [
          { name: 'Bombay Style Sandwich', price: '₹249' },
          { name: 'American Spinach Ricotta', price: '₹299' },
          { name: 'Red Roaster Home Cheese Sando', price: '₹279', isSignature: true },
          { name: 'Grilled Chicken & Avocado Sando', price: '₹299', isSignature: true },
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
        type: 'mixed',
        items: [
          { name: 'Veggies Overloaded', price: '₹249' },
          { name: 'Paneer Chilli Burger', price: '₹249' },
          { name: 'Chicken Crunch', price: '₹299', isSignature: true },
          { name: 'Korean Chicken Burger', price: '₹299', isSignature: true },
        ],
        note: 'All burgers served with fries'
      },
      {
        id: 'pizzas',
        name: 'Pizza (9 inch)',
        emoji: '🍕',
        image: pizzasImg,
        type: 'mixed',
        items: [
          { name: 'Classic Margherita', price: '₹369' },
          { name: 'Farm House', price: '₹399' },
          { name: 'Pesto Al Fungi', price: '₹399', isSignature: true },
          { name: 'Pesto Polo', price: '₹429' },
          { name: 'Polo Mexican', price: '₹429' },
          { name: 'Chicken Pepperoni', price: '₹429', isSignature: true },
        ]
      },
      {
        id: 'healthy-bowls',
        name: 'Healthy Bowls',
        emoji: '🥗',
        image: healthyBowlsImg,
        type: 'veg',
        items: [
          { name: 'Quinoa Bowl', price: '₹299', isSignature: true },
          { name: 'Millet Bowl', price: '₹299' },
        ],
        note: 'Add-ons: Chicken – ₹99 | Seafood – ₹109'
      },
      {
        id: 'pasta',
        name: 'Pasta',
        emoji: '🍝',
        image: pastaImg,
        type: 'mixed',
        items: [
          { name: 'Alfredo (Veg / Non Veg)', price: '₹319 / ₹349' },
          { name: 'Arrabbiata (Veg / Non Veg)', price: '₹309 / ₹339' },
          { name: 'Pesto (Veg / Non Veg)', price: '₹329 / ₹359', isSignature: true },
          { name: 'Aglio e Olio (Veg / Non Veg)', price: '₹299 / ₹329' },
        ],
        note: 'Available in Penne / Spaghetti'
      },
      {
        id: 'rice-noodles',
        name: 'Rice & Noodles',
        emoji: '🍜',
        image: riceNoodlesImg,
        type: 'mixed',
        items: [
          { name: 'Pad Thai Noodles', price: '₹299', isSignature: true },
          { name: 'Vegan Ramen', price: '₹299' },
          { name: 'Hakka Noodles', price: '₹249' },
          { name: 'Veg Fried Rice (Plain / Schezwan)', price: '₹229 / ₹249' },
          { name: 'Egg Fried Rice (Plain / Schezwan)', price: '₹249 / ₹269' },
          { name: 'Chicken Fried Rice (Plain / Schezwan)', price: '₹269 / ₹289' },
        ]
      },
      {
        id: 'breads',
        name: 'Breads & Croissants',
        emoji: '🍞',
        image: breadsImg,
        type: 'veg',
        items: [
          { name: 'Focaccia', price: '₹150' },
          { name: 'Brioche Loaf (500g)', price: '₹240' },
          { name: 'Sandwich Loaf (1500g)', price: '₹120' },
          { name: 'Multigrain Loaf (1500g)', price: '₹150' },
          { name: 'Butter Croissant', price: '₹85' },
          { name: 'Chocolate Croissant', price: '₹129', isSignature: true },
        ]
      },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: Cake,
    description: 'Sweet endings & baked delights',
    subcategories: [
      {
        id: 'desserts',
        name: 'Desserts',
        emoji: '🍰',
        image: dessertsImg,
        type: 'veg',
        items: [
          { name: 'Classic Tiramisu', price: '₹249', isSignature: true },
          { name: 'Opera Cake', price: '₹249' },
          { name: 'Tres Leches', price: '₹199', isSignature: true },
          { name: 'Classic New York Cheesecake', price: '₹199' },
          { name: 'Russian Medovik', price: '₹119' },
          { name: 'Red Velvet Cupcake', price: '₹99' },
          { name: 'Triple Chocolate Brownie with Vanilla Ice Cream', price: '₹199', isSignature: true },
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
        type: 'veg',
        items: [
          { name: 'Choco Chip Cookie', price: '₹69' },
          { name: 'Oatmeal Raisin Cookie', price: '₹59' },
          { name: 'French Macaron (6 pcs)', price: '₹199', isSignature: true },
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
        type: 'veg',
        items: [
          { name: 'Red Velvet (500g)', price: '₹750', isSignature: true },
          { name: 'Black Forest', price: '₹650' },
          { name: 'Belgium Chocolate', price: '₹700', isSignature: true },
        ]
      },
    ]
  },
  {
    id: 'chef-specials',
    name: 'Chef Specials',
    icon: ChefHat,
    description: 'Signature creations by our culinary masters',
    subcategories: [
      {
        id: 'chef-special',
        name: 'Chef Special',
        emoji: '👨‍🍳',
        image: chefSpecialImg,
        type: 'mixed',
        items: [
          { name: 'Stuffed Chicken with Orange Capers Sauce', price: '₹349', isSignature: true },
          { name: 'Steam Pomfret with Creamy Garlic Sauce', price: '₹449', isSignature: true },
          { name: 'Pesto Rice with Creamy Paprika Vegetable', price: '₹329', isSignature: true },
          { name: 'Spicy Thai Basil Tofu with Jasmine Rice', price: '₹349', isSignature: true },
          { name: 'Chicken Steak with Red Wine Sauce', price: '₹399', isSignature: true },
          { name: 'Triple Schezwan Fried Rice', price: '₹249' },
          { name: 'Stir Fried Tofu', price: '₹249' },
          { name: 'Gochujang Korean Wings', price: '₹229', isSignature: true },
        ]
      },
    ]
  },
];

// Flatten for PDF generation (keep original format)
const flatMenuData = menuData.flatMap(main => 
  main.subcategories.map(sub => ({
    id: sub.id,
    name: sub.name,
    emoji: sub.emoji,
    image: sub.image,
    items: sub.items,
    note: sub.note,
    type: sub.type,
  }))
);

// Menu Schema for SEO
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cozmo Cafe Bistro Lounge Menu",
  "description": "Complete café menu featuring coffee, teas, food, desserts and more at Cozmo Cafe Hyderabad",
  "hasMenuSection": flatMenuData.map(category => ({
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
  const [activeMainCategory, setActiveMainCategory] = useState<string>('beverages');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentMainCategory = menuData.find(cat => cat.id === activeMainCategory);

  const filteredSubcategories = useMemo(() => {
    if (!currentMainCategory) return [];
    if (!searchQuery.trim()) return currentMainCategory.subcategories;
    
    const query = searchQuery.toLowerCase();
    return currentMainCategory.subcategories
      .map(sub => ({
        ...sub,
        items: sub.items.filter(item => item.name.toLowerCase().includes(query))
      }))
      .filter(sub => sub.items.length > 0);
  }, [currentMainCategory, searchQuery]);

  const handleMainCategoryClick = (categoryId: string) => {
    setActiveMainCategory(categoryId);
    setActiveSubCategory(null);
    setSearchQuery('');
  };

  const handleSubCategoryClick = (subId: string) => {
    setActiveSubCategory(activeSubCategory === subId ? null : subId);
  };

  const isChefSpecials = activeMainCategory === 'chef-specials';

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
      
      {/* Hero Section - Minimal & Elegant */}
      <section className="relative pt-24 pb-8 bg-gradient-to-b from-card to-background overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            A curated selection of artisanal beverages and culinary delights
          </p>
          
          {/* Search & Download */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search our menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-2.5 h-11 bg-card/50 backdrop-blur-sm border-border/50 text-foreground placeholder:text-muted-foreground rounded-full text-sm focus:border-primary/50 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                generateMenuPdf(flatMenuData);
                toast.success('Menu PDF downloaded!');
              }}
              className="h-11 px-5 rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 whitespace-nowrap"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Main Category Navigation - Sleek Pill Style */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop: Centered tabs */}
          <nav className="hidden md:flex justify-center gap-2">
            {menuData.map((category) => {
              const Icon = category.icon;
              const isActive = activeMainCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleMainCategoryClick(category.id)}
                  className={cn(
                    "group relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                      : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card border border-border/30 hover:border-border/60"
                  )}
                >
                  <Icon className={cn("w-4 h-4 transition-transform duration-300", isActive && "scale-110")} />
                  <span>{category.name}</span>
                  {category.id === 'chef-specials' && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>
          
          {/* Mobile: Horizontal scroll with snap */}
          <nav className="md:hidden flex gap-2 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory -mx-4 px-4">
            {menuData.map((category) => {
              const Icon = category.icon;
              const isActive = activeMainCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleMainCategoryClick(category.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 snap-start",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                      : "bg-card/50 text-muted-foreground border border-border/30"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Category Description */}
      {currentMainCategory && (
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {currentMainCategory.description}
          </p>
        </div>
      )}

      {/* Menu Content */}
      <div className="container mx-auto px-4 pb-12">
        {filteredSubcategories.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No items found for "{searchQuery}"</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setSearchQuery('')}
              className="rounded-full"
            >
              Clear Search
            </Button>
          </div>
        ) : isChefSpecials ? (
          // Chef Specials - Premium Card Layout
          <div className="space-y-8">
            {filteredSubcategories.map((sub) => (
              <div key={sub.id} className="animate-fade-up">
                {/* Hero Image for Chef Specials */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 group">
                  <img 
                    src={sub.image} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{sub.emoji}</span>
                      <h2 className="font-display text-2xl md:text-3xl text-foreground">
                        {sub.name}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-sm">Curated by our culinary experts</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-current" />
                      Must Try
                    </span>
                  </div>
                </div>

                {/* Premium Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sub.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "group relative p-5 rounded-xl border transition-all duration-300 cursor-default",
                        item.isSignature 
                          ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10" 
                          : "bg-card/50 border-border/30 hover:border-border/60 hover:bg-card"
                      )}
                    >
                      {item.isSignature && (
                        <div className="absolute -top-2 -right-2">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold shadow-lg shadow-primary/30">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            Signature
                          </span>
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="text-primary font-semibold whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Regular Categories - Accordion Style
          <div className="space-y-3 max-w-4xl mx-auto">
            {filteredSubcategories.map((sub, idx) => {
              const isOpen = activeSubCategory === sub.id;
              return (
                <div 
                  key={sub.id}
                  className="rounded-xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-border/50"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Subcategory Header */}
                  <button
                    onClick={() => handleSubCategoryClick(sub.id)}
                    className="w-full flex items-center gap-4 p-4 md:p-5 text-left transition-colors hover:bg-card/50"
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={sub.image} 
                        alt={sub.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{sub.emoji}</span>
                        <h3 className="font-display text-lg md:text-xl text-foreground truncate">
                          {sub.name}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {sub.items.length} item{sub.items.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
                      )} 
                    />
                  </button>

                  {/* Expandable Content */}
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 md:px-5 md:pb-6 pt-2 border-t border-border/20">
                        <ul className="space-y-2">
                          {sub.items.map((item, itemIdx) => (
                            <li 
                              key={itemIdx}
                              className={cn(
                                "flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg transition-all duration-200 group/item",
                                item.isSignature 
                                  ? "bg-primary/5 hover:bg-primary/10" 
                                  : "hover:bg-muted/30"
                              )}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                {item.isSignature ? (
                                  <Star className="w-3.5 h-3.5 text-primary fill-primary/30 flex-shrink-0" />
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                                )}
                                <span className={cn(
                                  "text-sm text-foreground group-hover/item:text-primary transition-colors truncate",
                                  item.isSignature && "font-medium"
                                )}>
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
                        {sub.note && (
                          <p className="mt-4 text-xs text-muted-foreground italic px-3">
                            {sub.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
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
            Prices are subject to GST and service charge. Menu items may vary seasonally.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Menu;
