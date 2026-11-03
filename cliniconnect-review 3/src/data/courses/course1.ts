import { CourseData } from '../../types/training';

export const course1Foundations: CourseData = {
  id: 'foundations',
  code: '01',
  title: 'CliniConnect Foundations',
  description: 'Understand the origin, purpose, and foundational principles of CliniConnect as a proposed patient-recovery workflow.',
  focusArea: 'Core concepts, missed call problem, and honest positioning.',
  totalLessons: 10,
  lessons: [
    {
      id: 'foundations-1',
      courseId: 'foundations',
      lessonNumber: 1,
      title: 'Introduction to CliniConnect',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'An orientation to CliniConnect, what the platform is designed to achieve, and how our training prepares you to represent it accurately.',
      sections: [
        {
          heading: 'Welcome to CliniConnect Training OS',
          content: [
            'CliniConnect is a specialized software initiative focused on one of the most persistent operational challenges facing modern dental practices: uncaptured patient demand.',
            'Every week, dental clinics receive inbound phone calls from patients needing emergency treatment, check-ups, cosmetic consultations, or orthodontic care. A significant proportion of these calls go unanswered because the front desk is busy with patients standing in front of them, processing payments, or managing surgery rooms.',
            'This training programme gives you complete, transparent mastery over what CliniConnect is being built to do, the problem it addresses, and how to communicate honestly with dental professionals.'
          ],
          callout: {
            type: 'rule',
            title: 'Core Positioning Rule',
            text: 'CliniConnect is currently in active configuration and development. You must always refer to it as a proposed patient-recovery system, never as an already proven live enterprise deployment.'
          }
        },
        {
          heading: 'Why Training Discipline Matters',
          content: [
            'In the dental sector, clinic owners and practice managers have zero tolerance for aggressive or inaccurate sales tactics. Dental practices are healthcare providers governed by patient safety, strict data privacy, and professional ethics.',
            'Your role is not to make hyperbolic claims or promise unrealistic financial windfalls. Your role is to understand the dental front-desk reality and introduce CliniConnect as an intended operational support tool.'
          ]
        }
      ],
      keyTakeaway: 'CliniConnect is being developed to assist dental practices with missed patient enquiries. Accuracy and ethical transparency are foundational.',
      practicePrompt: 'Write down a 30-second explanation of CliniConnect that emphasizes front-desk support without making any unverified claims.',
      diagramType: 'journey'
    },
    {
      id: 'foundations-2',
      courseId: 'foundations',
      lessonNumber: 2,
      title: 'What CliniConnect is',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Clear architectural definition of CliniConnect as an automated missed-call and after-hours patient engagement assistant.',
      sections: [
        {
          heading: 'Defining the Solution',
          content: [
            'CliniConnect is fundamentally an automated communication workflow designed to initiate prompt SMS follow-ups when an inbound patient call cannot be answered by the dental reception team.',
            'Rather than allowing a missed call to become an abandoned opportunity or an unanswered voicemail, the proposed system detects the missed call event and dispatches a polite, practice-branded SMS enquiry to the caller within moments.',
            'The system then facilitates an interactive text-based dialogue to discover what the patient needs, gather their basic contact information, and queue the enquiry for the front-desk team to review and schedule.'
          ]
        },
        {
          heading: 'What CliniConnect Is NOT',
          content: [
            'It is equally important to understand what CliniConnect is NOT:',
            '1. It is NOT an artificial intelligence replacement for dental receptionists. Receptionists are the warm human heart of dental patient care.',
            '2. It is NOT a full Dental Practice Management System (PMS) like Dentrix, Software of Excellence (Exact), or Cliniko.',
            '3. It does NOT automatically perform clinical triage, diagnose oral conditions, or promise instant confirmed calendar bookings without practice oversight.'
          ],
          callout: {
            type: 'takeaway',
            title: 'Essential Distinction',
            text: 'CliniConnect is designed as a front-desk safety net—supporting the existing reception staff during peak surges and out-of-hours periods.'
          }
        }
      ],
      keyTakeaway: 'CliniConnect is a proposed SMS-based missed-call recovery workflow, designed to support—not replace—dental receptionists.',
      practicePrompt: 'If a practice manager asks "Is this an AI bot trying to replace my staff?", how do you respond in two sentences?'
    },
    {
      id: 'foundations-3',
      courseId: 'foundations',
      lessonNumber: 3,
      title: 'Why CliniConnect exists',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'The economic and clinical motivations driving the creation of CliniConnect in the private dental market.',
      sections: [
        {
          heading: 'The Modern Dental Clinic Dilemma',
          content: [
            'Dental clinics spend thousands of pounds or dollars every month on digital marketing, local SEO, website design, and signage to generate patient interest.',
            'However, when that marketing succeeds and drives inbound phone calls, the clinic often fails to answer at the critical moment of intent. The phone rings while the receptionist is taking a credit card payment, greeting an anxious child, or coordinating an emergency sterilization protocol.',
            'When the phone goes to voicemail, the hard-earned marketing investment is wasted. CliniConnect exists to close this leakage point by providing an immediate, courteous response channel.'
          ]
        },
        {
          heading: 'Bridging the Communication Gap',
          content: [
            'Modern consumers—especially working adults, young parents, and tech-savvy patients—overwhelmingly prefer text messaging to leaving and checking voicemails.',
            'By initiating a text conversation within seconds of a missed call, the practice meets patients where they are most comfortable, preventing them from feeling ignored.'
          ]
        }
      ],
      keyTakeaway: 'CliniConnect exists to bridge the gap between patient inbound demand and busy front-desk availability using rapid conversational SMS.',
      practicePrompt: 'Recall a time you called a local business, received voicemail, and immediately called their competitor. How would an instant text have altered your behavior?'
    },
    {
      id: 'foundations-4',
      courseId: 'foundations',
      lessonNumber: 4,
      title: 'The problem of missed patient calls',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Analyzing the volume, timing, and direct financial impact of unanswered phone calls in dental practices.',
      sections: [
        {
          heading: 'The Scale of Missed Calls in Dentistry',
          content: [
            'Industry estimates and operational surveys indicate that an average private dental practice misses between 15% and 35% of all incoming telephone calls during typical operating hours.',
            'Missed call spikes occur during predictable windows: between 8:30 AM and 9:30 AM (morning arrival rush), during lunchtime (12:30 PM to 2:00 PM), and in the final 30 minutes before clinic closing.',
            'Furthermore, up to 75% of callers who reach a generic practice voicemail do not leave a message. They hang up.'
          ],
          callout: {
            type: 'caution',
            title: 'Responsible Data Handling',
            text: 'Never quote these figures as guaranteed facts for an individual clinic. Always ask the practice manager how many calls they estimate their team misses before citing industry benchmarks.'
          }
        },
        {
          heading: 'The Commercial Consequences',
          content: [
            'A missed call is not merely an unreturned message; it represents significant commercial risk:',
            '• A routine check-up and hygiene patient has an average initial value of $150 to $300, and an annual lifetime value exceeding $1,000.',
            '• A high-value treatment enquiry (such as clear aligners, dental implants, or smile makeovers) can represent $3,000 to $10,000 in potential clinic revenue.',
            'Losing even two or three high-value treatment enquiries each month represents a severe, silent drain on practice profitability.'
          ]
        }
      ],
      keyTakeaway: 'Missed calls occur during predictable front-desk bottlenecks; most callers hang up without leaving voicemail, losing high-value treatment opportunities.',
      practicePrompt: 'Draft three polite discovery questions to ask a manager about their phone call volume and voicemail response habits.'
    },
    {
      id: 'foundations-5',
      courseId: 'foundations',
      lessonNumber: 5,
      title: 'After-hours enquiries',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Understanding consumer habits outside traditional 9-to-5 clinic hours and the missed opportunities they create.',
      sections: [
        {
          heading: 'The After-Hours Reality',
          content: [
            'Dental pain, sudden tooth fractures, or the decision to finally research Invisalign do not neatly conform to Monday-through-Friday 9 AM to 5 PM office hours.',
            'A significant proportion of prospective patients browse clinic websites and attempt to make contact during weekday evenings (7 PM to 10 PM) or over weekends when relaxing at home.',
            'Traditionally, after-hours callers hear an answering machine reciting emergency hotline instructions. While emergency instructions are clinically necessary, prospective non-emergency patients simply hang up.'
          ]
        },
        {
          heading: 'The Intended CliniConnect Response',
          content: [
            'Under the proposed CliniConnect system, an after-hours enquiry triggers an automated acknowledgement: "Thanks for calling CliniConnect Dental. Our clinic is closed right now, but how can we assist you with an appointment or enquiry?"',
            'This captures the patient\'s enquiry details while their intent is high, organizing it for priority handling first thing the next business morning.'
          ]
        }
      ],
      keyTakeaway: 'After-hours enquiries represent active patient intent that is usually discarded by voicemail. CliniConnect aims to capture these for next-day front-desk action.',
      practicePrompt: 'How would you explain the difference between an emergency hotline instruction and an after-hours appointment enquiry capture?'
    },
    {
      id: 'foundations-6',
      courseId: 'foundations',
      lessonNumber: 6,
      title: 'Why some patients may call another practice',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Examining consumer psychology in local dental search: speed to response vs. brand loyalty.',
      sections: [
        {
          heading: 'The Search for Immediate Solutions',
          content: [
            'When a patient searches Google Maps for a local dentist, they are typically presented with 5 to 10 clinics within a 3-mile radius with comparable star ratings.',
            'Unless the caller is a loyal existing patient with ten years of history at the practice, they do not have deep emotional allegiance. They want reassurance, answers, and a confirmed appointment.',
            'If Practice A does not answer, the consumer hits the back button on their smartphone and taps "Call" on Practice B within fifteen seconds. Speed to response is the single highest predictor of patient conversion.'
          ]
        },
        {
          heading: 'Interrupting the Competitor Hop',
          content: [
            'An instantaneous SMS notification—arriving within 60 seconds of the unanswered call—interrupts that search behavior. It tells the patient: "We saw your call, we value you, and we are ready to assist you right here."'
          ]
        }
      ],
      keyTakeaway: 'Prospective patients with immediate dental needs will call competitors within seconds if an initial call is unanswered. Fast SMS stops the drop-off.',
      practicePrompt: 'Explain how an immediate SMS prevents a patient from dialing the next clinic on Google Maps.'
    },
    {
      id: 'foundations-7',
      courseId: 'foundations',
      lessonNumber: 7,
      title: 'The patient-recovery concept',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The operational philosophy of patient recovery: turning lost inbound signals into booked consultations.',
      sections: [
        {
          heading: 'What is Patient Recovery?',
          content: [
            'Patient recovery is the disciplined systematic practice of treating every missed call, abandoned enquiry, or unbooked treatment plan as an active workflow task rather than a forgotten event.',
            'In conventional clinics, missed calls are passive. Unless a voicemail is left, front-desk staff have no protocol to identify the number, dial back, or confirm what the caller needed.',
            'The patient-recovery concept introduces an automated safety net that logs the inbound number, opens a low-friction text channel, and guides the patient toward clinical triage or consultation.'
          ]
        },
        {
          heading: 'The Three Stages of Patient Recovery',
          content: [
            '1. Capture: Instant automated recognition of an unserved inbound signal.',
            '2. Engagement: Respectful, conversational SMS enquiry to clarify the patient’s need.',
            '3. Handoff: Handing the qualified enquiry to the receptionist with full context ready to schedule.'
          ]
        }
      ],
      keyTakeaway: 'Patient recovery transforms unrecorded missed calls into structured front-desk follow-up leads.',
      practicePrompt: 'Summarize the three stages of the patient-recovery concept in your own words.'
    },
    {
      id: 'foundations-8',
      courseId: 'foundations',
      lessonNumber: 8,
      title: 'Who CliniConnect is designed for',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Profile of target dental clinics, operational maturity requirements, and clinic personas.',
      sections: [
        {
          heading: 'Target Dental Clinic Profile',
          content: [
            'CliniConnect is specifically designed for private and mixed private/NHS dental practices with the following characteristics:',
            '• Clinics with 2 to 6 dental chairs operating at steady clinical capacity.',
            '• Practices offering private general dentistry, cosmetic treatments (bonding, veneers), orthodontics (aligners), or restorative implants.',
            '• Practices with 1 to 3 front-desk receptionists who experience high in-person patient foot traffic.',
            '• Practices actively spending budget on marketing or looking to grow their active patient base without adding full-time administrative headcount.'
          ]
        },
        {
          heading: 'Who CliniConnect is NOT For',
          content: [
            '• Fully NHS-subsidized practices with multi-year waiting lists that are actively turning away new patients.',
            '• Massive 50-clinic corporate dental chains with centralized 24/7 call centers.',
            '• Solo mobile dentists with no physical practice infrastructure.'
          ]
        }
      ],
      keyTakeaway: 'Ideal prospects are private or mixed clinics with 2-6 chairs that want to grow high-value patient volume without overworking front-desk staff.',
      practicePrompt: 'Name two types of dental practices that would NOT benefit from CliniConnect, and explain why.'
    },
    {
      id: 'foundations-9',
      courseId: 'foundations',
      lessonNumber: 9,
      title: 'The value CliniConnect aims to provide',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The threefold value proposition: revenue preservation, receptionist relief, and superior patient experience.',
      sections: [
        {
          heading: 'Three Pillars of Intended Value',
          content: [
            'CliniConnect aims to deliver value across three distinct stakeholders in the dental practice:',
            '1. Practice Owners: Protecting marketing ROI and capturing high-value private treatment opportunities that would otherwise leak to neighboring competitors.',
            '2. Practice Managers & Receptionists: Relieving phone anxiety and phone interruptions during peak check-in rushes, eliminating tedious voicemail backlog.',
            '3. Patients: Experiencing rapid, polite, modern digital responsiveness without waiting on hold or wondering if their call was heard.'
          ]
        },
        {
          heading: 'Framing Value Responsibly',
          content: [
            'Always frame these outcomes as intended operational benefits. Do not state: "CliniConnect will make you $50,000 this month." State: "CliniConnect is intended to ensure your team never loses an enquiry when the desk is occupied with check-ins."'
          ]
        }
      ],
      keyTakeaway: 'Intended value centers on revenue capture, receptionist workload relief, and frictionless patient communication.',
      practicePrompt: 'How would you explain the value of CliniConnect differently to an owner versus a head receptionist?'
    },
    {
      id: 'foundations-10',
      courseId: 'foundations',
      lessonNumber: 10,
      title: 'How to explain CliniConnect in simple language',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Practical conversational phrasing for sales calls and meetings without technical jargon or buzzwords.',
      sections: [
        {
          heading: 'Avoid Jargon, Focus on Everyday Reality',
          content: [
            'Dental practice managers do not care about "webhooks", "LLM agent nodes", or "asynchronous pipeline orchestration". Using technical buzzwords confuses managers and creates skepticism.',
            'Instead, explain the system in simple, relatable front-desk terms:',
            'Example: "CliniConnect is a missed-call recovery system being built for dental clinics. When your front desk is busy with a patient and a phone call goes unanswered, the system automatically sends a friendly text message to the caller, finds out what they need, and prepares the enquiry so your team can easily book them in."'
          ],
          callout: {
            type: 'script',
            title: 'The 15-Second Elevator Pitch',
            text: '"CliniConnect is designed as a safety net for your dental reception: whenever a call is missed, it sends an immediate friendly SMS to keep the patient engaged so they don’t call another clinic down the street."'
          }
        }
      ],
      keyTakeaway: 'Speak in relatable front-desk language. Focus on helping the busy receptionist and preventing patient walk-aways.',
      practicePrompt: 'Practice reciting the 15-second elevator pitch out loud three times until it feels natural.'
    }
  ]
};

