import type { Metadata } from 'next'
import { Star, Quote, Phone, Calendar } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CTASection } from '@/components/cta-section'
import { businessInfo } from '@/lib/business-info'
import { ReviewSchema } from '@/components/schema/local-business'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Reviews | Customer Testimonials',
  description: 'Read what our customers say about BGK Handy Services. 12 five-star reviews from satisfied homeowners in Lima, Wapakoneta, St. Marys, and Delphos, Ohio.',
  openGraph: {
    title: 'Customer Reviews | BGK Handy Services',
    description: '12 five-star reviews from satisfied customers. See why homeowners trust us.',
  },
}

const reviews = [
  {
    id: 1,
    author: "Mike T.",
    location: "Lima, OH",
    rating: 5,
    text: "Josh did an excellent job repairing our roof after a storm. Quick response, fair pricing, and quality work. Highly recommend BGK Handy Services!",
    service: "Roof Repair",
    date: "2024-03-15",
  },
  {
    id: 2,
    author: "Sarah M.",
    location: "Wapakoneta, OH",
    rating: 5,
    text: "We've used BGK for multiple handyman projects over the years. Always reliable, professional, and the work is top-notch. They're our go-to for any home repairs.",
    service: "Handyman",
    date: "2024-02-28",
  },
  {
    id: 3,
    author: "Robert K.",
    location: "St. Marys, OH",
    rating: 5,
    text: "Had an emergency leak on a Sunday night and they were there within an hour. Saved us from major water damage. Can't thank them enough!",
    service: "Emergency Roof Repair",
    date: "2024-01-20",
  },
  {
    id: 4,
    author: "Jennifer L.",
    location: "Delphos, OH",
    rating: 5,
    text: "Great experience with window replacement. Josh was knowledgeable, gave us options within our budget, and the installation was flawless.",
    service: "Window Installation",
    date: "2024-03-01",
  },
  {
    id: 5,
    author: "David H.",
    location: "Lima, OH",
    rating: 5,
    text: "Professional property maintenance service. They handle all our rental properties and always do a thorough job. Communication is excellent.",
    service: "Property Maintenance",
    date: "2024-02-15",
  },
  {
    id: 6,
    author: "Patricia W.",
    location: "Waynesfield, OH",
    rating: 5,
    text: "Siding repair was completed quickly and looks brand new. Fair price and great workmanship. Will definitely use again!",
    service: "Siding Repair",
    date: "2024-01-05",
  },
  {
    id: 7,
    author: "James R.",
    location: "Lima, OH",
    rating: 5,
    text: "Finally found a reliable handyman! Josh fixed several items around our house in one visit. Efficient, clean, and reasonably priced.",
    service: "General Repairs",
    date: "2023-12-10",
  },
  {
    id: 8,
    author: "Lisa C.",
    location: "Wapakoneta, OH",
    rating: 5,
    text: "Our gutters were in terrible shape. BGK cleaned them out and installed new guards. Very professional and the price was right.",
    service: "Gutter Service",
    date: "2023-11-20",
  },
  {
    id: 9,
    author: "Tom B.",
    location: "St. Marys, OH",
    rating: 5,
    text: "Roof replacement went smoothly from start to finish. They worked with our insurance company and made the whole process stress-free.",
    service: "Roof Replacement",
    date: "2023-10-15",
  },
  {
    id: 10,
    author: "Nancy D.",
    location: "Delphos, OH",
    rating: 5,
    text: "Had them install a new front door. Beautiful work! They even cleaned up perfectly when done. True professionals.",
    service: "Door Installation",
    date: "2023-09-28",
  },
  {
    id: 11,
    author: "Chris P.",
    location: "Ada, OH",
    rating: 5,
    text: "Pressure washed our entire house exterior. It looks brand new! Fast, efficient, and great value for the price.",
    service: "Pressure Washing",
    date: "2023-08-15",
  },
  {
    id: 12,
    author: "Mary S.",
    location: "Kenton, OH",
    rating: 5,
    text: "BGK has been our go-to for all home repairs for years. Honest, reliable, and their work always holds up. Highly recommended!",
    service: "Handyman",
    date: "2023-07-20",
  },
]

// Format reviews for schema
const reviewsForSchema = reviews.map(r => ({
  author: r.author,
  rating: r.rating,
  text: r.text,
  date: r.date,
}))

export default function ReviewsPage() {
  return (
    <>
      <ReviewSchema reviews={reviewsForSchema} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Customer Reviews</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
                What Our Customers Say
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Don&apos;t just take our word for it - hear from homeowners throughout Ohio who have trusted BGK Handy Services with their home repair needs.
              </p>

              {/* Rating Summary */}
              <div className="inline-flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{businessInfo.ratings.stars}.0</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-foreground">{businessInfo.ratings.reviewCount} Reviews</div>
                  <div className="text-sm text-muted-foreground">All 5-Star Ratings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="font-semibold text-foreground">{review.author}</div>
                      <div className="text-xs text-muted-foreground">{review.location}</div>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {review.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Had a Great Experience?
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;d love to hear about your experience with BGK Handy Services! Leave us a review on Google or Yelp to help other homeowners find quality home repair services.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href={businessInfo.socialLinks.google} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-lg font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Review on Google
                </a>
                <a 
                  href={businessInfo.socialLinks.yelp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-lg font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Review on Yelp
                </a>
                <a 
                  href={businessInfo.socialLinks.bbb} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-lg font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                >
                  Review on BBB
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Get Started */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Ready to Experience Our Service?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join our satisfied customers. Contact us today for a free estimate on your roofing, handyman, or property maintenance project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${businessInfo.phoneRaw}`}>
                  <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-5 w-5" />
                    Call {businessInfo.phone}
                  </Button>
                </a>
                <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                    <Calendar className="h-5 w-5" />
                    Schedule Online
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
