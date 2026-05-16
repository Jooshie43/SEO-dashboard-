import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Service Areas | Lima, Wapakoneta, St. Marys, Delphos, Ohio',
  description: 'BGK Handy Services serves Lima, Wapakoneta, St. Marys, Delphos, Waynesfield, Ada, Kenton, and Bellefontaine, Ohio. Professional roofing, handyman, and property maintenance.',
  keywords: ['handyman Lima Ohio', 'roofing Wapakoneta', 'property maintenance St. Marys', 'home repairs Delphos', 'contractor near me'],
  openGraph: {
    title: 'Service Areas | BGK Handy Services',
    description: 'Professional home repair services throughout western Ohio.',
  },
}

const serviceAreaDetails = [
  {
    name: "Lima",
    state: "OH",
    description: "Full-service roofing, handyman, and property maintenance for Lima and the greater Allen County area.",
    services: ["Emergency roof repairs", "Handyman services", "Property maintenance", "Siding repair"],
    featured: true,
  },
  {
    name: "Wapakoneta",
    state: "OH",
    description: "Proud to serve the birthplace of Neil Armstrong with quality home repair services.",
    services: ["Roof replacement", "Window installation", "Gutter cleaning", "Deck repair"],
    featured: true,
  },
  {
    name: "St. Marys",
    state: "OH",
    description: "Reliable home repairs for St. Marys residents near Grand Lake St. Marys.",
    services: ["Storm damage repair", "Door installation", "Pressure washing", "Fence repair"],
    featured: true,
  },
  {
    name: "Delphos",
    state: "OH",
    description: "Serving Delphos homeowners with trusted roofing and handyman solutions.",
    services: ["Shingle repair", "Plumbing fixes", "Exterior painting", "General repairs"],
    featured: true,
  },
  {
    name: "Waynesfield",
    state: "OH",
    description: "Our home base - providing the best service to our neighbors in Waynesfield.",
    services: ["All services available", "Fast response times", "Local expertise"],
    featured: false,
  },
  {
    name: "Ada",
    state: "OH",
    description: "Home repair services for Ada residents including the Ohio Northern University area.",
    services: ["Roof inspections", "Minor repairs", "Property maintenance"],
    featured: false,
  },
  {
    name: "Kenton",
    state: "OH",
    description: "Quality handyman and roofing services for Hardin County homeowners.",
    services: ["Roofing services", "Handyman repairs", "Seasonal maintenance"],
    featured: false,
  },
  {
    name: "Bellefontaine",
    state: "OH",
    description: "Serving Logan County with professional home repair and maintenance.",
    services: ["Roof repairs", "Home improvements", "Exterior services"],
    featured: false,
  },
]

export default function ServiceAreasPage() {
  const featuredAreas = serviceAreaDetails.filter(area => area.featured)
  const otherAreas = serviceAreaDetails.filter(area => !area.featured)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Service Areas</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
                Serving Western Ohio Communities
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                BGK Handy Services provides professional roofing, handyman, and property maintenance services throughout Lima, Ohio and surrounding communities. We&apos;re proud to serve our neighbors with quality workmanship and reliable service.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Service Areas */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
                Primary Service Areas
              </h2>
              <p className="text-muted-foreground">
                We provide comprehensive home repair services in these key Ohio communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredAreas.map((area) => (
                <div key={area.name} className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                        {area.name}, {area.state}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.services.map((service) => (
                          <span key={service} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Service Areas */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
                Additional Areas We Serve
              </h2>
              <p className="text-muted-foreground">
                We also provide services to these nearby communities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {otherAreas.map((area) => (
                <div key={area.name} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{area.name}, {area.state}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
                  Available in All Service Areas
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  No matter where you are in our service area, you&apos;ll receive the same high-quality workmanship and professional service that has earned us an A+ BBB Rating.
                </p>

                <div className="space-y-3">
                  {[
                    "Roofing repairs & replacement",
                    "24/7 emergency roof services",
                    "Handyman & general repairs",
                    "Door & window installation",
                    "Property maintenance",
                    "Siding & gutter services",
                    "Free estimates",
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-2xl p-8 border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Not Sure If We Serve Your Area?</h3>
                <p className="text-muted-foreground mb-6">
                  Give us a call! We may be able to help even if your city isn&apos;t listed. We&apos;re happy to discuss your project and service area options.
                </p>
                <div className="space-y-3">
                  <a href={`tel:${businessInfo.phoneRaw}`}>
                    <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Phone className="h-5 w-5" />
                      Call {businessInfo.phone}
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      Contact Us Online
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
