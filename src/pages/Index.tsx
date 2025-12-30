import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CinematicHero } from '@/components/CinematicHero';
import { Section, SectionHeader } from '@/components/Section';
import { DirectorCard, ServiceCard, MenuItemCard, PremiumCard } from '@/components/Cards';
import { BrandsSection } from '@/components/BrandsSection';
import { BookingForm } from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { 
  UtensilsCrossed, Building2, 
  Truck, PartyPopper, Target, Eye, Clock, Award,
  ShieldCheck, Users, TrendingUp, Sparkles, ArrowRight, CalendarCheck, MapPin
} from 'lucide-react';
import signatureCoffee from '@/assets/signature-coffee.jpg';
import mocktail from '@/assets/mocktail.jpg';
import dessert from '@/assets/dessert.jpg';
import chefSpecial from '@/assets/chef-special.jpg';

const Index = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Reserve Button */}
      <Link
        to="/booking"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold ${
          showFloatingButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <CalendarCheck className="w-5 h-5" />
        Reserve Table
      </Link>
      <Navigation />
      
      {/* Cinematic Hero with Integrated Slider */}
      <CinematicHero />

      {/* Company Overview */}
      <Section id="overview">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-accent text-lg italic mb-4 block">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Redefining <span className="text-gradient-gold">Premium Hospitality</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              C E Hospitality stands as a beacon of excellence in the hospitality industry. 
              We are committed to creating memorable experiences through exceptional dining, 
              premium cafés, sophisticated lounges, and world-class accommodations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With our flagship brand, Cozmo Cafe Bistro Lounge, currently operational and 
              four additional hospitality projects in development, we are building a legacy 
              of quality, innovation, and unparalleled guest experiences.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <span className="text-4xl font-display text-primary">1</span>
                <p className="text-muted-foreground text-sm">Live Outlet</p>
              </div>
              <div>
                <span className="text-4xl font-display text-foreground">4</span>
                <p className="text-muted-foreground text-sm">Upcoming Projects</p>
              </div>
              <div>
                <span className="text-4xl font-display text-foreground">5+</span>
                <p className="text-muted-foreground text-sm">Years Vision</p>
              </div>
            </div>
            <Button variant="gold" asChild>
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={signatureCoffee} alt="Signature Coffee" className="rounded-xl h-64 w-full object-cover" />
              <img src={mocktail} alt="Artisan Mocktail" className="rounded-xl h-64 w-full object-cover mt-8" />
              <img src={dessert} alt="Premium Dessert" className="rounded-xl h-64 w-full object-cover -mt-8" />
              <img src={chefSpecial} alt="Chef Special" className="rounded-xl h-64 w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="font-accent text-lg italic">Crafted with Passion</p>
              <p className="font-display text-2xl">Since 2020</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Brand Structure */}
      <Section dark id="brands">
        <SectionHeader 
          label="Our Portfolio"
          title="Building a Hospitality Empire"
          description="From cafés to resorts, we're expanding our vision across multiple hospitality segments."
        />
        <BrandsSection />
      </Section>

      {/* Vision & Mission */}
      <Section id="vision">
        <div className="grid lg:grid-cols-2 gap-12">
          <PremiumCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h3 className="font-display text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a globally recognized hospitality group that sets the benchmark for 
              excellence, innovation, and guest satisfaction. We envision a future where every 
              C E Hospitality experience creates lasting memories and inspires a new standard 
              in the industry.
            </p>
          </PremiumCard>
          <PremiumCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="font-display text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver premium hospitality experiences through exceptional service, 
              innovative offerings, and unwavering commitment to quality. We strive to 
              create welcoming spaces where every guest feels valued, every meal delights, 
              and every moment becomes a cherished memory.
            </p>
          </PremiumCard>
        </div>
      </Section>

      {/* Leadership */}
      <Section dark id="leadership">
        <SectionHeader 
          label="Leadership"
          title="Visionaries Behind the Brand"
          description="Meet the dedicated leaders driving C E Hospitality towards excellence."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DirectorCard 
            name="Samuel Charles"
            role="Founder & CEO"
            description="With over 15 years in luxury hospitality, Alexander leads the group's vision for expansion and excellence."
          />
          <DirectorCard 
            name="Victoria Ellis"
            role="Director of Operations"
            description="Victoria ensures seamless operations across all venues, maintaining our high standards of service."
          />
          <DirectorCard 
            name="Marcus Williams"
            role="Culinary Director"
            description="A celebrated chef bringing innovative cuisine and exceptional dining experiences to our guests."
          />
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <SectionHeader 
          label="What We Offer"
          title="Exceptional Services"
          description="From intimate dinners to grand celebrations, we cater to every occasion."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="Dine-In Experience"
            description="Immerse yourself in our elegant ambiance with attentive service and exquisite cuisine."
            icon={<UtensilsCrossed className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Takeaway & Delivery"
            description="Enjoy our premium offerings in the comfort of your home with our swift delivery service."
            icon={<Truck className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Event Catering"
            description="Elevate your events with our professional catering services and customized menus."
            icon={<PartyPopper className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Private Dining"
            description="Exclusive private spaces for intimate gatherings and special celebrations."
            icon={<Users className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Live Entertainment"
            description="Weekend nights come alive with live music and curated entertainment."
            icon={<Sparkles className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Corporate Events"
            description="Professional venues for business meetings, launches, and corporate gatherings."
            icon={<Building2 className="w-6 h-6" />}
          />
        </div>
      </Section>

      {/* Menu Preview */}
      <Section dark id="menu">
        <SectionHeader 
          label="Our Menu"
          title="Taste the Excellence"
          description="A curated selection of our signature offerings crafted by master chefs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MenuItemCard 
            name="Signature Latte"
            description="Single-origin espresso with velvety steamed milk and artisan latte art."
            price="$6.50"
            image={signatureCoffee}
            category="Coffee"
          />
          <MenuItemCard 
            name="Sunset Spritzer"
            description="Refreshing blend of citrus, passion fruit, and sparkling soda."
            price="$8.00"
            image={mocktail}
            category="Mocktails"
          />
          <MenuItemCard 
            name="Tiramisu Royale"
            description="Classic Italian dessert with espresso-soaked ladyfingers and mascarpone."
            price="$12.00"
            image={dessert}
            category="Desserts"
          />
          <MenuItemCard 
            name="Grilled Tenderloin"
            description="Premium beef tenderloin with red wine reduction and seasonal vegetables."
            price="$32.00"
            image={chefSpecial}
            category="Chef Special"
          />
        </div>
        <div className="text-center">
          <Button variant="gold-outline" size="lg" asChild>
            <Link to="/menu">View Full Menu <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </Section>

      {/* Company Values */}
      <Section>
        <SectionHeader 
          label="Our Standards"
          title="Commitment to Excellence"
          description="The principles that guide every aspect of our hospitality."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PremiumCard>
            <ShieldCheck className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Hygiene & Safety</h3>
            <p className="text-muted-foreground text-sm">Rigorous standards ensuring the highest levels of cleanliness and food safety.</p>
          </PremiumCard>
          <PremiumCard>
            <Award className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Quality Control</h3>
            <p className="text-muted-foreground text-sm">Continuous improvement processes to maintain and exceed quality standards.</p>
          </PremiumCard>
          <PremiumCard>
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Timely Service</h3>
            <p className="text-muted-foreground text-sm">Efficient operations ensuring prompt service without compromising quality.</p>
          </PremiumCard>
          <PremiumCard>
            <TrendingUp className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Innovation</h3>
            <p className="text-muted-foreground text-sm">Constantly evolving our offerings to bring fresh experiences to our guests.</p>
          </PremiumCard>
        </div>
      </Section>

      {/* Booking Section */}
      <Section dark id="booking">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-accent text-lg italic mb-4 block">Reservations</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Reserve Your <span className="text-gradient-gold">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether it's an intimate dinner, a celebration, or a business meeting, 
              our team is ready to create an unforgettable experience for you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">123 Luxury Boulevard, Downtown District</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">Open Daily: 8:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <BookingForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176767641476!2d-73.98823908459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
          className="grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
