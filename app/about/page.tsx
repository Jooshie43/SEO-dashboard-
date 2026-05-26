import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Award, Users, Shield, Heart, Clock, CheckCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'About Us | Your Trusted Local Handyman Since 2008',
  description: 'Learn about BGK Handy Services - serving Lima, Ohio families since 2008. BBB A+ Rated. Professional roofing, handyman, and property maintenance services. Meet our team.',
  openGraph: {
    title: 'About BGK Handy Services',
    description: 'Trusted home repairs since 2008. Learn about our commitment to quality and customer service.',
  },
}

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We treat every home like our own and every customer like family."
  },
  {
    icon: Shield,
    title: "Quality Workmanship",
    description: "We never cut corners - every job is done right the first time."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We show up on time, communicate clearly, and finish when promised."
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honest pricing, honest work - what we quote is what you pay."
  },
]

const milestones = [
  { year: "2008", event: "Founded BGK Handy Services in Waynesfield, Ohio" },
  { year: "2012", event: "Expanded services to include roofing repairs" },
  { year: "2015", event: "Added property maintenance division" },
  { year: "2018", event: "Achieved 100+ completed projects milestone" },
  { year: "2020", event: "Earned BBB A+ Rating" },
  { year: "2024", event: "Celebrating 15+ years serving Ohio families" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
                Serving Ohio Families Since 2008
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                BGK Handy Services has been the trusted choice for home repairs in Lima, Wapakoneta, St. Marys, Delphos, and surrounding Ohio communities for over 15 years. Our commitment to quality workmanship and exceptional customer service has made us the go-to handyman and roofing contractor in the area.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">{businessInfo.stats.years}</div>
                <div className="text-sm text-muted-foreground mt-1">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">{businessInfo.stats.projects}</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{businessInfo.ratings.reviewCount} Five-Star Reviews</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">A+</div>
                <div className="text-sm text-muted-foreground mt-1">BBB Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Story</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
                  Built on Trust, Driven by Quality
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    BGK Handy Services was founded in 2008 with a simple mission: provide honest, reliable home repair services that homeowners can count on. What started as a small operation serving neighbors in Waynesfield has grown into a full-service handyman, roofing, and property maintenance company serving communities throughout western Ohio.
                  </p>
                  <p>
                    Operating under the name Cornett Contracting Global, we&apos;ve maintained our commitment to personalized service even as we&apos;ve grown. Every project - whether it&apos;s a simple repair or a complete roof replacement - receives the same attention to detail and dedication to quality.
                  </p>
                  <p>
                    Our BBB A+ Rating and 12 five-star reviews reflect our dedication to doing things right. We&apos;re not just contractors - we&apos;re your neighbors, and we take pride in helping our community maintain safe, comfortable homes.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">Our Journey</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{milestone.year}</span>
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="w-px h-full bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-sm text-foreground">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Values</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
                What We Stand For
              </h2>
              <p className="text-muted-foreground">
                These core values guide everything we do, from how we treat our customers to how we approach every project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
                  What Sets Us Apart
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "Local, family-owned business - not a franchise",
                  "Same-day service for many repairs",
                  "24/7 emergency roofing response",
                  "Free, no-obligation estimates",
                  "Transparent pricing with no hidden fees",
                  "Licensed, insured, and BBB A+ Rated",
                  "Serving the same communities for 15+ years",
                  "Personal attention on every project",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Preview */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold mb-6">Proudly Serving</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {businessInfo.serviceAreas.slice(0, 6).map((area) => (
                <span key={area.name} className="px-4 py-2 bg-background rounded-full text-sm text-muted-foreground border border-border">
                  {area.name}, {area.state}
                </span>
              ))}
            </div>
            <Link href="/service-areas" className="text-primary hover:text-primary/80 font-medium">
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
