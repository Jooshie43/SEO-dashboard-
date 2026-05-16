// Central source of truth for all business information
export const businessInfo = {
  name: "BGK Handy Services",
  legalName: "BGK Handy Services LLC",
  dba: "Cornett Contracting Global",
  phone: "(567) 284-8733",
  phoneRaw: "+15672848733",
  whatsapp: "https://wa.me/15672848733",
  calendly: "https://calendly.com/joshcornett019/30min",
  email: "joshcornett019@gmail.com",
  website: "https://bgkhandyservices.com",
  
  address: {
    street: "Waynesfield",
    city: "Waynesfield",
    state: "OH",
    stateFullName: "Ohio",
    zip: "45896",
    country: "US",
  },
  
  serviceAreas: [
    { name: "Lima", state: "OH" },
    { name: "Wapakoneta", state: "OH" },
    { name: "St. Marys", state: "OH" },
    { name: "Delphos", state: "OH" },
    { name: "Waynesfield", state: "OH" },
    { name: "Ada", state: "OH" },
    { name: "Kenton", state: "OH" },
    { name: "Bellefontaine", state: "OH" },
  ],
  
  established: 2008,
  yearsInBusiness: new Date().getFullYear() - 2008,
  
  ratings: {
    bbb: "A+",
    stars: 5,
    reviewCount: 12,
  },
  
  stats: {
    projects: "150+",
    years: "15+",
    rating: "5-Star",
  },
  
  hours: {
    weekdays: "7:00 AM - 7:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "Emergency Only",
    emergency: "24/7",
  },
  
  services: [
    {
      id: "roofing",
      name: "Roofing Services",
      slug: "roofing-repairs",
      description: "Professional roof repairs, replacement, and emergency 24/7 services",
      shortDescription: "Roof repairs, replacement & emergency services",
      features: [
        "Roof leak repair",
        "Shingle replacement",
        "Full roof replacement",
        "Storm damage repair",
        "Emergency 24/7 service",
        "Free inspections & estimates",
      ],
    },
    {
      id: "handyman",
      name: "Handyman Services",
      slug: "handyman-services",
      description: "Complete home repair solutions including doors, windows, and plumbing",
      shortDescription: "Doors, windows, plumbing & general repairs",
      features: [
        "Door installation & repair",
        "Window replacement",
        "Minor plumbing repairs",
        "Drywall repair",
        "Fixture installation",
        "General home repairs",
      ],
    },
    {
      id: "maintenance",
      name: "Property Maintenance",
      slug: "property-maintenance",
      description: "Ongoing property maintenance for residential and commercial properties",
      shortDescription: "Residential & commercial property care",
      features: [
        "Siding repair & replacement",
        "Gutter cleaning & repair",
        "Exterior maintenance",
        "Deck & fence repair",
        "Pressure washing",
        "Seasonal maintenance",
      ],
    },
  ],
  
  socialLinks: {
    yelp: "https://www.yelp.com/biz/bgk-handy-services-waynesfield",
    yellowPages: "https://www.yellowpages.com/nationwide/mip/bgk-handy-services-575705015",
    bbb: "https://www.bbb.org/us/oh/waynesfield/profile/handyman/cornett-contracting-global-0422-90202294",
    google: "https://www.google.com/search?q=Bgk+Handy+Services",
    ezlocal: "https://ezlocal.com/oh/waynesfield/roofing-contractor/0916998857",
  },
  
  promotions: {
    roofingDiscount: {
      title: "Roofing Replacement Discount",
      description: "Save on full roof replacement projects",
      badge: "Special Offer",
    },
    emergency: {
      title: "24/7 Emergency Roof Repairs",
      description: "Fast response for urgent roof emergencies",
      badge: "24/7 Emergency",
    },
  },
} as const;

export type BusinessInfo = typeof businessInfo;
