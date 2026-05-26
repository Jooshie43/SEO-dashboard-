import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { ServicesGrid } from '@/components/services-grid'
import { TrustSignals } from '@/components/trust-signals'
import { ReviewsCarousel } from '@/components/reviews-carousel'
import { CTASection, PromotionBanner } from '@/components/cta-section'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromotionBanner />
        <ServicesGrid />
        <TrustSignals />
        <ReviewsCarousel />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
