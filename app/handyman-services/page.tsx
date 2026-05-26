import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Wrench, Home, DoorOpen, Droplets, Star, Shield } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'
import { ServiceSchema } from '@/components/schema/local-business'

export const metadata: Metadata = {
  title: 'Handyman Services | Doors, Windows & Home Repairs',
  description: 'Professional handyman services in Lima, Wapakoneta, St. Marys, and Delphos, Ohio. Door installation, window replacement, plumbing repairs & more. BBB A+ Rated. Call (567) 284-8733.',
  keywords: ['handyman Lima Ohio', 'door installation', 'window replacement', 'home repairs Wapakoneta', 'plumbing repairs', 'handyman near me'],
  openGraph: {
    title: 'Handyman Services | BGK Handy Services',
    description: 'Complete home repair solutions - doors, windows, plumbing & more. Serving Lima, Ohio area.',
    images: ['/images/hero-handyman.jpg'],
  },
}

const handymanService = businessInfo.services.find(s => s.id === 'handyman')!

const handymanFeatures = [
  {
    icon: DoorOpen,
    title: "Door Installation",
    description: "Interior and exterior door installation, repair, and hardware replacement."
  },
  {
    icon: Home,
    title: "Window Services",
    description: "Window replacement, repair, and weatherproofing to improve energy efficiency."
  },
  {
    icon: Droplets,
    title: "Plumbing Repairs",
    description: "Minor plumbing fixes including faucets, toilets, and drain cleaning."
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Drywall repair, fixture installation, and a wide range of home repairs."
  },
]

const handymanServices = [
  "Interior door installation",
  "Exterior door replacement",
  "Window installation",
  "Screen repair & replacement",
  "Faucet & fixture installation",
  "Toilet repairs",
  "Drywall patching",
  "Trim & molding installation",
  "Cabinet hardware",
  "Shelving installation",
  "Light fixture mounting",
  "Ceiling fan installation",
  "Weatherstripping",
  "Caulking & sealing",
  "Minor electrical work",
  "Appliance hookup",
]

export default function HandymanPage() {
  return (
    <>
      <ServiceSchema service={handymanService} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Wrench className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">No Job Too Small</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Professional <span className="text-primary">Handyman</span> Services
                </h1>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From door installations to plumbing repairs, our skilled handymen handle all your home repair needs with quality workmanship and attention to detail.
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
                    src="/images/hero-handyman.jpg"
                    alt="Professional handyman performing home repairs in Lima, Ohio"
                    width={600}
                    height={450}
                    className="object-cover w-full aspect-[4/3]"
                    priority
                  />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects<br />Completed
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
                Home Repair Expertise
              </h2>
              <p className="text-muted-foreground">
                Our experienced handymen bring skill and professionalism to every project, big or small.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {handymanFeatures.map((feature) => (
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
                <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Fix</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
                  Complete Handyman Services
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Don&apos;t let those nagging home repairs pile up. Our skilled handymen can tackle your to-do list efficiently and affordably, with quality results you can count on.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {handymanServices.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Why Homeowners Trust Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quality Workmanship</h4>
                      <p className="text-sm text-muted-foreground">Every job is done right the first time with attention to detail.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Fair & Transparent Pricing</h4>
                      <p className="text-sm text-muted-foreground">No hidden fees - you&apos;ll know the cost before we start.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Reliable & Punctual</h4>
                      <p className="text-sm text-muted-foreground">We show up when we say we will and finish on schedule.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Clean & Respectful</h4>
                      <p className="text-sm text-muted-foreground">We treat your home with care and clean up after ourselves.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a href={`tel:${businessInfo.phoneRaw}`}>
                    <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Phone className="h-5 w-5" />
                      Get a Free Estimate
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
