import { CourseData } from '../../types/training';

export const course2Workflow: CourseData = {
  id: 'workflow',
  code: '02',
  title: 'Understanding the CliniConnect Workflow',
  description: 'A deep-dive into the proposed end-to-end patient communication workflow, system dependencies, and front-desk handoffs.',
  focusArea: 'Step-by-step workflow stages, SMS mechanics, and operational boundaries.',
  totalLessons: 12,
  lessons: [
    {
      id: 'workflow-1',
      courseId: 'workflow',
      lessonNumber: 1,
      title: 'Overview of the proposed system',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Comprehensive view of the CliniConnect automation loop from call event to consultation booking.',
      sections: [
        {
          heading: 'The Intended Architecture',
          content: [
            'The core architecture of CliniConnect is designed around event-driven patient communication.',
            'When a telephony event occurs—specifically an unanswered inbound call or an after-hours voice ping—the system captures the telephony metadata (phone number, timestamp, call duration).',
            'This event triggers a rule-based messaging sequence that initiates an SMS conversation with the caller. The conversational agent asks conversational screening questions to categorize the patient enquiry (e.g., emergency toothache, new patient checkup, cosmetic enquiry, existing appointment change).'
          ],
          callout: {
            type: 'rule',
            title: 'Transparency Label Requirement',
            text: 'Whenever discussing this sequence, you must specify: "This is the proposed workflow currently undergoing configuration and testing, not proof of a live integration into every dental telephony provider."'
          }
        },
        {
          heading: 'The Complete Automation Loop',
          content: [
            '1. Inbound Call Event (unanswered / after-hours).',
            '2. Instant Telephony Webhook Detection.',
            '3. Practice-Branded Outbound SMS Dispatch (within 60-120 seconds).',
            '4. Patient Conversational Response.',
            '5. Contextual Query Categorization.',
            '6. Front-Desk Notification & Calendar Consultation Guidance.'
          ]
        }
      ],
      keyTakeaway: 'CliniConnect transforms raw missed phone calls into structured, prioritized text interactions ready for clinic staff action.',
      practicePrompt: 'Walk through the 6 stages of the CliniConnect workflow without looking at the notes.',
      diagramType: 'workflow'
    },
    {
      id: 'workflow-2',
      courseId: 'workflow',
      lessonNumber: 2,
      title: 'Understanding a missed call',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'How telephony systems recognize missed calls and distinguish them from answered calls and abandoned rings.',
      sections: [
        {
          heading: 'What Constitutes a "Missed Call"?',
          content: [
            'From an engineering standpoint, a call is categorized as "missed" when the carrier terminates the ringing state with a status of "no-answer", "busy", or "transferred-to-voicemail" without an active two-way voice bridge established.',
            'In dental practice telephony (VoIP systems such as RingCentral, Vonage, 8x8, or BT Cloud Voice), call logs generate programmatic call records. CliniConnect relies on these carrier-level or PBX webhooks to determine that a call was dropped or unanswered.',
            'Timing filter: To avoid spamming patients who immediately call back or who had an accidental one-second misdial, the workflow applies configurable debounce delays and duration thresholds before triggering SMS follow-ups.'
          ]
        }
      ],
      keyTakeaway: 'A missed call is an unbridged telephony event; debounce rules prevent duplicate messages when callers quickly dial back.',
      practicePrompt: 'Why is a 60-90 second debounce delay critical before sending an automated missed-call SMS?'
    },
    {
      id: 'workflow-3',
      courseId: 'workflow',
      lessonNumber: 3,
      title: 'The intended missed-call follow-up process',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Detailed examination of the first outbound SMS, message timing, tone, and compliance parameters.',
      sections: [
        {
          heading: 'The Initial Outbound Message',
          content: [
            'The initial SMS dispatched by CliniConnect is deliberately kept courteous, concise, and professional:',
            '"Hi there, this is [Clinic Name]. We noticed we just missed your call while assisting patients at the desk. How can our team assist you today?"',
            'This message works because it accomplishes three objectives:',
            '1. It acknowledges the patient\'s effort immediately.',
            '2. It provides a credible, empathetic reason (assisting patients at the desk).',
            '3. It invites a low-pressure reply that the patient can type quietly while at work or on the train.'
          ],
          callout: {
            type: 'script',
            title: 'Sample Initial SMS',
            text: '"Hi from St. Jude Dental! Sorry we missed your call just now—we are currently with patients at reception. Are you looking to book an appointment or ask a quick question?"'
          }
        }
      ],
      keyTakeaway: 'The initial message must be empathetic, identify the clinic clearly, and invite a brief text reply.',
      practicePrompt: 'Draft an alternative initial SMS copy suitable for a high-end cosmetic dental boutique.'
    },
    {
      id: 'workflow-4',
      courseId: 'workflow',
      lessonNumber: 4,
      title: 'After-hours enquiry handling',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Special handling protocols for evening, weekend, and holiday inbound communications.',
      sections: [
        {
          heading: 'Differentiating Office Hours vs. After Hours',
          content: [
            'The CliniConnect workflow dynamically evaluates the practice\'s operating schedule before determining the reply message logic.',
            'During clinic hours, the messaging implies immediate front-desk availability: "Our desk will call or text you right back."',
            'Outside clinic hours, expectation management is critical: "Our clinic is currently closed and will reopen at 8:30 AM tomorrow. Please reply with your name and what you need, and our team will prioritize your enquiry first thing in the morning."'
          ],
          callout: {
            type: 'caution',
            title: 'Clinical Safety Protocol',
            text: 'All after-hours messages must include clear clinical escalation instructions: "If you are experiencing severe dental swelling, uncontrolled bleeding, or trauma, please contact your local emergency department or dial 111/999 immediately."'
          }
        }
      ],
      keyTakeaway: 'After-hours messaging manages patient expectations for next-morning follow-up while maintaining mandatory emergency safety directions.',
      practicePrompt: 'Why must emergency disclaimers accompany after-hours automated medical communications?'
    },
    {
      id: 'workflow-5',
      courseId: 'workflow',
      lessonNumber: 5,
      title: 'SMS communication',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Why SMS is the premier communication channel for dental patient engagement compared to email or voicemail.',
      sections: [
        {
          heading: 'The Power of the SMS Channel',
          content: [
            'Telecommunications benchmarks reveal that SMS has an open rate exceeding 95%, with over 90% of messages read within 3 minutes of delivery.',
            'In contrast, business emails suffer from spam filters and average open rates below 20%. Voicemail retrieval among adults under 45 is virtually negligible.',
            'SMS allows patients to communicate in situations where voice calls are impossible—such as during office meetings, public transit commutes, or while caring for family members.'
          ]
        },
        {
          heading: 'SMS Etiquette and Boundaries',
          content: [
            'CliniConnect is programmed with strict communication boundaries: messages are never sent in rapid unprompted bursts, promotional spam is prohibited, and opt-out commands (STOP) are strictly honored according to telecommunication regulations.'
          ]
        }
      ],
      keyTakeaway: 'SMS provides unmatched 95%+ open rates, giving dental practices an immediate direct connection to prospective patients.',
      practicePrompt: 'Explain why a busy professional prefers texting their dentist over listening to phone menu trees.'
    },
    {
      id: 'workflow-6',
      courseId: 'workflow',
      lessonNumber: 6,
      title: 'Continuing patient conversations',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'How multi-turn conversational SMS categorizes enquiries and gathers essential administrative details.',
      sections: [
        {
          heading: 'Conversational Triage',
          content: [
            'When the patient responds to the initial SMS (e.g., "I cracked a molar and need an appointment"), CliniConnect does not send a cold robotic URL.',
            'The system acknowledges the specific issue: "We are sorry to hear that. A cracked tooth should be seen promptly. What is your full name, and do you prefer a morning or afternoon appointment?"',
            'By maintaining a natural, context-aware dialogue across 2 to 3 message exchanges, the system collects the caller’s full name, existing patient status, chief clinical complaint, and general time preference.'
          ]
        }
      ],
      keyTakeaway: 'Multi-turn dialogue gathers the caller\'s name, complaint, and time preferences without overwhelming the patient.',
      practicePrompt: 'Roleplay a 3-step text exchange with a patient seeking clear aligner consultations.'
    },
    {
      id: 'workflow-7',
      courseId: 'workflow',
      lessonNumber: 7,
      title: 'Helping guide patients toward consultations',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Structuring the patient hand-off so the practice manager or receptionist can confirm the consultation.',
      sections: [
        {
          heading: 'Guiding vs. Automated Direct Booking',
          content: [
            'One of the most important concepts to master in this academy is the difference between "guiding toward a consultation" and "automated calendar booking".',
            'In dentistry, appointments cannot be handed over blindly to an automated bot without clinical validation. A routine checkup requires 30 minutes with a hygienist or dentist, whereas a full dental implant workup requires a 60-minute diagnostic slot with CBCT scanning equipment.',
            'CliniConnect guides patients by gathering their preferred day/time windows and presenting a neat consultation proposal to the receptionist, who executes the final booking inside the practice software.'
          ],
          callout: {
            type: 'rule',
            title: 'Critical Sales Distinction',
            text: 'Never tell a dental practice manager that CliniConnect books appointments automatically into their calendar without human oversight. That is inaccurate and a major red flag for clinic managers.'
          }
        }
      ],
      keyTakeaway: 'CliniConnect gathers patient preferences to queue qualified consultations for receptionist confirmation, avoiding calendar chaos.',
      practicePrompt: 'Why do practice managers get terrified if a sales rep says software will "automatically book patients into your schedule"?'
    },
    {
      id: 'workflow-8',
      courseId: 'workflow',
      lessonNumber: 8,
      title: 'Treatment lead follow-up',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Extending the workflow to follow up on unaccepted treatment plans and high-value cosmetic enquiries.',
      sections: [
        {
          heading: 'The Unaccepted Treatment Plan Dilemma',
          content: [
            'In every dental practice, tens of thousands in recommended treatment sits dormant. Patients undergo a consultation for teeth straightening, crown replacement, or periodontal therapy, receive a treatment plan estimate, and say "Let me think about it."',
            'Receptionists, inundated with incoming clinic traffic, rarely have time to make outbound follow-up calls to these pending cases.',
            'The proposed CliniConnect treatment follow-up workflow allows the clinic to trigger a gentle SMS check-in 5 to 7 days post-consultation to answer questions or address financial concerns.'
          ]
        }
      ],
      keyTakeaway: 'Treatment lead follow-up reactivates unaccepted treatment plans with low-friction conversational check-ins.',
      practicePrompt: 'Write a gentle 5-day post-consultation follow-up SMS for a patient who had an aligner consultation.'
    },
    {
      id: 'workflow-9',
      courseId: 'workflow',
      lessonNumber: 9,
      title: 'Appointment reminders',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'Conversational 2-way appointment confirmations designed to minimize clinic no-shows and late cancellations.',
      sections: [
        {
          heading: 'Preventing the Expensive Empty Chair',
          content: [
            'A missed dental appointment (no-show) costs a practice between $150 and $400 in lost surgery time, fixed clinician payroll, and overhead that cannot be recovered.',
            'Standard automated reminder systems send one-way "no-reply" notifications that patients ignore or cannot interact with.',
            'CliniConnect\'s proposed appointment reminder workflow uses interactive two-way SMS (e.g., "Reply 1 to confirm, or reply to reschedule"). If a patient indicates they cannot make it, the clinic is notified immediately so the slot can be filled from an emergency standby list.'
          ]
        }
      ],
      keyTakeaway: 'Interactive two-way SMS reminders reduce no-shows and give clinics advance notice to backfill open surgery slots.',
      practicePrompt: 'Compare the effectiveness of a 1-way "no-reply" reminder text versus a 2-way interactive confirmation.'
    },
    {
      id: 'workflow-10',
      courseId: 'workflow',
      lessonNumber: 10,
      title: 'How the workflow fits alongside a front desk',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Collaborative synergy between software automation and human receptionists.',
      sections: [
        {
          heading: 'The Receptionist’s Digital Assistant',
          content: [
            'CliniConnect is engineered to sit quietly alongside the receptionist\'s existing screen and phone hardware.',
            'When the front desk is free, receptionists answer calls normally. CliniConnect only engages when the phone rings out or after hours.',
            'Instead of returning from lunch to 14 mysterious missed call notifications on a phone screen, the receptionist opens CliniConnect and sees 4 clean text transcripts with patient names, treatment desires, and requested booking times ready for quick confirmation.'
          ]
        }
      ],
      keyTakeaway: 'CliniConnect relieves front-desk stress by converting blind missed-call phone logs into structured, prioritized enquiry briefs.',
      practicePrompt: 'How does this workflow change a receptionist’s morning routine from stressful to organized?'
    },
    {
      id: 'workflow-11',
      courseId: 'workflow',
      lessonNumber: 11,
      title: 'An end-to-end illustrative patient journey',
      readTimeMinutes: 6,
      readiness: 'In development',
      summary: 'A step-by-step narrative walkthrough of Sarah, a working mother needing urgent dental care on a Tuesday evening.',
      sections: [
        {
          heading: 'The Story of Sarah’s Broken Filling',
          content: [
            'Tuesday, 7:15 PM: Sarah breaks an old amalgam filling during dinner. She visits Google, finds High Street Dental, and dials their number.',
            'Tuesday, 7:16 PM: The practice is closed. Sarah hears the recorded voicemail. She is on the verge of calling a competitor.',
            'Tuesday, 7:17 PM: Sarah receives an automated text: "Hi from High Street Dental! We noticed we missed your call. Our reception is closed for the evening, but we would love to help. What can we assist you with?"',
            'Tuesday, 7:19 PM: Sarah replies: "I broke a filling tonight. It is quite sharp against my tongue. Do you have any emergency appointments tomorrow morning?"',
            'Tuesday, 7:20 PM: System replies: "Ouch, broken fillings can be very uncomfortable. We prioritize emergency patients. What is your full name? Our team opens at 8:30 AM and will text or call you to slot you in."',
            'Tuesday, 7:21 PM: Sarah provides her name and feels reassured. She stops searching for other dentists.',
            'Wednesday, 8:32 AM: Front desk receptionist Emma arrives, opens the enquiry inbox, sees Sarah’s full note, reviews surgery openings, and texts Sarah with a confirmed 9:45 AM slot.'
          ]
        }
      ],
      keyTakeaway: 'The illustrative journey proves how swift automated engagement secures patient trust during vulnerable after-hours moments.',
      practicePrompt: 'Identify the exact moment in Sarah\'s journey where a competitor clinic would have captured her business under the old system.'
    },
    {
      id: 'workflow-12',
      courseId: 'workflow',
      lessonNumber: 12,
      title: 'Product limitations and workflow dependencies',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Critical technical dependencies, carrier limits, practice cooperation requirements, and unverified assumptions.',
      sections: [
        {
          heading: 'Acknowledging Technical Dependencies',
          content: [
            'To operate effectively, the CliniConnect workflow depends upon several external technical layers:',
            '1. Telephony Provider Compatibility: The practice must use a supported VoIP carrier or PBX system capable of triggering external webhook notifications on unanswered calls.',
            '2. SMS Gateway Delivery: SMS delivery depends on telecom carriers, cellular network signal, and compliance regulations (such as A2P 10DLC registration in the US or GDPR in the UK).',
            '3. Front-Desk Responsiveness: CliniConnect captures and organizes leads, but clinic staff must ultimately execute the clinical booking in their Practice Management Software.'
          ],
          callout: {
            type: 'caution',
            title: 'Mandatory Compliance Standard',
            text: 'Never claim that CliniConnect works with 100% of phone systems or operates with zero staff involvement. Transparency protects client relationships.'
          }
        }
      ],
      keyTakeaway: 'Workflow success depends on compatible VoIP telephony, carrier SMS delivery, and prompt front-desk booking execution.',
      practicePrompt: 'How do you answer when a practice manager asks: "Does this integrate with our 15-year-old analog landline copper phone?"'
    }
  ]
};

