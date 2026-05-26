import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for BGK Handy Services. Read our service terms, policies, and guidelines.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const lastUpdated = "May 15, 2026"

  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and {businessInfo.name}.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {businessInfo.name} provides roofing repairs, handyman services, and property maintenance (&ldquo;Services&rdquo;) in Lima, Ohio and surrounding areas. Our Services are subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All work is performed according to applicable building codes and industry standards.</li>
                  <li>We reserve the right to refuse service to anyone for any reason.</li>
                  <li>Service availability may vary based on location, weather conditions, and scheduling.</li>
                  <li>Prices and services are subject to change without notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Estimates and Pricing</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Free estimates are provided for most services upon request.</li>
                  <li>Estimates are valid for 30 days unless otherwise specified.</li>
                  <li>Final pricing may vary if project scope changes or unforeseen conditions are discovered.</li>
                  <li>Any changes to the original scope of work will be discussed and agreed upon before proceeding.</li>
                  <li>We are not responsible for pre-existing conditions not visible during initial inspection.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment is due upon completion of work unless other arrangements have been made in writing.</li>
                  <li>For larger projects, a deposit may be required before work begins.</li>
                  <li>We accept cash, checks, and major credit cards.</li>
                  <li>Late payments may incur additional fees as permitted by law.</li>
                  <li>All prices are in US Dollars.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Scheduling and Cancellations</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Appointments can be scheduled by phone, WhatsApp, or through our online booking system.</li>
                  <li>We appreciate at least 24 hours notice for cancellations or rescheduling.</li>
                  <li>Weather conditions may require rescheduling of outdoor work.</li>
                  <li>We will make reasonable efforts to accommodate schedule changes.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Warranties and Guarantees</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We stand behind our work:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Workmanship is warranted for a reasonable period following completion.</li>
                  <li>Material warranties are provided by the respective manufacturers.</li>
                  <li>Warranty claims must be reported within a reasonable time of discovery.</li>
                  <li>Warranties do not cover damage caused by neglect, misuse, or acts of nature.</li>
                  <li>Warranty service is limited to the original work performed.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Customer Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a customer, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate information about the work needed and property conditions.</li>
                  <li>Ensure safe access to work areas.</li>
                  <li>Remove or protect personal belongings near work areas.</li>
                  <li>Notify us of any known hazards (asbestos, lead paint, etc.).</li>
                  <li>Obtain necessary permits if required (or authorize us to do so).</li>
                  <li>Be available or have a representative available for questions during work.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, {businessInfo.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our Services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Insurance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {businessInfo.name} maintains general liability insurance and workers&apos; compensation coverage. Proof of insurance is available upon request.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of {businessInfo.name} and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our written permission.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these Terms or our Services shall first be addressed through good-faith negotiation. If resolution cannot be reached, disputes shall be resolved through binding arbitration in Ohio, in accordance with Ohio law.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us:
                </p>
                <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                  <p className="text-foreground font-semibold">{businessInfo.name}</p>
                  <p className="text-muted-foreground">{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                  <p className="text-muted-foreground">Phone: {businessInfo.phone}</p>
                  <p className="text-muted-foreground">Email: {businessInfo.email}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
