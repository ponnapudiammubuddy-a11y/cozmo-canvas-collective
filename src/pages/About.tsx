import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import { PremiumCard, DirectorCard, BrandCard } from '@/components/Cards';
import { 
  Eye, Target, Clock, Award, ShieldCheck, Users, 
  TrendingUp, Building2, Coffee, TreePalm, Wine,
  CheckCircle, Sparkles, Heart
} from 'lucide-react';

import heroLounge from '@/assets/hero-lounge.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroLounge} 
            alt="About C E Hospitality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            About Us
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            From a vision of excellence to a thriving hospitality group, 
            discover the journey that shaped C E Hospitality.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <Section id="overview">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-accent text-lg italic mb-4 block">Who We Are</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            C E Hospitality Group
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            C E Hospitality is a premier hospitality group dedicated to creating exceptional 
            experiences across dining, accommodation, and leisure. Our commitment to quality, 
            innovation, and guest satisfaction drives everything we do.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With our flagship brand, Cozmo Cafe Bistro Lounge, currently delighting guests 
            and four ambitious projects in development, we are building a comprehensive 
            hospitality portfolio that caters to diverse tastes and occasions.
          </p>
        </div>
      </Section>

      {/* History */}
      <Section dark id="history">
        <SectionHeader 
          label="Our Journey"
          title="Company History"
          description="The story of passion, perseverance, and pursuit of excellence."
        />
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2020</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">The Vision Takes Shape</h3>
              <p className="text-muted-foreground">
                C E Hospitality was founded with a clear vision: to create hospitality experiences 
                that combine luxury, warmth, and impeccable service. Our founders identified a gap 
                in the market for premium yet accessible hospitality venues.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2021</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">Cozmo Cafe Bistro Lounge Opens</h3>
              <p className="text-muted-foreground">
                Our flagship venue opened its doors, introducing the city to a new standard of 
                cafe and lounge experience. The response exceeded expectations, validating our 
                approach to premium hospitality.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2023</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">Expansion Plans Announced</h3>
              <p className="text-muted-foreground">
                Building on our success, we announced plans for four new hospitality projects: 
                luxury hotels, premium resorts, specialty coffee shops, and exclusive lounges.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-foreground/30" />
              <span className="text-muted-foreground font-display text-xl">2025 & Beyond</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">The Future Unfolds</h3>
              <p className="text-muted-foreground">
                With strategic expansion plans in motion, we continue to grow while maintaining 
                our commitment to excellence that defines C E Hospitality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section id="vision">
        <div className="grid lg:grid-cols-2 gap-12">
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
      </Section>

      {/* Leadership */}
      <Section dark id="leadership">
        <SectionHeader 
          label="Leadership"
          title="Meet Our Directors"
          description="The visionaries and experts driving C E Hospitality's success."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DirectorCard 
            name="Alexander Chen"
            role="Founder & CEO"
            description="With over 15 years in luxury hospitality, Alexander leads the group's strategic vision and expansion. His passion for excellence and guest experience drives every decision."
          />
          <DirectorCard 
            name="Victoria Ellis"
            role="Director of Operations"
            description="Victoria ensures seamless operations across all venues. Her expertise in hospitality management guarantees consistent quality and service excellence."
          />
          <DirectorCard 
            name="Marcus Williams"
            role="Culinary Director"
            description="An award-winning chef bringing innovative cuisine and exceptional dining experiences. Marcus curates our menus with creativity and precision."
          />
          <DirectorCard 
            name="Sarah Mitchell"
            role="Brand Director"
            description="Sarah shapes the visual identity and guest experience across all C E Hospitality brands, ensuring consistency and memorable impressions."
          />
          <DirectorCard 
            name="David Park"
            role="Finance Director"
            description="David oversees financial strategy and sustainable growth, ensuring the group's long-term success and stability."
          />
          <DirectorCard 
            name="Emma Roberts"
            role="HR Director"
            description="Emma builds and nurtures our team culture, ensuring we attract and retain the best talent in hospitality."
          />
        </div>
      </Section>

      {/* Brand Portfolio */}
      <Section>
        <SectionHeader 
          label="Our Portfolio"
          title="Hospitality Brands"
          description="A growing family of premium hospitality experiences."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BrandCard 
            name="Cozmo Cafe Bistro Lounge"
            type="Cafe & Lounge"
            status="live"
            description="Premium coffee, artisan mocktails, gourmet cuisine, and sophisticated lounge experience."
            icon={<Coffee className="w-7 h-7" />}
          />
          <BrandCard 
            name="Luxury Hotels"
            type="Hospitality"
            status="coming-soon"
            description="World-class accommodations with exceptional comfort and service."
            icon={<Building2 className="w-7 h-7" />}
          />
          <BrandCard 
            name="Premium Resorts"
            type="Leisure"
            status="coming-soon"
            description="Destination retreats offering relaxation and adventure."
            icon={<TreePalm className="w-7 h-7" />}
          />
          <BrandCard 
            name="Specialty Coffee Shops"
            type="Quick Service"
            status="coming-soon"
            description="Artisan coffee destinations in urban locations."
            icon={<Coffee className="w-7 h-7" />}
          />
          <BrandCard 
            name="Exclusive Lounges"
            type="Entertainment"
            status="coming-soon"
            description="Sophisticated venues with premium beverages and entertainment."
            icon={<Wine className="w-7 h-7" />}
          />
        </div>
      </Section>

      {/* Company Values */}
      <Section dark>
        <SectionHeader 
          label="Our Values"
          title="What We Stand For"
          description="The principles that guide every aspect of our hospitality."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PremiumCard>
            <Heart className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Guest First</h3>
            <p className="text-muted-foreground text-sm">Every decision is made with our guests' comfort and satisfaction in mind.</p>
          </PremiumCard>
          <PremiumCard>
            <Award className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Excellence</h3>
            <p className="text-muted-foreground text-sm">We pursue the highest standards in everything we do.</p>
          </PremiumCard>
          <PremiumCard>
            <TrendingUp className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Innovation</h3>
            <p className="text-muted-foreground text-sm">Continuously evolving to bring fresh experiences.</p>
          </PremiumCard>
          <PremiumCard>
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Teamwork</h3>
            <p className="text-muted-foreground text-sm">Together we create exceptional hospitality experiences.</p>
          </PremiumCard>
        </div>
      </Section>

      {/* Standards & Responsibilities */}
      <Section>
        <SectionHeader 
          label="Our Standards"
          title="Rules & Responsibilities"
          description="The operational principles that ensure consistent excellence across all venues."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Hygiene & Safety Standards
            </h3>
            <ul className="space-y-3">
              {[
                'Regular sanitization of all areas',
                'Staff health monitoring protocols',
                'Food safety certification compliance',
                'Emergency response procedures',
                'Guest safety as top priority'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Service Ethics
            </h3>
            <ul className="space-y-3">
              {[
                'Warm and genuine hospitality',
                'Prompt and attentive service',
                'Professional conduct at all times',
                'Respect for guest privacy',
                'Continuous improvement mindset'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
