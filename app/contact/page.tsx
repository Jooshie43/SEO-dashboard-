import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Estimate',
  description: 'Contact BGK Handy Services for roofing, handyman, and property maintenance in Lima, Wapakoneta, St. Marys, and Delphos, Ohio. Call (567) 284-8733 or schedule online.',
  openGraph: {
    title: 'Contact BGK Handy Services',
    description: 'Get a free estimate for your home repair needs. Call or schedule online.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact Us</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
                Get Your Free Estimate
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to start your project? Contact us today for a free, no-obligation estimate. We serve Lima, Wapakoneta, St. Marys, Delphos, and surrounding Ohio communities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Call */}
              <a href={`tel:${businessInfo.phoneRaw}`} className="block">
                <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-primary text-lg font-semibold">{businessInfo.phone}</p>
                  <p className="text-sm text-muted-foreground mt-2">Available for calls and texts</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-[#25D366] text-lg font-semibold">Text Us Anytime</p>
                  <p className="text-sm text-muted-foreground mt-2">Quick responses via WhatsApp</p>
                </div>
              </a>

              {/* Schedule Online */}
              <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Schedule Online</h3>
                  <p className="text-primary text-lg font-semibold">Book Appointment</p>
                  <p className="text-sm text-muted-foreground mt-2">Pick a convenient time</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Details & Map */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a href={`tel:${businessInfo.phoneRaw}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href={`mailto:${businessInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Service Area</h3>
                      <p className="text-muted-foreground">
                        {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Serving Lima, Wapakoneta, St. Marys, Delphos & surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: {businessInfo.hours.weekdays}</p>
                        <p>Saturday: {businessInfo.hours.saturday}</p>
                        <p>Sunday: {businessInfo.hours.sunday}</p>
                        <p className="text-destructive font-medium">24/7 Emergency Roof Repairs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${businessInfo.phoneRaw}`}>
                    <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Phone className="h-5 w-5" />
                      Call Now
                    </Button>
                  </a>
                  <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Calendly Embed */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Schedule Your Free Estimate</h2>
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-6">
                    Choose a convenient time for us to discuss your project and provide a free estimate. You can also call us directly at any time.
                  </p>
                  <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Calendar className="h-5 w-5" />
                      Open Scheduling Calendar
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    30-minute consultation • No obligation • Free estimate
                  </p>
                </div>

                {/* Emergency Notice */}
                <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Roof Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Don&apos;t wait - call us immediately for 24/7 emergency roof repairs. We respond quickly to protect your home from further damage.
                  </p>
                  <a href={`tel:${businessInfo.phoneRaw}`}>
                    <Button variant="destructive" className="w-full gap-2">
                      <Phone className="h-5 w-5" />
                      Emergency Line: {businessInfo.phone}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold mb-6">We Serve These Communities</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {businessInfo.serviceAreas.map((area) => (
                <span key={area.name} className="px-4 py-2 bg-background rounded-full text-sm text-muted-foreground border border-border">
                  {area.name}, {area.state}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
