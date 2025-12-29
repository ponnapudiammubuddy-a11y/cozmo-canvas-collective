import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import signatureCoffee from '@/assets/signature-coffee.jpg';
import mocktail from '@/assets/mocktail.jpg';
import dessert from '@/assets/dessert.jpg';
import chefSpecial from '@/assets/chef-special.jpg';
import starters from '@/assets/starters.jpg';

const slides = [
  {
    image: signatureCoffee,
    label: 'ARTISAN BREWS',
    name: 'Signature\nCoffee',
    tagline: 'Handcrafted perfection in every cup, sourced from the world\'s finest beans',
    cta: 'View Menu',
    ctaLink: '/menu',
  },
  {
    image: mocktail,
    label: 'REFRESHING BLENDS',
    name: 'Artisan\nMocktails',
    tagline: 'Vibrant flavors that ignite your senses and refresh your spirit',
    cta: 'View Menu',
    ctaLink: '/menu',
  },
  {
    image: dessert,
    label: 'SWEET INDULGENCE',
    name: 'Decadent\nDesserts',
    tagline: 'Exquisite sweet creations crafted by our master pastry chefs',
    cta: 'Order Now',
    ctaLink: '/menu',
  },
  {
    image: chefSpecial,
    label: 'CULINARY EXCELLENCE',
    name: 'Chef\nSpecials',
    tagline: 'Signature dishes that showcase the art of fine dining',
    cta: 'Explore Menu',
    ctaLink: '/menu',
  },
  {
    image: starters,
    label: 'PREMIUM SELECTION',
    name: 'Signature\nDishes',
    tagline: 'Begin your culinary journey with our carefully curated starters',
    cta: 'View Menu',
    ctaLink: '/menu',
  },
];

export function CinematicHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image with parallax */}
            <div 
              className="absolute inset-0 scale-110"
              style={{ 
                transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.name.replace('\n', ' ')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Dark luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
            <div className="absolute inset-0 bg-background/20" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Animated content for current slide */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
              >
                {currentSlide === index && (
                  <>
                    {/* Label */}
                    <span 
                      className="inline-block text-primary font-accent text-lg md:text-xl tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
                      style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                    >
                      {slide.label}
                    </span>
                    
                    {/* Main Title */}
                    <h1 
                      className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[0.95] opacity-0 animate-fade-up"
                      style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                    >
                      {slide.name.split('\n').map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </h1>
                    
                    {/* Tagline */}
                    <p 
                      className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed opacity-0 animate-fade-up"
                      style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                    >
                      {slide.tagline}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div 
                      className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
                      style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                      <Button variant="gold" size="xl" asChild>
                        <Link to={slide.ctaLink}>{slide.cta}</Link>
                      </Button>
                      <Button variant="hero-outline" size="xl" asChild>
                        <Link to="/about">Explore Our Brand</Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/50 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/50 backdrop-blur-md border border-border/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'w-10 bg-primary' 
                : 'w-2 bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-[0.2em] rotate-90 origin-center translate-y-4">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent mt-6" />
      </div>
    </section>
  );
}
