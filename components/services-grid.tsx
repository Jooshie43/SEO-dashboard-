import Link from 'next/link'
import { Home, Wrench, Building, ArrowRight } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'

const serviceIcons = {
  roofing: Home,
  handyman: Wrench,
  maintenance: Building,
}

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
            Professional Home Repair Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From emergency roof repairs to complete property maintenance, we deliver quality craftsmanship and reliable service throughout Lima, Ohio and surrounding areas.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {businessInfo.services.map((service) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons]
            return (
              <div
                key={service.id}
                className="group relative bg-background rounded-xl p-6 lg:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${service.slug}`}>
                  <Button variant="ghost" className="group/btn gap-2 p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Get a Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
