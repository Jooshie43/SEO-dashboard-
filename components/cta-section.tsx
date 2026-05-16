import Link from 'next/link'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-card rounded-2xl overflow-hidden border border-border">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl mx-auto text-center">
              {/* Badge */}
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Free Estimates Available
              </span>

              {/* Headline */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Ready to Start Your Project?
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Get a free, no-obligation estimate for your roofing, handyman, or property maintenance needs. Serving Lima, Wapakoneta, St. Marys, Delphos, and surrounding Ohio communities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${businessInfo.phoneRaw}`}>
                  <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                    <Phone className="h-5 w-5" />
                    Call {businessInfo.phone}
                  </Button>
                </a>
                <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                    <Calendar className="h-5 w-5" />
                    Schedule Online
                  </Button>
                </a>
              </div>

              {/* Service Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Our Services:</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {businessInfo.services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PromotionBanner() {
  return (
    <section className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              Special Offer
            </span>
            <span className="text-primary-foreground font-medium">
              Save on Roofing Replacement Projects!
            </span>
          </div>
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="text-primary-foreground hover:text-primary-foreground/80 font-semibold underline underline-offset-4 transition-colors"
          >
            Call for Details: {businessInfo.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
