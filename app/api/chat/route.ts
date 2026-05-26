import { streamText, tool } from 'ai'
import { z } from 'zod'
import { businessInfo } from '@/lib/business-info'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: 'openai/gpt-4o-mini',
    system: `You are the helpful AI assistant for ${businessInfo.name}, a trusted home repair company serving Lima, Ohio and surrounding areas since 2008. 

BUSINESS INFORMATION:
- Company: ${businessInfo.name}
- Phone: ${businessInfo.phone}
- WhatsApp: ${businessInfo.whatsapp}
- Email: ${businessInfo.email}
- Location: ${businessInfo.address.city}, ${businessInfo.address.state}
- Service Areas: Lima, Wapakoneta, St. Marys, Delphos, Waynesfield, Ada, Kenton, Bellefontaine
- Years in Business: ${businessInfo.yearsInBusiness}+
- BBB Rating: A+
- Reviews: ${businessInfo.ratings.reviewCount} five-star reviews

SERVICES OFFERED:
1. Roofing Services: Roof repairs, shingle replacement, full roof replacement, storm damage repair, emergency 24/7 service, free inspections
2. Handyman Services: Door installation, window replacement, minor plumbing, drywall repair, fixture installation, general repairs
3. Property Maintenance: Siding repair, gutter cleaning, pressure washing, deck repair, exterior maintenance, seasonal care

BUSINESS HOURS:
- Monday-Friday: 7:00 AM - 7:00 PM
- Saturday: 8:00 AM - 5:00 PM  
- Sunday: Emergency only
- 24/7 Emergency roof repairs available

KEY SELLING POINTS:
- 15+ years of experience
- BBB A+ Rated
- Licensed and insured
- Free estimates
- Same-day service for many repairs
- 24/7 emergency roof repairs
- Fair, transparent pricing

YOUR ROLE:
1. Answer questions about services, pricing, and availability
2. Help customers understand what services they need
3. Encourage them to call ${businessInfo.phone} or schedule via Calendly for estimates
4. For emergencies (especially roof leaks), urge them to call immediately
5. Be friendly, professional, and helpful
6. If asked about specific pricing, explain that prices vary by project and recommend getting a free estimate
7. When appropriate, use the scheduleAppointment tool to provide the Calendly link

IMPORTANT:
- Always be helpful and professional
- Encourage contacting the business directly for estimates
- For roof emergencies, stress the 24/7 availability
- Don't make up information - if unsure, suggest calling for details`,
    messages,
    tools: {
      getServiceInfo: tool({
        description: 'Get detailed information about a specific service',
        inputSchema: z.object({
          serviceType: z.enum(['roofing', 'handyman', 'maintenance']).describe('The type of service to get info about'),
        }),
        execute: async ({ serviceType }) => {
          const service = businessInfo.services.find(s => s.id === serviceType)
          if (!service) return { error: 'Service not found' }
          return {
            name: service.name,
            description: service.description,
            features: service.features,
            url: `https://bgkhandyservices.com/${service.slug}`,
          }
        },
      }),
      scheduleAppointment: tool({
        description: 'Provide the Calendly link for scheduling a free estimate appointment',
        inputSchema: z.object({
          reason: z.string().optional().describe('The reason for the appointment'),
        }),
        execute: async ({ reason }) => {
          return {
            calendlyUrl: businessInfo.calendly,
            message: `You can schedule a free 30-minute consultation at: ${businessInfo.calendly}`,
            phone: businessInfo.phone,
            note: reason ? `Appointment reason: ${reason}` : 'Free estimate consultation',
          }
        },
      }),
      getContactInfo: tool({
        description: 'Get contact information for the business',
        inputSchema: z.object({}),
        execute: async () => {
          return {
            phone: businessInfo.phone,
            whatsapp: businessInfo.whatsapp,
            email: businessInfo.email,
            calendly: businessInfo.calendly,
            hours: businessInfo.hours,
            emergencyNote: 'For roof emergencies, call 24/7!',
          }
        },
      }),
      getServiceAreas: tool({
        description: 'Get the list of service areas',
        inputSchema: z.object({}),
        execute: async () => {
          return {
            areas: businessInfo.serviceAreas.map(a => `${a.name}, ${a.state}`),
            note: 'Not sure if we serve your area? Give us a call!',
          }
        },
      }),
    },
    maxSteps: 5,
  })

  return result.toUIMessageStreamResponse()
}
