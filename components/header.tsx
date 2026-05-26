"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/roofing-repairs', label: 'Roofing' },
  { href: '/handyman-services', label: 'Handyman' },
  { href: '/property-maintenance', label: 'Maintenance' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground py-2 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          24/7 Emergency Roof Repairs Available - Call Now!
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
                BGK <span className="text-primary">Handy Services</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              {/* WhatsApp - hidden on smallest screens */}
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex"
              >
                <Button variant="outline" size="sm" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden md:inline">WhatsApp</span>
                </Button>
              </a>

              {/* Call Now Button */}
              <a href={`tel:${businessInfo.phoneRaw}`}>
                <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 relative pulse-ring">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">{businessInfo.phone}</span>
                  <span className="sm:hidden">Call</span>
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden border-t border-border/40 overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border/40 mt-2 flex flex-col gap-2">
              <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full gap-2 border-primary/50 text-primary">
                  <MessageCircle className="h-4 w-4" />
                  Text on WhatsApp
                </Button>
              </a>
              <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="w-full">
                  Schedule Appointment
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
