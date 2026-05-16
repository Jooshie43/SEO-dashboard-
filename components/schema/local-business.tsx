import { businessInfo } from '@/lib/business-info'

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "RoofingContractor"],
    "@id": `${businessInfo.website}/#business`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    alternateName: businessInfo.dba,
    description: "Professional roofing repairs, handyman services, and property maintenance in Lima, Wapakoneta, St. Marys, and Delphos, Ohio. BBB A+ Rated with 15+ years of experience.",
    url: businessInfo.website,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    foundingDate: businessInfo.established.toString(),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check",
    
    address: {
      "@type": "PostalAddress",
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: businessInfo.address.country,
    },
    
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5703,
      longitude: -83.9602,
    },
    
    areaServed: businessInfo.serviceAreas.map(area => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: "Ohio",
        containedInPlace: {
          "@type": "Country",
          name: "United States"
        }
      }
    })),
    
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        description: "Emergency services only",
        opens: "00:00",
        closes: "23:59",
      },
    ],
    
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.ratings.stars,
      bestRating: 5,
      worstRating: 1,
      reviewCount: businessInfo.ratings.reviewCount,
    },
    
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Repair Services",
      itemListElement: businessInfo.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          serviceType: service.name,
          provider: {
            "@type": "LocalBusiness",
            name: businessInfo.name,
          },
          areaServed: businessInfo.serviceAreas.map(area => ({
            "@type": "City",
            name: area.name,
          })),
        },
        position: index + 1,
      })),
    },
    
    sameAs: [
      businessInfo.socialLinks.yelp,
      businessInfo.socialLinks.yellowPages,
      businessInfo.socialLinks.bbb,
      businessInfo.socialLinks.google,
      businessInfo.socialLinks.ezlocal,
    ],
    
    image: [
      `${businessInfo.website}/images/hero-roofing.jpg`,
      `${businessInfo.website}/images/handyman-service.jpg`,
      `${businessInfo.website}/images/property-maintenance.jpg`,
    ],
    
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "US",
    },
    
    award: "BBB A+ Rating",
    knowsAbout: [
      "Roof Repair",
      "Roof Replacement",
      "Emergency Roofing",
      "Handyman Services",
      "Property Maintenance",
      "Siding Repair",
      "Window Installation",
      "Door Repair",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema({ reviews }: { reviews: { author: string; rating: number; text: string; date: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    review: reviews.map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.ratings.stars,
      reviewCount: businessInfo.ratings.reviewCount,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ service }: { service: typeof businessInfo.services[number] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
      telephone: businessInfo.phone,
      url: businessInfo.website,
    },
    areaServed: businessInfo.serviceAreas.map(area => ({
      "@type": "City",
      name: area.name,
    })),
    serviceType: service.name,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
