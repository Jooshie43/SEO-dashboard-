import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, Calendar, Star, Shield } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Trusted Since 2008 • Lima, Ohio
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Trusted<br />
                Home<br />
                <span className="text-primary italic">Repairs</span><br />
                <span className="font-normal">Since 2008</span>
              </h1>
            </div>

            {/* BBB Badge */}
            <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border max-w-xs">
              <div className="flex items-center justify-center w-16 h-12 bg-primary/10 rounded">
                <span className="font-bold text-primary">BBB</span>
              </div>
              <div className="border-l border-border pl-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${businessInfo.phoneRaw}`} className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                  <Phone className="h-5 w-5" />
                  Call Now: {businessInfo.phone}
                </Button>
              </a>
              <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6">
                  <MessageCircle className="h-5 w-5" />
                  Text Us on WhatsApp
                </Button>
              </a>
            </div>

            {/* Schedule Link */}
            <a 
              href={businessInfo.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Or schedule a free estimate online</span>
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Emergency Badge */}
            <div className="absolute -top-2 right-4 md:right-0 z-10">
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                24/7 Emergency
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-handyman.jpg"
                alt="Professional handyman performing home repairs in Lima, Ohio"
                width={600}
                height={500}
                className="object-cover w-full aspect-[4/3]"
                priority
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{businessInfo.stats.projects}</div>
                    <div className="text-xs text-white/70">Projects</div>
                  </div>
                  <div className="w-px h-10 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{businessInfo.stats.years}</div>
                    <div className="text-xs text-white/70">Years</div>
                  </div>
                  <div className="w-px h-10 bg-white/30"></div>
                  <div className="text-center flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="text-xs text-white/70">5-Star</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg hidden md:flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Licensed &</div>
                <div className="text-sm font-semibold text-foreground">Insured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
