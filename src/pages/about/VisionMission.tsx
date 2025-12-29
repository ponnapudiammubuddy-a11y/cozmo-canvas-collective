import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { PremiumCard } from '@/components/Cards';
import { Eye, Target, Compass, Star } from 'lucide-react';
import heroLounge from '@/assets/hero-lounge.jpg';

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroLounge} 
            alt="Vision & Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            About Us
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Vision & <span className="text-gradient-gold">Mission</span>
          </h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <PremiumCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Eye className="w-14 h-14 text-primary mb-6" />
            <h3 className="font-display text-3xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To become a globally recognized hospitality group that sets the benchmark for 
              excellence, innovation, and guest satisfaction. We envision a future where every 
              C E Hospitality experience creates lasting memories and inspires a new standard 
              in the industry.
            </p>
          </PremiumCard>
          <PremiumCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Target className="w-14 h-14 text-primary mb-6" />
            <h3 className="font-display text-3xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To deliver premium hospitality experiences through exceptional service, 
              innovative offerings, and unwavering commitment to quality. We strive to 
              create welcoming spaces where every guest feels valued.
            </p>
          </PremiumCard>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 gap-8">
          <PremiumCard>
            <Compass className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-xl text-foreground mb-3">Guiding Principles</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Excellence in every detail</li>
              <li>• Innovation through creativity</li>
              <li>• Integrity in all relationships</li>
              <li>• Sustainability for future generations</li>
            </ul>
          </PremiumCard>
          <PremiumCard>
            <Star className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-xl text-foreground mb-3">Our Promise</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Memorable experiences every visit</li>
              <li>• Consistent quality across all venues</li>
              <li>• Personalized attention to guests</li>
              <li>• Continuous improvement always</li>
            </ul>
          </PremiumCard>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default VisionMission;
