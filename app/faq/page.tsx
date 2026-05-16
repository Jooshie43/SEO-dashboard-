import type { Metadata } from 'next'
import { Phone, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'
import { FAQSchema } from '@/components/schema/local-business'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Common questions about BGK Handy Services - roofing repairs, handyman services, pricing, service areas, and more. Serving Lima, Ohio area since 2008.',
  openGraph: {
    title: 'Frequently Asked Questions | BGK Handy Services',
    description: 'Get answers to common questions about our roofing, handyman, and property maintenance services.',
  },
}

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What areas do you serve?",
        answer: "We serve Lima, Wapakoneta, St. Marys, Delphos, Waynesfield, Ada, Kenton, Bellefontaine, and surrounding communities in western Ohio. If you're not sure if we serve your area, give us a call and we'll let you know!"
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, BGK Handy Services is fully licensed and insured. We carry liability insurance and workers' compensation to protect both our team and your property."
      },
      {
        question: "How long have you been in business?",
        answer: "We've been serving Ohio families since 2008 - that's over 15 years of trusted home repair experience. Our BBB A+ Rating reflects our commitment to quality and customer satisfaction."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes! We provide free, no-obligation estimates for all our services. Call us at (567) 284-8733 or schedule online through our Calendly booking system."
      },
    ]
  },
  {
    category: "Roofing Services",
    questions: [
      {
        question: "Do you offer 24/7 emergency roof repairs?",
        answer: "Yes, we provide 24/7 emergency roof repair services. If you have an urgent roof leak or storm damage, call us immediately at (567) 284-8733 and we'll respond as quickly as possible to protect your home."
      },
      {
        question: "What types of roofing services do you provide?",
        answer: "We offer comprehensive roofing services including leak repair, shingle replacement, full roof replacement, storm damage repair, emergency tarping, flashing repair, gutter installation, roof inspections, and insurance claim assistance."
      },
      {
        question: "How do I know if my roof needs to be repaired or replaced?",
        answer: "Signs you may need roof repair or replacement include missing or damaged shingles, leaks or water stains on ceilings, sagging roof sections, granules in gutters, and a roof over 20 years old. We offer free inspections to assess your roof's condition."
      },
      {
        question: "Do you help with insurance claims for roof damage?",
        answer: "Yes, we can assist with insurance claims for storm damage and other covered repairs. We'll document the damage, provide detailed estimates, and work with your insurance adjuster to help ensure you get fair coverage."
      },
    ]
  },
  {
    category: "Handyman Services",
    questions: [
      {
        question: "What handyman services do you offer?",
        answer: "Our handyman services include door and window installation, minor plumbing repairs, drywall patching, fixture installation, trim and molding work, cabinet hardware, shelving, ceiling fans, weatherstripping, and general home repairs."
      },
      {
        question: "Is there a minimum job size?",
        answer: "No job is too small! Whether you need a single door installed or have a list of small repairs, we're happy to help. We can also combine multiple small projects into one visit to save you time and money."
      },
      {
        question: "Do you do plumbing and electrical work?",
        answer: "We handle minor plumbing repairs like faucet installation, toilet repairs, and drain cleaning. For electrical work, we can install light fixtures, ceiling fans, and outlets. For major plumbing or electrical projects, we can recommend licensed specialists."
      },
    ]
  },
  {
    category: "Property Maintenance",
    questions: [
      {
        question: "Do you offer ongoing maintenance programs?",
        answer: "Yes, we can set up regular maintenance schedules for residential and commercial properties. This is especially popular with landlords, property managers, and HOAs who need consistent, reliable service."
      },
      {
        question: "What property maintenance services do you provide?",
        answer: "Our property maintenance services include siding repair, gutter cleaning, pressure washing, deck repair and staining, fence repair, exterior painting touch-ups, window cleaning, seasonal maintenance, and storm cleanup."
      },
      {
        question: "Do you work on commercial properties?",
        answer: "Yes, we serve both residential and commercial clients. We can work around your business hours to minimize disruption and maintain a professional appearance for your property."
      },
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Pricing varies based on the specific work needed. We provide free, detailed estimates before any work begins so you know exactly what to expect. We're committed to fair, transparent pricing with no hidden fees."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, personal checks, and all major credit cards. For larger projects, we can discuss payment arrangements."
      },
      {
        question: "Do you require a deposit?",
        answer: "For most repair work, no deposit is required. For larger projects like roof replacements, we may request a deposit to cover materials. This will be clearly outlined in your estimate."
      },
    ]
  },
  {
    category: "Scheduling",
    questions: [
      {
        question: "How do I schedule an appointment?",
        answer: "You can schedule by calling us at (567) 284-8733, texting us on WhatsApp, or booking online through our Calendly scheduling system. We'll work to find a time that's convenient for you."
      },
      {
        question: "How quickly can you start my project?",
        answer: "For urgent repairs like roof leaks, we often provide same-day or next-day service. For scheduled projects, we typically can begin within a few days to a week, depending on our current workload."
      },
      {
        question: "What are your business hours?",
        answer: "Our regular hours are Monday-Friday 7:00 AM - 7:00 PM and Saturday 8:00 AM - 5:00 PM. Sunday is emergency-only. For roof emergencies, we're available 24/7."
      },
    ]
  },
]

// Flatten FAQs for schema
const allFaqs = faqs.flatMap(category => 
  category.questions.map(q => ({ question: q.question, answer: q.answer }))
)

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Find answers to common questions about our roofing, handyman, and property maintenance services. Can&apos;t find what you&apos;re looking for? Contact us directly!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {faqs.map((category) => (
                <div key={category.category} className="mb-12 last:mb-0">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.category}-${index}`}
                        className="bg-background border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re here to help! Contact us directly and we&apos;ll be happy to answer any questions about your project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${businessInfo.phoneRaw}`}>
                  <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-5 w-5" />
                    Call {businessInfo.phone}
                  </Button>
                </a>
                <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="h-5 w-5" />
                    Text on WhatsApp
                  </Button>
                </a>
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
