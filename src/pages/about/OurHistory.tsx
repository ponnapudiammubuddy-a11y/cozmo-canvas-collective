import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section, SectionHeader } from '@/components/Section';
import heroLounge from '@/assets/hero-lounge.jpg';

const OurHistory = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroLounge} 
            alt="Our History"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative container mx-auto px-6 pt-20">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            About Us
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Our <span className="text-gradient-gold">History</span>
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <Section>
        <SectionHeader 
          label="Our Journey"
          title="The Story So Far"
          description="A timeline of passion, perseverance, and pursuit of excellence."
        />
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2020</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">The Vision Takes Shape</h3>
              <p className="text-muted-foreground">
                C E Hospitality was founded with a clear vision: to create hospitality experiences 
                that combine luxury, warmth, and impeccable service. Our founders identified a gap 
                in the market for premium yet accessible hospitality venues.
              </p>
            </div>
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2021</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">Cozmo Cafe Bistro Lounge Opens</h3>
              <p className="text-muted-foreground">
                Our flagship venue opened its doors, introducing the city to a new standard of 
                cafe and lounge experience. The response exceeded expectations, validating our 
                approach to premium hospitality.
              </p>
            </div>
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2022</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">Growing Recognition</h3>
              <p className="text-muted-foreground">
                Industry recognition followed as Cozmo Cafe earned its first hospitality awards. 
                Our unique blend of atmosphere, cuisine, and service began attracting attention 
                from investors and partners.
              </p>
            </div>
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary" />
              <span className="text-primary font-display text-xl">2023</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-3">Expansion Plans Announced</h3>
              <p className="text-muted-foreground">
                Building on our success, we announced plans for four new hospitality projects: 
                luxury hotels, premium resorts, specialty coffee shops, and exclusive lounges.
              </p>
            </div>
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
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

      <Footer />
    </div>
  );
};

export default OurHistory;
