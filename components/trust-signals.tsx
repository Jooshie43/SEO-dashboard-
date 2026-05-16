import Link from 'next/link'
import { Star, Shield, Award, Users, Clock } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

export function TrustSignals() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
            Trusted by Homeowners Across Ohio
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With over 15 years of experience and a BBB A+ Rating, we&apos;re committed to delivering exceptional quality and service.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {/* BBB Rating */}
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">BBB A+ Rated</h3>
            <p className="text-sm text-muted-foreground">Better Business Bureau</p>
          </div>

          {/* Reviews */}
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Star className="h-8 w-8 text-primary fill-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{businessInfo.ratings.reviewCount} Five-Star Reviews</h3>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{businessInfo.stats.years} Years</h3>
            <p className="text-sm text-muted-foreground">Serving Ohio Families</p>
          </div>

          {/* Licensed */}
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Licensed & Insured</h3>
            <p className="text-sm text-muted-foreground">Full Protection</p>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-destructive-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">24/7 Emergency Roof Repairs</h3>
                <p className="text-muted-foreground">Fast response for urgent roofing emergencies in Lima and surrounding areas</p>
              </div>
            </div>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Call Now: {businessInfo.phone}
            </a>
          </div>
        </div>

        {/* Directory Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Find us on trusted directories:</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href={businessInfo.socialLinks.google} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              Google Business
            </a>
            <a 
              href={businessInfo.socialLinks.yelp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              Yelp
            </a>
            <a 
              href={businessInfo.socialLinks.bbb} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              Better Business Bureau
            </a>
            <a 
              href={businessInfo.socialLinks.yellowPages} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              Yellow Pages
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
