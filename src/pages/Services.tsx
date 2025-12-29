import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import { ServiceCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  UtensilsCrossed, Truck, PartyPopper, Users, 
  Sparkles, Building2, Music, Cake, ArrowRight
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            What We Offer
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            From intimate dinners to grand celebrations, we offer a range of 
            premium hospitality services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <Section>
        <SectionHeader 
          label="Core Services"
          title="Experience Excellence"
          description="Every service is designed to exceed your expectations."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Dine-In Experience"
            description="Immerse yourself in our elegant ambiance with attentive service, exquisite cuisine, and a sophisticated atmosphere perfect for any occasion."
            icon={<UtensilsCrossed className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Takeaway"
            description="Enjoy our premium dishes at home. Order ahead for quick pickup and experience our culinary excellence wherever you are."
            icon={<Truck className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Home Delivery"
            description="We bring the Cozmo experience to your doorstep. Fresh, carefully packaged, and delivered with care."
            icon={<Truck className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Catering Services"
            description="Elevate your events with our professional catering. Customized menus, impeccable presentation, and seamless service."
            icon={<PartyPopper className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Private Dining"
            description="Exclusive private spaces for intimate gatherings, romantic dinners, and special celebrations with personalized service."
            icon={<Users className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Party & Event Orders"
            description="From birthday cakes to full party spreads, we help make your celebrations memorable with our special event packages."
            icon={<Cake className="w-6 h-6" />}
          />
        </div>
      </Section>

      {/* Special Services */}
      <Section dark>
        <SectionHeader 
          label="Special Experiences"
          title="Beyond Dining"
          description="Unique experiences that make Cozmo Cafe Bistro Lounge special."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Live Entertainment"
            description="Weekend nights come alive with live music, acoustic sessions, and curated entertainment for an unforgettable evening."
            icon={<Music className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Lounge Experience"
            description="Our sophisticated lounge offers premium beverages, cozy seating, and the perfect atmosphere for unwinding."
            icon={<Sparkles className="w-6 h-6" />}
          />
          <ServiceCard 
            title="Corporate Events"
            description="Professional venues for business meetings, product launches, team gatherings, and corporate celebrations."
            icon={<Building2 className="w-6 h-6" />}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl text-foreground mb-6">
            Ready to Experience Premium Hospitality?
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you're planning a special dinner, corporate event, or private celebration, 
            our team is ready to create an unforgettable experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/booking">Make a Reservation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;
