"use client";

import { Phone, Wrench, Home, Shield, Star, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TrustBadgeSection />
      <ContactFormSection />
      <WhatsAppButton />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Wrench className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">
            BGK Handy Services
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+15672848733"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <a
            href="sms:+15672848733?body=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20your%20services."
            className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Text Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-6 font-medium">
          Professional Contractor Services
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-none tracking-tight text-balance">
          Quality Craftsmanship,
          <br />
          <span className="text-primary">Trusted Results</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From roofing to remodeling, we deliver exceptional handy services 
          with a commitment to excellence and customer satisfaction.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15672848733"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now: (567) 284-8733
          </a>
          <a
            href="sms:+15672848733?body=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20your%20services."
            className="flex items-center gap-3 border border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Text Us: (567) 284-8733
          </a>
        </div>
        <div className="mt-4">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
          >
            Get Free Quote
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm">BBB A+ Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Roofing",
      description: "Complete roof installation, repair, and maintenance. We handle shingles, metal roofing, flat roofs, and emergency repairs.",
      features: ["Installation", "Repairs", "Inspections", "Emergency Service"],
    },
    {
      icon: Wrench,
      title: "Remodeling",
      description: "Transform your space with our expert remodeling services. Kitchens, bathrooms, basements, and whole-home renovations.",
      features: ["Kitchens", "Bathrooms", "Basements", "Additions"],
    },
    {
      icon: Shield,
      title: "Maintenance",
      description: "Keep your property in top condition with our comprehensive maintenance services. Preventive care and timely repairs.",
      features: ["HVAC", "Plumbing", "Electrical", "General Repairs"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What We Do Best
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive handy services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBadgeSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Trusted Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With years of experience and a commitment to quality, BGK Handy Services 
              has earned the trust of homeowners across the region. Our BBB A+ rating 
              reflects our dedication to customer satisfaction.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-primary mb-1">500+</p>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">15+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">100%</p>
                <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">24/7</p>
                <p className="text-muted-foreground text-sm">Emergency Service</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-card border border-border rounded-3xl flex flex-col items-center justify-center p-8">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-primary-foreground">A+</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">BBB Accredited</p>
                <p className="text-muted-foreground text-center text-sm">
                  Better Business Bureau
                </p>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Request a Quote
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          {submitted ? (
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                Your request has been submitted. We&apos;ll contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="roofing">Roofing</option>
                  <option value="remodeling">Remodeling</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15672848733?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
