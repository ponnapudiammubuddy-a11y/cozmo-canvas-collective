import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import heroLounge from '@/assets/hero-lounge.jpg';
import signatureCoffee from '@/assets/signature-coffee.jpg';
import mocktail from '@/assets/mocktail.jpg';
import dessert from '@/assets/dessert.jpg';
import chefSpecial from '@/assets/chef-special.jpg';

const slides = [
  { image: heroLounge, alt: 'Luxury Cafe & Lounge Interior' },
  { image: signatureCoffee, alt: 'Signature Coffee' },
  { image: mocktail, alt: 'Artisan Mocktails' },
  { image: dessert, alt: 'Decadent Desserts' },
  { image: chefSpecial, alt: 'Chef Specials' },
];

export function CinematicHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-slide with slow timing
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slider with Horizontal Transition */}
      <div className="absolute inset-0">
        <div 
          className="flex h-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ 
            width: `${slides.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)` 
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              {/* Image with parallax and zoom */}
              <div 
                className="absolute inset-0 overflow-hidden"
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
                  style={{ 
                    transform: `translateY(${scrollY * 0.15}px) scale(${currentSlide === index ? 1.08 : 1})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Dark luxury gradient overlay - consistent across all slides */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-background/15" />
      </div>

      {/* Fixed Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Welcome Label */}
            <span 
              className={`inline-block text-primary font-accent text-xl md:text-2xl italic mb-4 transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Welcome to
            </span>
            
            {/* Main Title */}
            <h1 
              className={`font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              C E <span className="text-gradient-gold">Hospitality</span>
            </h1>
            
            {/* Subtitle */}
            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-4 font-display transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Cozmo Cafe Bistro Lounge
            </p>
            
            {/* Description */}
            <p 
              className={`text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Experience the art of premium hospitality. From artisan coffee to 
              gourmet cuisine, immerse yourself in an atmosphere of elegance and 
              exceptional service.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/booking">Reserve a Table</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/menu">Explore Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Minimal Design */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/30 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/30 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Minimal Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-700 ${
              currentSlide === index 
                ? 'w-12 bg-primary' 
                : 'w-2 bg-foreground/20 hover:bg-foreground/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="text-[10px] tracking-[0.25em] rotate-90 origin-center translate-y-5 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent mt-8" />
      </div>
    </section>
  );
}
