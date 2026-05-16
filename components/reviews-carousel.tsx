"use client"

import { Star, Quote } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

// Sample reviews data - in production this would come from an API
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
]

export function ReviewsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Customer Reviews</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">
              {businessInfo.ratings.reviewCount} Five-Star Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
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
              <div className="flex items-center justify-between">
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

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Reviews →
          </a>
        </div>
      </div>
    </section>
  )
}

export { reviews }
