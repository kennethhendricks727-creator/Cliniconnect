import { CourseData } from '../../types/training';

export const course3Product: CourseData = {
  id: 'product',
  code: '03',
  title: 'Complete Product Knowledge',
  description: 'Detailed feature analysis, technical boundaries, development readiness tiers, and answering customer product queries accurately.',
  focusArea: 'Feature specifications, readiness levels, and verified capabilities.',
  totalLessons: 10,
  lessons: [
    {
      id: 'product-1',
      courseId: 'product',
      lessonNumber: 1,
      title: 'Every currently defined CliniConnect feature',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Complete catalog of the five primary modules planned and configured for the CliniConnect platform.',
      sections: [
        {
          heading: 'The Five Defined CliniConnect Modules',
          content: [
            'CliniConnect is structured into five distinct operational capabilities:',
            '1. Missed Call Auto-SMS Responder: Automated detection of unanswered incoming calls and instant dispatch of friendly SMS enquiries.',
            '2. After-Hours Conversational Triage: Intelligent conversational logic that handles patient text replies outside clinic hours, collecting complaints and booking preferences.',
            '3. Two-Way Practice SMS Inbox: A centralized web-based message center where receptionists can view transcripts and continue texting patients directly from practice numbers.',
            '4. Treatment Plan Reactivation Sequences: Scheduled follow-up messaging for high-value patients who received clinical quotes but have not booked treatment.',
            '5. Interactive Appointment Confirmations: Two-way conversational SMS reminders to confirm attendance, flag cancellations, and protect surgery schedule utilization.'
          ]
        }
      ],
      keyTakeaway: 'The five defined modules address the full spectrum of patient communication leakage from missed calls to appointment retention.',
      practicePrompt: 'List all five defined CliniConnect modules from memory and state their primary purpose.',
      diagramType: 'readiness'
    },
    {
      id: 'product-2',
      courseId: 'product',
      lessonNumber: 2,
      title: 'The purpose of each feature',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Understanding the operational objective behind every defined platform component.',
      sections: [
        {
          heading: 'Feature Objectives Matrix',
          content: [
            '• Auto-SMS Responder: Purpose is speed-to-lead. It eliminates the 15-second competitor drop-off window by assuring the patient their call is valued.',
            '• After-Hours Triage: Purpose is capturing high-intent evening demand and converting passive voicemails into active morning tasks.',
            '• 2-Way Practice Inbox: Purpose is front-desk efficiency, allowing receptionists to manage 5 text conversations simultaneously in less time than 1 phone call.',
            '• Treatment Reactivation: Purpose is maximizing practice revenue yield from consultations already conducted by dentists.',
            '• Interactive Reminders: Purpose is eliminating costly surgery downtime and giving clinics early warning to backfill open slots.'
          ]
        }
      ],
      keyTakeaway: 'Every feature serves a measurable operational goal: speed, capture, efficiency, revenue yield, or schedule protection.',
      practicePrompt: 'Which feature provides the fastest immediate return on investment for a busy cosmetic dental clinic?'
    },
    {
      id: 'product-3',
      courseId: 'product',
      lessonNumber: 3,
      title: 'The problem each feature is intended to address',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Root-cause analysis of dental clinic operational breakdowns that each feature solves.',
      sections: [
        {
          heading: 'Connecting Features to Clinic Pain Points',
          content: [
            'When speaking with clinic owners, never talk about features in a vacuum. Connect every feature directly to the underlying pain point:',
            '1. Pain: "Our front desk is overwhelmed with phone calls while patients are standing at the counter." -> Solution: Auto-SMS Responder catches unanswered calls silently.',
            '2. Pain: "We spend $2,000/month on Google ads, but we miss calls after 5:00 PM." -> Solution: After-Hours Triage captures evening inquiries.',
            '3. Pain: "Receptionists hate listening to and transcribing voicemails." -> Solution: Conversational SMS captures written transcripts with contact info.',
            '4. Pain: "Patients say \'I will think about it\' after getting a $4,000 crown quote and vanish." -> Solution: Treatment Plan Reactivation sequences.'
          ]
        }
      ],
      keyTakeaway: 'Never pitch software features; always present the remedy to a specific front-desk friction point.',
      practicePrompt: 'Pick two common clinic complaints and explain how CliniConnect specifically remedies them.'
    },
    {
      id: 'product-4',
      courseId: 'product',
      lessonNumber: 4,
      title: 'How the proposed features work together',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'System synergy: how missed-call capture feeds into patient engagement and appointment retention.',
      sections: [
        {
          heading: 'The Integrated Ecosystem',
          content: [
            'CliniConnect is not a disjointed collection of standalone scripts; it operates as a cohesive patient communication lifecycle.',
            'A patient calls at 6:00 PM and misses the clinic. The Auto-SMS triggers. The After-Hours Triage gathers her request for cosmetic tooth bonding. The next morning, the receptionist opens the 2-Way Inbox, sees the categorized enquiry, and books her for a Friday consultation.',
            'Two days before Friday, the Interactive Reminder confirms her attendance. Following her consultation, if she needs time to consider full porcelain veneers, Treatment Reactivation nurtures her enquiry the following week.',
            'Each component reinforces the other, ensuring zero patient leakage.'
          ]
        }
      ],
      keyTakeaway: 'The modules link together into a continuous patient journey from initial missed contact to long-term care retention.',
      practicePrompt: 'Diagram the lifecycle path of a patient who enters through a missed call and completes treatment.'
    },
    {
      id: 'product-5',
      courseId: 'product',
      lessonNumber: 5,
      title: 'Intended benefits to dental practices',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Measurable financial, operational, and clinical benefits intended for the practice.',
      sections: [
        {
          heading: 'Quantifiable Practice Improvements',
          content: [
            '1. Patient Acquisition Yield: Capturing 10 to 25 additional new patient enquiries each month from calls that previously went unrecovered.',
            '2. Staff Calm and Focus: Lowering front-desk telephone stress, enabling staff to give undivided attention to in-surgery patients and visitors.',
            '3. Lower Overhead: Achieving the patient handling capacity of an additional administrative assistant without hiring costs, payroll tax, or workspace crowding.',
            '4. Higher Patient Satisfaction: Patients receive immediate digital responses rather than phone tag, elevating the practice’s modern reputation.'
          ]
        }
      ],
      keyTakeaway: 'Benefits encompass both financial return (captured treatments) and workplace sanity (reduced phone panic).',
      practicePrompt: 'Why is staff calm often as appealing to a practice manager as increased revenue?'
    },
    {
      id: 'product-6',
      courseId: 'product',
      lessonNumber: 6,
      title: 'How the system is intended to support receptionists',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Positioning CliniConnect as an indispensable ally for dental receptionists rather than an automated rival.',
      sections: [
        {
          heading: 'Winning the Receptionist’s Trust',
          content: [
            'Dental receptionists are frequent gatekeepers during cold outreach. If a receptionist perceives your software as an attempt to replace them or criticize their performance, they will immediately block your outreach.',
            'You must present CliniConnect as their digital co-pilot:',
            '"CliniConnect is built to take the pressure off your shoulders when the phone is ringing off the hook and three patients are waiting to pay their bills. It acts like an assistant answering the phone door when your hands are full."'
          ],
          callout: {
            type: 'script',
            title: 'Receptionist Empathy Phrasing',
            text: '"We know receptionists are the heart of the clinic. CliniConnect doesn’t take over your job—it just catches the overflow so you don’t have to stay late listening to voicemails."'
          }
        }
      ],
      keyTakeaway: 'Always present CliniConnect as the receptionist\'s greatest helper during busy surges, never as their replacement.',
      practicePrompt: 'Practice introducing CliniConnect to a front-desk receptionist who sounds rushed and stressed.'
    },
    {
      id: 'product-7',
      courseId: 'product',
      lessonNumber: 7,
      title: 'How to explain features without using technical jargon',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Translating technical software architecture into intuitive dental clinic terminology.',
      sections: [
        {
          heading: 'The Jargon Translation Table',
          content: [
            '• Instead of "VoIP Webhook Event Handling", say: "When your phone rings out without being answered."',
            '• Instead of "Natural Language SMS Agent", say: "A friendly automated text conversation that asks what the patient needs."',
            '• Instead of "Asynchronous Lead Pipeline Queuing", say: "A tidy list of patient requests waiting for your team to book."',
            '• Instead of "Automated Algorithmic Recall Schedules", say: "A gentle text reminder to check on patients who haven’t booked their treatment."'
          ]
        }
      ],
      keyTakeaway: 'Use simple, human clinical terms. Replace technical jargon with everyday clinic scenarios.',
      practicePrompt: 'Translate the phrase "API-driven omnichannel conversational triage" into one clear sentence for a dental manager.'
    },
    {
      id: 'product-8',
      courseId: 'product',
      lessonNumber: 8,
      title: 'What CliniConnect does not replace',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Setting unambiguous boundaries regarding software limitations and human clinical responsibilities.',
      sections: [
        {
          heading: 'Crucial Boundaries to Uphold',
          content: [
            'CliniConnect NEVER replaces:',
            '1. Human Clinical Assessment: The system cannot diagnose tooth pain, prescribe antibiotics, or determine clinical suitability.',
            '2. Compassionate Face-to-Face Care: Calming a nervous patient, holding a child’s hand, or explaining a complex surgery must always be done by clinic staff.',
            '3. Practice Management Software: CliniConnect is not a billing engine, clinical chart system, or digital radiography manager.',
            '4. Receptionist Judgement: Deciding which clinician is suited for a complex extraction requires experienced human oversight.'
          ]
        }
      ],
      keyTakeaway: 'CliniConnect handles rapid communication triage; it never replaces clinical judgment, human empathy, or the clinic\'s PMS.',
      practicePrompt: 'Why is it dangerous to promise that software can handle clinical triage for a patient with dental pain?'
    },
    {
      id: 'product-9',
      courseId: 'product',
      lessonNumber: 9,
      title: 'Current development status',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The four readiness classifications and exact state of CliniConnect development today.',
      sections: [
        {
          heading: 'The Four Readiness Categories',
          content: [
            'To maintain absolute integrity, every capability in our company is categorized into one of four verified readiness tiers:',
            '1. Implemented and tested: Code is written, deployed, and verified in real operational environments.',
            '2. In development: Workflow prototypes, webhooks, and n8n conversational agents are configured in staging environments and undergoing active refinement.',
            '3. Planned: Documented feature concepts prioritized on the roadmap for future development.',
            '4. Not supported: Capabilities that are outside our architectural scope or deliberately excluded.'
          ],
          callout: {
            type: 'rule',
            title: 'Current Reality',
            text: 'CliniConnect’s core conversational flows are currently "In development" (configured and being tested). There are NO claims of live production deployments or validated clinical partner case studies.'
          }
        }
      ],
      keyTakeaway: 'CliniConnect is in development and configuration. Never claim it is an established, widely deployed live tool.',
      practicePrompt: 'If a prospect asks "How many clinics are actively running this in production today?", state the exact honest answer.'
    },
    {
      id: 'product-10',
      courseId: 'product',
      lessonNumber: 10,
      title: 'Answering product questions accurately',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Protocol for handling unexpected technical inquiries: truth over improvisation.',
      sections: [
        {
          heading: 'The Professional Verification Rule',
          content: [
            'When a clinic manager asks a technical question you are not 100% certain about (such as "Does this support multi-site PBX routing with 3CX version 18?"), follow the Golden Rule:',
            'NEVER GUESS. NEVER SAY YES JUST TO SOUND IMPRESSIVE.',
            'The correct, highly professional response is:',
            '"That is an excellent technical question. Because phone setups vary across practices, I want to give you an exact answer rather than guess. Let me note your telephony provider and confirm the exact compatibility with our engineering team today."'
          ]
        }
      ],
      keyTakeaway: 'A representative earns respect by pausing to verify technical facts rather than fabricating answers.',
      practicePrompt: 'Practice saying the verification phrase out loud with confidence and poise.'
    }
  ]
};
