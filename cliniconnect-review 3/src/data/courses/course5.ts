import { CourseData } from '../../types/training';

export const course5Pricing: CourseData = {
  id: 'pricing',
  code: '05',
  title: 'CliniConnect Pricing and Value',
  description: 'Master the commercial structure, proposed investment levels, hypothetical unit economics, and ethical ROI communication.',
  focusArea: 'Proposed pricing structure, commercial boundaries, and responsible ROI.',
  totalLessons: 10,
  lessons: [
    {
      id: 'pricing-1',
      courseId: 'pricing',
      lessonNumber: 1,
      title: 'Understanding the proposed pricing',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The rationale behind the two-part pricing model: setup fee and ongoing monthly subscription.',
      sections: [
        {
          heading: 'The Commercial Architecture',
          content: [
            'CliniConnect is positioned as a premium B2B software and configuration service for professional dental practices.',
            'The proposed commercial structure consists of two components:',
            '1. A One-Time Implementation & Configuration Fee: Proposed at $2,500.',
            '2. An Ongoing Software & Maintenance Subscription: Proposed at $800 per month.',
            'This structure ensures the clinic receives tailored setup, phone carrier integration, practice-branded messaging templates, and dedicated staff onboarding.'
          ],
          callout: {
            type: 'rule',
            title: 'Commercial Disclaimer Requirement',
            text: 'All pricing figures are currently PROPOSED and subject to internal confirmation prior to issuing any formal contractual quote or service agreement.'
          }
        }
      ],
      keyTakeaway: 'Proposed pricing is $2,500 setup and $800/month. Always clarify that figures are proposed and subject to internal confirmation.',
      practicePrompt: 'State the proposed pricing structure clearly in one sentence, including the confirmation disclaimer.',
      diagramType: 'pricing'
    },
    {
      id: 'pricing-2',
      courseId: 'pricing',
      lessonNumber: 2,
      title: 'The setup fee',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'What the proposed $2,500 implementation fee covers and why clinics invest upfront.',
      sections: [
        {
          heading: 'Deconstructing the $2,500 Setup Investment',
          content: [
            'Dental managers often ask: "Why is there an upfront setup fee?"',
            'You must explain what goes into configuring a medical-grade messaging workflow:',
            '• Telephony carrier audit and webhook endpoint routing.',
            '• A2P 10DLC mobile brand and campaign registration for carrier SMS compliance.',
            '• Customization of clinic conversational tone, opening hours, emergency numbers, and clinical services.',
            '• Practice manager and receptionist training sessions to ensure comfortable daily usage.'
          ]
        }
      ],
      keyTakeaway: 'The $2,500 setup covers telephony routing, regulatory carrier compliance, custom prompt tuning, and staff onboarding.',
      practicePrompt: 'How do you justify the setup fee when a manager asks why they can\'t just turn it on like an app?'
    },
    {
      id: 'pricing-3',
      courseId: 'pricing',
      lessonNumber: 3,
      title: 'The monthly subscription',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'What the proposed $800 monthly investment delivers: infrastructure, maintenance, and support.',
      sections: [
        {
          heading: 'Value Delivered Every Month',
          content: [
            'The proposed $800/month subscription covers:',
            '• High-reliability cloud hosting and carrier SMS messaging throughput.',
            '• Ongoing conversational triage engine updates and security patching.',
            '• Receptionist support desk and workflow optimization check-ins.',
            '• Comparing the cost: Hiring an additional full-time receptionist costs $2,500 to $3,500 per month plus taxes and benefits. CliniConnect delivers 24/7 overflow coverage at a fraction of that cost.'
          ]
        }
      ],
      keyTakeaway: 'At $800/month, CliniConnect provides 24/7 missed-call coverage for less than a third of the cost of a part-time receptionist.',
      practicePrompt: 'Compare the $800/month software investment to the monthly cost of hiring an additional staff member.'
    },
    {
      id: 'pricing-4',
      courseId: 'pricing',
      lessonNumber: 4,
      title: 'Explaining the pricing confidently',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'How to state pricing without hesitation, apologetic tones, or premature discounting.',
      sections: [
        {
          heading: 'The Psychology of Price Delivery',
          content: [
            'When salespeople feel uncomfortable with price, their voice drops, they speak faster, and they immediately offer discounts before the customer even objects.',
            'Price should be delivered smoothly and unapologetically:',
            '"Our proposed structure involves a one-time onboarding and telephony setup of $2,500, followed by an ongoing monthly service of $800. These figures are subject to final confirmation based on your specific phone setup. How does that compare to what you anticipated?"',
            'Then PAUSE and let the prospect speak.'
          ]
        }
      ],
      keyTakeaway: 'State the price clearly, reference the confirmation disclaimer, and remain silent while the prospect processes the figure.',
      practicePrompt: 'Practice reciting the price delivery script out loud without pausing or apologizing.'
    },
    {
      id: 'pricing-5',
      courseId: 'pricing',
      lessonNumber: 5,
      title: 'Explaining the intended value',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Framing software cost against patient lifetime value and clinic production hours.',
      sections: [
        {
          heading: 'Cost vs. Investment Framing',
          content: [
            'To a dental clinic owner, $800/month is not evaluated as an IT expense; it is evaluated against clinical production.',
            'In a private practice:',
            '• An average new patient checkup, cleaning, and X-ray bill is ~$250.',
            '• An average patient stays with a practice for 3 to 7 years, generating $1,500+ in lifetime dental care.',
            '• An average cosmetic or restorative case (bonding, crown, aligners) generates $2,000 to $5,000.',
            'If CliniConnect helps the clinic recover just ONE patient per month who would have otherwise called a competitor, the system pays for itself.'
          ]
        }
      ],
      keyTakeaway: 'Recovering a single new patient or cosmetic enquiry each month covers the entire monthly subscription.',
      practicePrompt: 'Explain to a clinic owner how recovering one patient per month offsets the $800 subscription.'
    },
    {
      id: 'pricing-6',
      courseId: 'pricing',
      lessonNumber: 6,
      title: 'Discussing missed-call opportunities',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Collaborative math: guiding practice managers to calculate their own uncaptured volume.',
      sections: [
        {
          heading: 'The Collaborative Discovery Math',
          content: [
            'Never tell a manager: "You are losing $10,000 a month." That sounds arrogant and defensive.',
            'Instead, invite them to calculate their own reality:',
            '"Roughly how many missed calls or after-hours messages does your clinic see across a typical week?"',
            'If they say 15 calls a week, that is ~60 calls a month. Ask: "If even 10% of those were new patients looking for care, that is 6 prospective patients a month. What does an average new patient mean to your clinic?"'
          ]
        }
      ],
      keyTakeaway: 'Let the clinic manager provide the numbers and calculate their own missed opportunity volume.',
      practicePrompt: 'Conduct a practice calculation where the manager estimates they miss 10 calls per week.'
    },
    {
      id: 'pricing-7',
      courseId: 'pricing',
      lessonNumber: 7,
      title: 'Hypothetical revenue illustrations',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'How to build honest hypothetical revenue scenarios while strictly maintaining regulatory compliance.',
      sections: [
        {
          heading: 'The Hypothetical Framework',
          content: [
            'You may use illustrative unit economics to help clinic managers visualize the potential impact, provided you clearly designate them as hypothetical.',
            'Sample Scenario:',
            '• Baseline: Clinic misses 40 calls per month.',
            '• Engagement Rate (Hypothetical): 30% of callers reply to the SMS (12 conversations).',
            '• Booking Rate (Hypothetical): 25% of engaged conversations result in a booked consultation (3 patients).',
            '• Revenue Impact: 3 new patients @ $350 initial clinical visit = $1,050 initial revenue, plus ongoing treatment value.',
            'Always conclude: "These are illustrative examples for discussion purposes. Actual results depend on patient demand, clinic pricing, and front-desk scheduling."'
          ]
        }
      ],
      keyTakeaway: 'Hypothetical revenue models must always carry explicit disclaimers that real outcomes vary.',
      practicePrompt: 'Present a 3-step hypothetical scenario to a prospect while emphasizing the disclaimer.'
    },
    {
      id: 'pricing-8',
      courseId: 'pricing',
      lessonNumber: 8,
      title: 'Explaining ROI responsibly',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'The Golden Ethical Boundary: why we NEVER guarantee ROI, revenue, or patient recovery numbers.',
      sections: [
        {
          heading: 'The Absolute Ban on Guarantees',
          content: [
            'Under NO circumstances should any CliniConnect representative guarantee financial returns, recovery percentages, or patient volumes.',
            'Statements like "We guarantee 10x ROI" or "We promise you will recover 15 patients this month" are strictly prohibited.',
            'Why? Because patient recovery depends on variables outside our control: clinician chair availability, local demographic demand, pricing competitiveness, and how promptly the receptionist returns SMS inquiries.'
          ],
          callout: {
            type: 'rule',
            title: 'Ethical Mandate',
            text: 'Never promise or guarantee return on investment. Speak strictly of intended outcomes and operational safeguards.'
          }
        }
      ],
      keyTakeaway: 'Never guarantee ROI or patient recovery. Frame CliniConnect as an operational safety net whose returns depend on practice factors.',
      practicePrompt: 'Rephrase the claim "We guarantee you will double your new patients" into an ethical, compliant statement.'
    },
    {
      id: 'pricing-9',
      courseId: 'pricing',
      lessonNumber: 9,
      title: 'Answering pricing objections',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Handling initial resistance to $2,500 setup and $800 monthly fees with composure and value anchoring.',
      sections: [
        {
          heading: 'Responding to "$800 a month is too expensive"',
          content: [
            'When a manager says $800/month is expensive, they are comparing it to a $30/month consumer SaaS tool like Spotify or Zoom.',
            'Response Script:',
            '"I completely understand why looking at that figure by itself feels significant. Most managers we speak with initially compare it to standard software. But when you look at it alongside the cost of hiring another front-desk receptionist—which costs upwards of $30,000 a year—or losing just two aligner cases a month, the economics look quite different. Would you be open to walking through the workflow to see if the time saved makes sense for your team?"'
          ]
        }
      ],
      keyTakeaway: 'Anchor price against the cost of missed patient cases and full-time hiring rather than consumer software apps.',
      practicePrompt: 'Deliver the response to "That is way more expensive than our email software" smoothly.'
    },
    {
      id: 'pricing-10',
      courseId: 'pricing',
      lessonNumber: 10,
      title: 'Knowing when to escalate commercial questions',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Recognizing custom enterprise requirements, discount requests, and contract redlines that require leadership escalation.',
      sections: [
        {
          heading: 'When to Escalate',
          content: [
            'As a representative, your objective is to book a 15-minute walkthrough, not negotiate commercial contracts on the fly.',
            'Escalate to senior leadership when a prospect asks for:',
            '• Multi-site clinic discounts (e.g. a group of 5 practices).',
            '• Custom telephony integrations with legacy on-premise PBX hardware.',
            '• Unique contractual indemnities or legal terms.',
            'Response: "That is a great conversation for our walkthrough. Let’s look at the workflow first, and our leadership team can tailor the commercial terms to fit your group structure."'
          ]
        }
      ],
      keyTakeaway: 'Focus on demonstrating workflow value; escalate custom contracts and multi-site discounting to leadership.',
      practicePrompt: 'How do you handle a practice owner who demands a 50% discount on the first phone call?'
    }
  ]
};

