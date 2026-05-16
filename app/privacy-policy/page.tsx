import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for BGK Handy Services. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 15, 2026"

  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {businessInfo.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you provide when requesting a quote, scheduling service, or contacting us.</li>
                  <li><strong className="text-foreground">Service Information:</strong> Details about the services you request, your property address, and project specifications.</li>
                  <li><strong className="text-foreground">Communication Data:</strong> Records of your correspondence with us, including emails, phone calls, and text messages.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and respond to your inquiries and service requests</li>
                  <li>Schedule appointments and provide estimates</li>
                  <li>Communicate with you about services, promotions, and updates</li>
                  <li>Process payments and maintain records</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Service Providers:</strong> With trusted third parties who assist us in operating our business (e.g., payment processors, scheduling software).</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property.</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  <li><strong className="text-foreground">With Your Consent:</strong> When you have given us permission to share your information.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some features of our website may not function properly without cookies.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to opt-out of marketing communications</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us at:
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
