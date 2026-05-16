import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground">
              BGK <span className="text-primary">Handy Services</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trusted home repairs since 2008. Professional roofing, handyman, and property maintenance services in Lima, Ohio and surrounding areas.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                BBB A+ Rated
              </div>
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {businessInfo.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Service Areas</h4>
            <ul className="space-y-2">
              {businessInfo.serviceAreas.slice(0, 6).map((area) => (
                <li key={area.name}>
                  <Link
                    href="/service-areas"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {businessInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Text on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  Mon-Fri: {businessInfo.hours.weekdays}<br />
                  <span className="text-destructive font-medium">24/7 Emergency</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Directory Links */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Find us on:</span>
            <a href={businessInfo.socialLinks.google} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Google
            </a>
            <span>•</span>
            <a href={businessInfo.socialLinks.yelp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Yelp
            </a>
            <span>•</span>
            <a href={businessInfo.socialLinks.bbb} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              BBB
            </a>
            <span>•</span>
            <a href={businessInfo.socialLinks.yellowPages} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Yellow Pages
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
