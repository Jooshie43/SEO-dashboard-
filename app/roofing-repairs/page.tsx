import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Clock, Shield, Star, AlertTriangle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'
import { ServiceSchema } from '@/components/schema/local-business'

export const metadata: Metadata = {
  title: 'Roofing Repairs & Replacement | 24/7 Emergency Service',
  description: 'Professional roof repairs, replacement, and 24/7 emergency services in Lima, Wapakoneta, St. Marys, and Delphos, Ohio. BBB A+ Rated. Free estimates. Call (567) 284-8733.',
  keywords: ['roof repair Lima Ohio', 'emergency roof repair', '24/7 roofing', 'roof replacement Wapakoneta', 'storm damage repair', 'roofing contractor Ohio'],
  openGraph: {
    title: 'Roofing Services | BGK Handy Services',
    description: 'Expert roof repairs and replacement with 24/7 emergency service. Serving Lima, Ohio area.',
    images: ['/images/roofing-service.jpg'],
  },
}

const roofingService = businessInfo.services.find(s => s.id === 'roofing')!

const roofingFeatures = [
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Response",
    description: "Roof emergencies don't wait, and neither do we. Our team is available around the clock for urgent repairs."
  },
  {
    icon: Shield,
    title: "Quality Workmanship",
    description: "We use premium materials and proven techniques to ensure your roof protects your home for years to come."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most repairs completed same-day. Larger projects scheduled quickly to minimize disruption to your life."
  },
  {
    icon: Star,
    title: "BBB A+ Rated",
    description: "Our commitment to quality and customer satisfaction has earned us an A+ rating with the Better Business Bureau."
  },
]

const roofingServices = [
  "Roof leak detection & repair",
  "Shingle replacement",
  "Full roof replacement",
  "Storm damage assessment",
  "Emergency tarping services",
  "Flashing repair",
  "Gutter installation",
  "Ventilation improvements",
  "Roof inspections",
  "Insurance claim assistance",
]

export default function RoofingPage() {
  return (
    <>
      <ServiceSchema service={roofingService} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <span className="text-sm font-medium text-destructive">24/7 Emergency Service Available</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Professional <span className="text-primary">Roofing Repairs</span> & Replacement
                </h1>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Protect your home with expert roofing services from BGK Handy Services. From minor leak repairs to complete roof replacement, we deliver quality workmanship backed by 15+ years of experience.
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
                      Schedule Free Estimate
                    </Button>
                  </a>
                </div>

                {/* Promo Badge */}
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    Special Offer: Save on roofing replacement projects! Call for details.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/roofing-service.jpg"
                    alt="Professional roofer repairing residential roof in Lima, Ohio"
                    width={600}
                    height={450}
                    className="object-cover w-full aspect-[4/3]"
                    priority
                  />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Years of<br />Experience
                    </div>
                  </div>
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
                Why Choose Our Roofing Services?
              </h2>
              <p className="text-muted-foreground">
                We combine expertise, quality materials, and exceptional customer service to deliver roofing solutions that last.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roofingFeatures.map((feature) => (
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Offer</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
                  Complete Roofing Solutions
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need a quick repair or a complete roof replacement, our experienced team handles projects of all sizes with the same attention to detail and commitment to quality.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {roofingServices.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-destructive-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">24/7 Emergency Roof Repairs</h3>
                    <p className="text-muted-foreground">
                      Roof damage from a storm? Sudden leak? Don&apos;t wait - our emergency team is ready to help protect your home right now.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href={`tel:${businessInfo.phoneRaw}`} className="block">
                    <Button size="lg" className="w-full gap-2 bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold">
                      <Phone className="h-5 w-5" />
                      Call Emergency Line: {businessInfo.phone}
                    </Button>
                  </a>
                  <p className="text-sm text-center text-muted-foreground">
                    Fast response • Same-day service • Serving Lima, Wapakoneta, St. Marys, Delphos
                  </p>
                </div>
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
