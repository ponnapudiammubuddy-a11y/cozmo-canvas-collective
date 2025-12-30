import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';

// Contact Page Schema
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Cozmo Cafe Bistro Lounge Hyderabad",
  "description": "Get in touch with Cozmo Cafe Bistro Lounge for reservations, inquiries, and feedback. Located in Banjara Hills, Hyderabad.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Cozmo Cafe Bistro Lounge",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@cozmocafe.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Road No. 12, Banjara Hills",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500034",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 08:00-23:00"
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Cozmo Cafe Hyderabad. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us | Cozmo Cafe Bistro Lounge Hyderabad - Reservations & Inquiries"
        description="Contact Cozmo Cafe Bistro Lounge in Banjara Hills, Hyderabad. Call us for table reservations, event bookings, catering inquiries. Best cafe in Hyderabad. Open daily 8 AM - 11 PM."
        keywords="contact cafe Hyderabad, cafe phone number, restaurant booking Hyderabad, Banjara Hills cafe contact, cafe reservations Hyderabad, lounge inquiry"
        canonicalUrl="https://cozmocafe.com/contact"
        structuredData={contactSchema}
      />
      
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-accent text-xl italic mb-4 block opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Get in Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            We'd love to hear from you. Reach out for reservations, inquiries, or feedback at our Hyderabad location.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">Visit Cozmo Cafe Hyderabad</h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a question about our menu, want to book a table, organize a party, 
              or simply want to share your feedback, we're here to help at our Banjara Hills location.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a href="tel:+91XXXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">
                    +91-XXXXXXXXXX
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a href="mailto:info@cozmocafe.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@cozmocafe.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <address className="text-muted-foreground not-italic">
                    Road No. 12, Banjara Hills<br />
                    Hyderabad, Telangana 500034
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Daily: 8:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I'd like to make a reservation at Cozmo Cafe Hyderabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              aria-label="Chat with Cozmo Cafe Hyderabad on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-display text-xl text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input 
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Reservation, Inquiry, Feedback..."
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" variant="gold" size="xl" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Map */}
      <section className="h-[400px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7!2d78.4071!3d17.4126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzQ1LjQiTiA3OMKwMjQnMjUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cozmo Cafe Bistro Lounge Location - Best Cafe in Banjara Hills Hyderabad Map"
          className="grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
