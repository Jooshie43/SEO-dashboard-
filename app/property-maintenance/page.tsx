import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Building, Brush, Ruler, Sparkles, Star, Shield } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'
import { ServiceSchema } from '@/components/schema/local-business'

export const metadata: Metadata = {
  title: 'Property Maintenance | Siding, Gutters & Exterior Care',
  description: 'Professional property maintenance services in Lima, Wapakoneta, St. Marys, and Delphos, Ohio. Siding repair, gutter cleaning, pressure washing & more. BBB A+ Rated. Call (567) 284-8733.',
  keywords: ['property maintenance Lima Ohio', 'siding repair', 'gutter cleaning', 'pressure washing', 'exterior maintenance Wapakoneta', 'commercial property maintenance'],
  openGraph: {
    title: 'Property Maintenance | BGK Handy Services',
    description: 'Complete property maintenance - siding, gutters, exterior care. Serving Lima, Ohio area.',
    images: ['/images/property-maintenance.jpg'],
  },
}

const maintenanceService = businessInfo.services.find(s => s.id === 'maintenance')!

const maintenanceFeatures = [
  {
    icon: Brush,
    title: "Siding Services",
    description: "Expert siding repair, replacement, and cleaning to protect and beautify your property."
  },
  {
    icon: Building,
    title: "Gutter Maintenance",
    description: "Gutter cleaning, repair, and installation to prevent water damage to your home."
  },
  {
    icon: Sparkles,
    title: "Pressure Washing",
    description: "Professional cleaning for driveways, sidewalks, decks, and building exteriors."
  },
  {
    icon: Ruler,
    title: "Deck & Fence",
    description: "Repair, staining, and maintenance for decks, fences, and outdoor structures."
  },
]

const maintenanceServices = [
  "Siding repair & replacement",
  "Vinyl siding installation",
  "Gutter cleaning",
  "Gutter guard installation",
  "Downspout repair",
  "Pressure washing",
  "Deck repair & staining",
  "Fence repair",
  "Exterior painting touch-ups",
  "Window cleaning",
  "Soffit & fascia repair",
  "Seasonal maintenance",
  "Commercial property care",
  "Rental property maintenance",
  "HOA maintenance services",
  "Storm cleanup",
]

export default function PropertyMaintenancePage() {
  return (
    <>
      <ServiceSchema service={maintenanceService} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Residential & Commercial</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Professional <span className="text-primary">Property Maintenance</span>
                </h1>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Keep your property looking its best with our comprehensive maintenance services. From siding repairs to seasonal upkeep, we handle it all for residential and commercial clients.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${businessInfo.phoneRaw}`}>
                    <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      <Phone className="h-5 w-5" />
                      Call Now: {businessInfo.phone}
                    </Button>
                  </a>
                  <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                      Schedule Service
                    </Button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <span className="text-sm text-muted-foreground">BBB A+ Rated</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/property-maintenance.jpg"
                    alt="Property maintenance service - exterior cleaning in Ohio"
                    width={600}
                    height={450}
                    className="object-cover w-full aspect-[4/3]"
                    priority
                  />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-muted-foreground mb-1">Serving</div>
                  <div className="text-2xl font-bold text-primary">8+ Cities</div>
                  <div className="text-sm text-muted-foreground">in Ohio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
                Complete Exterior Care
              </h2>
              <p className="text-muted-foreground">
                Protect your investment with professional property maintenance that keeps your home or business looking great year-round.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceFeatures.map((feature) => (
                <div key={feature.title} className="bg-background rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
                  Maintenance Solutions
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Regular property maintenance prevents costly repairs and keeps your property value high. Let us handle the exterior care so you can focus on what matters most.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {maintenanceServices.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Types */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Residential Properties</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Keep your home&apos;s exterior in top condition with our residential maintenance services. We handle everything from routine gutter cleaning to major siding repairs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Single family homes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Condos & townhomes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Seasonal properties
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Commercial Properties</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain a professional appearance for your business with our commercial maintenance programs. Flexible scheduling to minimize disruption.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Retail storefronts
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Office buildings
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Rental properties
                    </li>
                  </ul>
                </div>

                <a href={`tel:${businessInfo.phoneRaw}`}>
                  <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-5 w-5" />
                    Get a Free Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold mb-6">Serving These Ohio Communities</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {businessInfo.serviceAreas.map((area) => (
                <span key={area.name} className="px-4 py-2 bg-background rounded-full text-sm text-muted-foreground border border-border">
                  {area.name}, {area.state}
                </span>
              ))}
            </div>
            <Link href="/service-areas" className="inline-block mt-6 text-primary hover:text-primary/80 font-medium">
              View All Service Areas →
            </Link>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
