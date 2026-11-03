import { CourseData } from '../../types/training';

export const course4Dental: CourseData = {
  id: 'dental',
  code: '04',
  title: 'Understanding Dental Practices',
  description: 'Master the internal hierarchy, daily operational pressures, patient economics, and front-desk recruitment triggers of modern dental clinics.',
  focusArea: 'Clinic roles, operational rhythm, and recruitment triggers.',
  totalLessons: 12,
  lessons: [
    {
      id: 'dental-1',
      courseId: 'dental',
      lessonNumber: 1,
      title: 'How dental practices operate',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The operational rhythm of a dental practice: clinical surgeries, sterilization, reception, and patient turnover.',
      sections: [
        {
          heading: 'The Physical and Functional Layout',
          content: [
            'A dental practice is a hybrid between a high-precision surgical clinic and a retail hospitality environment.',
            'The clinic is split between the "Back Office" (dental surgeries, sterilization rooms, clinician rest areas) and the "Front Desk" (reception desk, patient waiting lounge, check-in kiosks, administrative offices).',
            'Surgeries are staffed by Dentists, Dental Therapists, and Dental Nurses. Every minute of surgery time is budgeted to cover massive capital equipment overhead and clinician salaries.'
          ]
        },
        {
          heading: 'The Daily Rhythm',
          content: [
            'Practices operate on strict 15-to-60 minute clinical appointments. If a patient is late, it cascades through the entire morning schedule. The front desk bears the full brunt of keeping the waiting room calm while surgeries run slightly behind.'
          ]
        }
      ],
      keyTakeaway: 'Dental clinics operate under intense time pressure where surgery chair minutes represent fixed, non-recoverable overhead.',
      practicePrompt: 'Why does a 15-minute delay in a morning surgery create chaos for the front desk for the rest of the day?',
      diagramType: 'practice-roles'
    },
    {
      id: 'dental-2',
      courseId: 'dental',
      lessonNumber: 2,
      title: 'Understanding practice owners',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The mindset of Principal Dentists: clinical excellence, financial liabilities, and practice equity.',
      sections: [
        {
          heading: 'The Principal Dentist Profile',
          content: [
            'In most independent clinics, the practice owner is also the lead treating dentist (the Principal Dentist).',
            'This means they spend 30 to 40 hours per week with their hands in patients\' mouths wearing loupes and surgical masks. They cannot take business phone calls during the day.',
            'Their primary concerns are: practice reputation, clinical risk mitigation, staff retention, cash flow to service equipment leases, and overall clinic profitability.'
          ]
        }
      ],
      keyTakeaway: 'Practice owners are busy treating patients all day; they care about clinic reputation, profitability, and staff stability.',
      practicePrompt: 'Why is it usually impossible to speak with a practice owner between 9:00 AM and 5:00 PM on a weekday?'
    },
    {
      id: 'dental-3',
      courseId: 'dental',
      lessonNumber: 3,
      title: 'Understanding practice managers',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The crucial role of the Practice Manager: gatekeeper, operations commander, and key decision-maker.',
      sections: [
        {
          heading: 'The Operational Powerhouse',
          content: [
            'The Practice Manager (PM) is your primary point of contact for CliniConnect.',
            'The PM oversees front-desk staffing, resolves patient complaints, manages payroll, liaises with dental supply vendors, and monitors appointment book fullness.',
            'They are protective of their staff and deeply skeptical of cold callers. However, if you show genuine understanding of their front-desk workload and respect their time, they are the champion who can evaluate CliniConnect and present it to the owner.'
          ]
        }
      ],
      keyTakeaway: 'The Practice Manager is the operational decision-maker and front-desk protector. Earn their respect through empathy.',
      practicePrompt: 'What are the top three daily frustrations a dental practice manager faces?'
    },
    {
      id: 'dental-4',
      courseId: 'dental',
      lessonNumber: 4,
      title: 'Understanding receptionists',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The front-desk reality: multi-tasking, telephone volume, patient anxieties, and emotional labor.',
      sections: [
        {
          heading: 'A Day in the Shoes of a Dental Receptionist',
          content: [
            'Dental reception is one of the most demanding customer-service roles in healthcare. A receptionist simultaneously juggles:',
            '• In-person patient greetings and medical history check-ins.',
            '• Phone calls from anxious patients in pain.',
            '• Point-of-sale terminal payments, insurance claims, and finance plans.',
            '• Coordinating emergency slots with nurses between surgeries.',
            'When the telephone rings during an in-person conversation, receptionists face an uncomfortable dilemma: ignore the patient standing in front of them, or let the phone ring out.'
          ]
        }
      ],
      keyTakeaway: 'Receptionists are constantly torn between serving patients at the desk and answering the ringing telephone.',
      practicePrompt: 'Describe the dilemma a receptionist faces when the phone rings while taking a payment.'
    },
    {
      id: 'dental-5',
      courseId: 'dental',
      lessonNumber: 5,
      title: 'Understanding front-desk responsibilities',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Breakdown of administrative duties that pull staff away from telephone triage.',
      sections: [
        {
          heading: 'The Multifaceted Front-Desk Checklist',
          content: [
            'Beyond answering phones, front-desk staff handle: daily banking reconciliations, laboratory dispatch logs for crowns and bridges, patient recall letters, email enquiries, and compliance audit records.',
            'When telephone calls monopolize their hours, critical administrative paperwork falls behind, causing stress and staff turnover.'
          ]
        }
      ],
      keyTakeaway: 'Telephone handling is only one of many administrative responsibilities competing for front-desk time.',
      practicePrompt: 'How does CliniConnect give receptionists time to catch up on essential administrative duties?'
    },
    {
      id: 'dental-6',
      courseId: 'dental',
      lessonNumber: 6,
      title: 'New patient enquiries',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The commercial and clinical lifecycle of a brand new patient enquiry.',
      sections: [
        {
          heading: 'The Gold Dust of Dentistry',
          content: [
            'New patient acquisition is the lifeblood of dental clinic growth.',
            'Unlike existing patients who will forgive a missed call and call back tomorrow, a prospective new patient has no loyalty.',
            'If their first impression of a clinic is an automated voice recording saying "Leave a message after the tone", their initial perception is that the clinic is disorganized or unavailable. Fast SMS capture preserves this critical first touchpoint.'
          ]
        }
      ],
      keyTakeaway: 'New patient enquiries have zero loyalty; their first impression dictates whether they join the clinic or call a competitor.',
      practicePrompt: 'Why does an unanswered call hurt a clinic\'s relationship with a new patient far more than with an existing patient?'
    },
    {
      id: 'dental-7',
      courseId: 'dental',
      lessonNumber: 7,
      title: 'Treatment enquiries',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'High-value cosmetic and restorative enquiries: implants, aligners, veneers, and composite bonding.',
      sections: [
        {
          heading: 'Understanding High-Value Elective Dentistry',
          content: [
            'Private dental practices make their highest profit margins on elective cosmetic treatments:',
            '• Clear Aligners (Invisalign): $3,500 – $6,000.',
            '• Dental Implants: $2,500 – $4,500 per tooth.',
            '• Composite Bonding: $1,500 – $3,500.',
            'A single missed call from a patient inquiring about smile transformation represents thousands in potential gross profit. Capturing even one of these enquiries pays for an entire year of software investment.'
          ]
        }
      ],
      keyTakeaway: 'A single high-ticket cosmetic or implant enquiry can be worth $3,000 to $6,000 to a private dental practice.',
      practicePrompt: 'Explain how the recovery of just one implant enquiry validates the economics of CliniConnect.'
    },
    {
      id: 'dental-8',
      courseId: 'dental',
      lessonNumber: 8,
      title: 'Appointment management',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'How dental diaries are structured: zoning, buffer slots, and clinical chair utilization.',
      sections: [
        {
          heading: 'The Art of Appointment Zoning',
          content: [
            'Experienced practice managers "zone" their appointment diaries. They reserve mornings for high-value production treatments (crown preps, surgical implants) and afternoons for short exams and emergencies.',
            'This is why software cannot arbitrarily dump bookings into empty slots. CliniConnect respects this by gathering patient time preferences and letting the front desk slot them into the correct clinical zone.'
          ]
        }
      ],
      keyTakeaway: 'Clinics zone their diaries by procedure complexity. Human oversight is mandatory to preserve clinical efficiency.',
      practicePrompt: 'Why can\'t software simply book an implant consultation into a standard 15-minute checkup slot?'
    },
    {
      id: 'dental-9',
      courseId: 'dental',
      lessonNumber: 9,
      title: 'Missed calls and patient communication',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'How clinics handle missed calls currently: voicemail notebooks, sticky notes, and lost traces.',
      sections: [
        {
          heading: 'The Current Practice Reality',
          content: [
            'In typical practices, missed call management is fragmented. An answering machine records messages, a receptionist scribbles phone numbers onto paper sticky notes, and returns calls whenever they find a 10-minute break.',
            'Often, by the time the receptionist calls back, the patient is unavailable, leading to frustrating games of "phone tag" that stretch over multiple days.'
          ]
        }
      ],
      keyTakeaway: 'Traditional phone tag and voicemail sticky notes waste staff time and fail to secure prospective patients.',
      practicePrompt: 'What happens when a receptionist calls back a voicemail 4 hours later and gets the patient\'s voicemail?'
    },
    {
      id: 'dental-10',
      courseId: 'dental',
      lessonNumber: 10,
      title: 'Why practices recruit receptionists',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Understanding the underlying triggers when a clinic advertises a receptionist job vacancy.',
      sections: [
        {
          heading: 'Behind the Job Posting',
          content: [
            'When you see a dental clinic posting a job ad on Indeed or LinkedIn for a dental receptionist, it reveals valuable operational clues:',
            '1. Workload Overload: The existing desk team is swamped and cannot keep up with foot traffic and calls.',
            '2. Staff Turnover: Receptionist burnout in healthcare is high due to phone stress and demanding patients.',
            '3. Growth: The clinic is adding a new surgery chair and clinician, expanding patient volume.'
          ]
        }
      ],
      keyTakeaway: 'Receptionist hiring ads indicate front-desk strain, growth, or turnover—all relevant operational contexts.',
      practicePrompt: 'Why is an active job advertisement a potential conversation starter with a practice manager?'
    },
    {
      id: 'dental-11',
      courseId: 'dental',
      lessonNumber: 11,
      title: 'Identifying suitable practices',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Signals of an ideal prospect: private services, active marketing, modern web presence, and multi-chair capacity.',
      sections: [
        {
          heading: 'The Qualification Checklist',
          content: [
            'Before reaching out to a dental practice, verify these four indicators:',
            '1. Service Mix: Do they offer high-value private treatments (Invisalign, implants, whitening, facial aesthetics)?',
            '2. Patient Reviews: Do they have 50+ Google reviews, indicating an active consumer base?',
            '3. Digital Marketing: Are they running Google Ads or Meta Ads? If so, they are actively spending money to make their phones ring.',
            '4. Multi-Chair Scale: Do they have 2 or more dentists listed on their team page?'
          ]
        }
      ],
      keyTakeaway: 'Target multi-chair private clinics investing in digital marketing and offering high-value elective dentistry.',
      practicePrompt: 'Review a local dental clinic\'s website and evaluate whether they meet the four qualification criteria.'
    },
    {
      id: 'dental-12',
      courseId: 'dental',
      lessonNumber: 12,
      title: 'Understanding the needs of a practice hiring a receptionist',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Crucial nuance: why hiring signals opportunity, but never guarantees a missed-call problem.',
      sections: [
        {
          heading: 'The Recruitment Discovery Nuance',
          content: [
            'A common rookie sales error is assuming: "They are hiring a receptionist, so their front desk is failing and they desperately need CliniConnect."',
            'This assumption is dangerous and alienates managers. A practice might be hiring because an existing employee is going on maternity leave, or because they are opening a second location with an immaculate call center.'
          ],
          callout: {
            type: 'rule',
            title: 'The Hiring Inquiry Rule',
            text: 'Never say: "I saw you\'re hiring, so you must be dropping calls." Instead say: "I noticed your team is expanding on reception. During growth periods like this, how is your team handling phone surges and after-hours enquiries?"'
          }
        }
      ],
      keyTakeaway: 'A job posting is an open door for gentle discovery, never an excuse to make rude assumptions about clinic operations.',
      practicePrompt: 'Formulate an opening question referencing their job ad that sounds supportive rather than accusatory.'
    }
  ]
};

