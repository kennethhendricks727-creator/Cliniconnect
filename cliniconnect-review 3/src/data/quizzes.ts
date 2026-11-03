import { QuizData } from '../types/training';

export const quizzes: Record<string, QuizData> = {
  foundations: {
    id: 'foundations',
    courseId: 'foundations',
    title: 'Course 01 Assessment: CliniConnect Foundations',
    description: 'Verify your understanding of CliniConnect’s origins, core purpose, front-desk role, and accurate positioning.',
    passingScore: 80,
    questions: [
      {
        id: 'f1',
        question: 'What is the most accurate way to describe CliniConnect today?',
        options: [
          'A proven live integration running across major dental chains',
          'A proposed patient-recovery workflow currently undergoing configuration and testing',
          'A full replacement for front-desk dental receptionists',
          'An automatic clinical diagnosing and direct calendar booking system'
        ],
        correctIndex: 1,
        explanation: 'CliniConnect is a proposed patient-recovery workflow currently in development; it must never be represented as an established live deployment.'
      },
      {
        id: 'f2',
        question: 'True or False: An unanswered inbound call in dentistry rarely causes patient loss because almost all patients leave a voicemail.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. Industry data reveals up to 75% of callers hang up without leaving a voicemail and frequently call a competitor within moments.'
      },
      {
        id: 'f3',
        question: 'Which of the following practices is CliniConnect primarily designed for?',
        options: [
          'A fully NHS-funded practice with a closed 2-year waiting list turning away patients',
          'A corporate dental chain with a centralized 24/7 call center',
          'A private or mixed dental clinic with 2-6 chairs wanting to grow without overworking the desk',
          'A solo mobile dentist operating out of a van'
        ],
        correctIndex: 2,
        explanation: 'Target clinics are private or mixed practices with 2 to 6 chairs that invest in marketing and have busy front-desk teams.'
      },
      {
        id: 'f4',
        scenario: 'A prospect asks: "Is this artificial intelligence designed to replace our head receptionist?"',
        question: 'What is the best way to respond to this question?',
        options: [
          '"Yes, it will save you payroll by doing all of her tasks automatically."',
          '"No. CliniConnect is designed as a safety net to support your front desk during rushes and out-of-hours, not replace them."',
          '"It depends on whether she likes technology or not."',
          '"We cannot disclose that until you sign our non-disclosure agreement."'
        ],
        correctIndex: 1,
        explanation: 'Receptionists are the empathetic core of dental clinics. CliniConnect acts as an overflow safety net, never a replacement.'
      },
      {
        id: 'f5',
        question: 'Why do patients looking for dental treatment frequently call a competitor if their call goes unanswered?',
        options: [
          'Because they are loyal to multiple clinics simultaneously',
          'Because dental needs often carry urgency or high emotional intent, and consumers prioritize immediate responsiveness',
          'Because dental marketing requires patients to call three clinics',
          'Because Google automatically redirects unanswered calls'
        ],
        correctIndex: 1,
        explanation: 'Prospective patients seeking dental care usually choose the first reputable practice that demonstrates immediate responsiveness.'
      }
    ]
  },

  workflow: {
    id: 'workflow',
    courseId: 'workflow',
    title: 'Course 02 Assessment: CliniConnect Workflow',
    description: 'Demonstrate mastery over the event-driven communication loop, SMS mechanics, and consultation triage.',
    passingScore: 80,
    questions: [
      {
        id: 'w1',
        question: 'Which sequence correctly represents the intended CliniConnect workflow?',
        options: [
          'Missed call → Automatic calendar slot booked → Voice robot dials patient → Confirmation',
          'Missed call / after-hours enquiry → Intended SMS follow-up → Patient responds → Conversation continues → Guided toward consultation',
          'Missed call → Voicemail transcription → Email sent to dental nurse → Patient called back next week',
          'Patient visits website → Direct PMS database sync → Emergency room alert'
        ],
        correctIndex: 1,
        explanation: 'The proposed sequence is: Missed call / after-hours enquiry → Intended SMS follow-up → Patient responds → Conversation continues → Guided toward consultation.'
      },
      {
        id: 'w2',
        question: 'Why does CliniConnect use a debounce delay (e.g. 60-90 seconds) before triggering an outbound missed-call SMS?',
        options: [
          'To save cellular network costs',
          'To prevent sending unnecessary messages if the patient immediately calls right back or had an accidental misdial',
          'Because SMS carriers require a 5-minute cooldown between calls',
          'To wait until the clinic closes for the day'
        ],
        correctIndex: 1,
        explanation: 'Debounce filters prevent spamming callers who redial immediately or who hung up after a split second.'
      },
      {
        id: 'w3',
        scenario: 'A patient calls a clinic at 8:00 PM on a Sunday with a severe toothache.',
        question: 'What must an automated after-hours response include for clinical safety?',
        options: [
          'An exact prescription for oral antibiotics',
          'A guarantee that the dentist will perform surgery at 8:00 AM Monday',
          'Instructions on urgent emergency care and emergency hotline directions (e.g. 111/999 or nearest hospital) in case of acute swelling or trauma',
          'A recommendation to wait 48 hours before seeking care'
        ],
        correctIndex: 2,
        explanation: 'Clinical safety regulations require medical and dental after-hours automated services to provide emergency escalation advice.'
      },
      {
        id: 'w4',
        question: 'True or False: CliniConnect automatically writes confirmed bookings directly into the dental practice calendar without receptionist review.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. CliniConnect guides patients by gathering preferences and queues the consultation for front-desk confirmation to protect clinical diary zoning.'
      },
      {
        id: 'w5',
        question: 'What is the primary operational objective of Two-Way Interactive Appointment Confirmations?',
        options: [
          'To replace clinical hygiene visits',
          'To reduce costly empty surgery chairs and provide early notice to backfill cancellations',
          'To collect upfront credit card deposits automatically',
          'To test patient telephone reception'
        ],
        correctIndex: 1,
        explanation: 'Interactive 2-way reminders minimize no-shows and give clinics time to offer open slots to waiting emergency patients.'
      }
    ]
  },

  product: {
    id: 'product',
    courseId: 'product',
    title: 'Course 03 Assessment: Complete Product Knowledge',
    description: 'Verify your knowledge of feature boundaries, readiness classifications, and accurate product claims.',
    passingScore: 80,
    questions: [
      {
        id: 'p1',
        question: 'Under CliniConnect’s four readiness categories, what does "Implemented and tested" mean?',
        options: [
          'Any idea written down in a feature planning document',
          'A feature that has been coded, deployed, and verified with operational testing evidence',
          'A feature currently working on a competitor’s platform',
          'Any feature promised by a sales representative'
        ],
        correctIndex: 1,
        explanation: '"Implemented and tested" requires actual code implementation and verified testing records in the existing project.'
      },
      {
        id: 'p2',
        question: 'What is the current official readiness status of CliniConnect’s core conversational recovery workflows?',
        options: [
          'Implemented and tested in 50 enterprise clinics',
          'In development (workflow prototypes and conversational nodes configured in staging)',
          'Not supported',
          'Abandoned'
        ],
        correctIndex: 1,
        explanation: 'The core workflows are currently "In development", undergoing configuration and testing.'
      },
      {
        id: 'p3',
        question: 'Which of the following functions does CliniConnect explicitly NOT perform?',
        options: [
          'Sending a polite SMS enquiry after an unanswered phone call',
          'Collecting caller name and general booking time preference',
          'Diagnosing oral conditions, prescribing drugs, or clinically triaging dental emergencies',
          'Gathering patient text responses outside normal business hours'
        ],
        correctIndex: 2,
        explanation: 'CliniConnect is strictly an administrative communication tool. It never performs clinical diagnoses or medical triage.'
      },
      {
        id: 'p4',
        scenario: 'A dental manager asks whether CliniConnect can integrate directly with an uncommon local PBX telephone system.',
        question: 'What is the correct and ethical response?',
        options: [
          '"Yes, our system connects with every phone system ever created."',
          '"I want to give you an exact answer rather than guess. Let me note your specific phone provider and verify compatibility with our engineering team today."',
          '"Phone integrations don’t matter for this system."',
          '"Only if you pay an additional $10,000 custom engineering fee."'
        ],
        correctIndex: 1,
        explanation: 'Never guess on technical compatibility. Pausing to verify with engineering demonstrates high integrity.'
      },
      {
        id: 'p5',
        question: 'What is the purpose of the Treatment Plan Reactivation workflow?',
        options: [
          'To repeatedly bill patients until they accept their treatment',
          'To gently check in by SMS with patients who received treatment quotes (like Invisalign or implants) but have not yet scheduled',
          'To report unaccepted treatments to credit agencies',
          'To automatically lower treatment pricing without dentist approval'
        ],
        correctIndex: 1,
        explanation: 'Treatment reactivation provides gentle, conversational follow-up to unaccepted treatment plans, recovering revenue for the clinic.'
      }
    ]
  },

  dental: {
    id: 'dental',
    courseId: 'dental',
    title: 'Course 04 Assessment: Understanding Dental Practices',
    description: 'Test your understanding of clinic hierarchy, receptionist pressures, and recruiting nuances.',
    passingScore: 80,
    questions: [
      {
        id: 'd1',
        question: 'Why is it usually inappropriate to ask to speak with the Principal Dentist between 9:00 AM and 5:00 PM?',
        options: [
          'Because they are usually playing golf',
          'Because they are in surgical gowns treating patients with their hands in mouths, where interrupting is clinically unsafe',
          'Because dentists do not care about clinic revenue',
          'Because clinic phones are disconnected during the day'
        ],
        correctIndex: 1,
        explanation: 'Principal dentists spend their daytime hours in clinical surgeries treating patients; business conversations are handled by the Practice Manager.'
      },
      {
        id: 'd2',
        question: 'Why does a job advertisement for a dental receptionist NOT guarantee that a clinic has a missed-call problem?',
        options: [
          'Because dental clinics never hire receptionists',
          'Because the clinic might be hiring for maternity cover, opening an additional location, or expanding with an existing call center',
          'Because receptionists do not answer phones in modern practices',
          'Because job boards fabricate dental job listings'
        ],
        correctIndex: 1,
        explanation: 'Hiring can indicate growth or turnover, but we must never assume or accuse a clinic of failing without respectful discovery.'
      },
      {
        id: 'd3',
        scenario: 'A practice manager tells you: "We have two receptionists at our desk, so we don\'t need any help."',
        question: 'What is the most constructive operational reality to explore?',
        options: [
          '"Your receptionists are probably lying to you about how many calls they answer."',
          '"That’s great daytime coverage! How does your clinic handle patient enquiries that occur between 6:00 PM and 8:30 AM or over weekends?"',
          '"Two receptionists are a waste of money."',
          '"Our software can replace one of them immediately."'
        ],
        correctIndex: 1,
        explanation: 'Acknowledge their daytime staffing, and explore the unstaffed out-of-hours and weekend patient enquiry window.'
      },
      {
        id: 'd4',
        question: 'What is meant by "appointment zoning" in a dental practice schedule?',
        options: [
          'Dividing the parking lot into patient parking zones',
          'Reserving specific blocks of surgery time for high-value complex procedures vs. short routine checkups',
          'Restricting patients to geographical zip codes',
          'Allowing patients to book surgery chairs without a clinician present'
        ],
        correctIndex: 1,
        explanation: 'Zoning structures the day into high-production morning blocks and routine afternoon blocks, which is why automated booking without oversight is rejected.'
      },
      {
        id: 'd5',
        question: 'Why are private cosmetic dentistry enquiries (like implants or aligners) so vital to practice owners?',
        options: [
          'Because they take only 5 minutes to complete',
          'Because they represent high-margin private revenue ($2,000–$6,000 per case) that subsidizes clinic overhead',
          'Because insurance companies require 50% cosmetic quotas',
          'Because dentists do not enjoy routine family dentistry'
        ],
        correctIndex: 1,
        explanation: 'High-value cosmetic and restorative cases generate significant private profit margins, making their recovery exceptionally valuable.'
      }
    ]
  },

  pricing: {
    id: 'pricing',
    courseId: 'pricing',
    title: 'Course 05 Assessment: Pricing and Value',
    description: 'Verify your mastery over proposed pricing figures, disclaimer requirements, and ethical ROI communication.',
    passingScore: 80,
    questions: [
      {
        id: 'pr1',
        question: 'What is the current proposed pricing structure for CliniConnect?',
        options: [
          '$500 setup and $100/month',
          '$2,500 one-time implementation and $800/month ongoing subscription',
          'Free setup and 20% commission on every booked patient',
          '$10,000 annual upfront payment only'
        ],
        correctIndex: 1,
        explanation: 'The proposed structure is $2,500 one-time setup and $800/month, subject to internal confirmation before final quote.'
      },
      {
        id: 'pr2',
        question: 'True or False: Representatives are permitted to guarantee a 10x Return on Investment if the clinic misses at least 20 calls a week.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. CliniConnect representatives are strictly forbidden from guaranteeing ROI, revenue numbers, or patient recovery volumes.'
      },
      {
        id: 'pr3',
        question: 'Why is all quoted pricing designated as "proposed and subject to internal confirmation"?',
        options: [
          'Because we do not know what currency the clinic uses',
          'Because individual clinic telephony configurations, carrier requirements, and site counts must be validated prior to binding agreements',
          'Because we change our prices on every phone call',
          'Because software pricing is legally required to be ambiguous'
        ],
        correctIndex: 1,
        explanation: 'Telephony infrastructure and multi-site complexities require technical validation before issuing binding contractual offers.'
      },
      {
        id: 'pr4',
        scenario: 'A practice manager says: "$800 a month sounds like a lot of money for software."',
        question: 'How should you responsibly contextualize this investment?',
        options: [
          '"If you can’t afford $800, your clinic is in financial trouble."',
          '"Compare that to hiring another receptionist at $2,500+/month, or recovering just one private dental case that would have called a competitor."',
          '"I will discount it to $200 right now if you sign today."',
          '"It’s actually $8,000, so $800 is a bargain."'
        ],
        correctIndex: 1,
        explanation: 'Contextualize the monthly investment against the high cost of additional headcount and the lifetime value of recovered private treatments.'
      },
      {
        id: 'pr5',
        question: 'When should a commercial pricing inquiry be escalated to company leadership?',
        options: [
          'Whenever a manager asks how much it costs',
          'When dealing with multi-location clinic groups, custom telephony integrations, or enterprise contract terms',
          'Whenever someone agrees to the $800 price',
          'Never; reps must close all contracts independently'
        ],
        correctIndex: 1,
        explanation: 'Multi-site groups, complex PBX integrations, and custom legal terms require executive review.'
      }
    ]
  },

  calling: {
    id: 'calling',
    courseId: 'calling',
    title: 'Course 06 Assessment: Cold-Calling Mastery',
    description: 'Demonstrate your knowledge of outreach preparation, receptionist respect, and walkthrough booking.',
    passingScore: 80,
    questions: [
      {
        id: 'c1',
        question: 'What is the sole primary objective of a cold call to a dental practice?',
        options: [
          'To collect the practice manager’s credit card number',
          'To pitch every feature of CliniConnect in 30 minutes',
          'To discover operational fit and secure a 15-minute diagnostic walkthrough',
          'To convince them to fire their existing receptionist'
        ],
        correctIndex: 2,
        explanation: 'The goal of cold outreach is never to close software on the phone, but to book a 15-minute diagnostic walkthrough.'
      },
      {
        id: 'c2',
        question: 'How much pre-call research should you conduct before placing a call to a dental practice?',
        options: [
          'Zero research; just dial random phone numbers as fast as possible',
          'Approximately 2 minutes to identify the clinic name, principal dentist, cosmetic treatments, and reviews',
          'At least 45 minutes of detailed social media investigation per clinic',
          'Wait until the clinic calls you first'
        ],
        correctIndex: 1,
        explanation: 'A focused 120-second review gives you the clinic name, treatments, and clinician context needed for a relevant conversation.'
      },
      {
        id: 'c3',
        scenario: 'You dial a clinic and the receptionist answers with a busy, stressed tone: "Oak Dental, please hold." She returns after 45 seconds.',
        question: 'What is your best conversational approach?',
        options: [
          'Sound loud and energetic to snap her out of her bad mood',
          'Complain about being kept on hold for 45 seconds',
          'Speak with gentle warmth, acknowledge her busy desk, and state your purpose concisely',
          'Hang up immediately and call back in 2 minutes'
        ],
        correctIndex: 2,
        explanation: 'Empathizing with their busy reality and speaking with calm, concise courtesy diffuses stress and earns respect.'
      },
      {
        id: 'c4',
        question: 'Why should you ask for "feedback on the proposed workflow" rather than asking for a "sales demo"?',
        options: [
          'Because feedback is non-threatening, respects their operational expertise, and lowers defensive sales barriers',
          'Because we are not allowed to sell anything',
          'Because demos take too long to run',
          'Because practice managers do not know what a demo is'
        ],
        correctIndex: 0,
        explanation: 'Asking for feedback flatters their operational experience and frames the interaction as collaborative rather than transactional.'
      },
      {
        id: 'c5',
        question: 'What should you do immediately after asking: "Would you be open to a 15-minute walkthrough?"',
        options: [
          'Keep talking to explain that the walkthrough is completely free',
          'Offer to send an email just in case they are too busy',
          'Stop talking completely and wait in confident silence for their response',
          'Disconnect the call'
        ],
        correctIndex: 2,
        explanation: 'Embrace the tactical pause. Let the prospect process your request and respond without interruption.'
      }
    ]
  },

  scripts: {
    id: 'scripts',
    courseId: 'scripts',
    title: 'Course 07 Assessment: CliniConnect Sales Scripts',
    description: 'Verify word-for-word accuracy, discovery sequencing, and objection transitions.',
    passingScore: 80,
    questions: [
      {
        id: 'sc1',
        question: 'Which of the following is the official, word-for-word RECEPTIONIST OPENER?',
        options: [
          '"Hi, is the boss in? I’ve got some software that will save you guys a bunch of money."',
          '"Hi, this is [Name]. I\'m speaking with dental practices about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."',
          '"Good morning, this is urgent regarding an unbooked patient in your chair."',
          '"Hello, can you transfer me to the doctor immediately please?"'
        ],
        correctIndex: 1,
        explanation: 'The exact approved script is: "Hi, this is [Name]. I\'m speaking with dental practices about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."'
      },
      {
        id: 'sc2',
        question: 'If the receptionist asks "Can I ask what this is regarding?", what is the exact approved script?',
        options: [
          '"It\'s a confidential personal matter."',
          '"I\'m working on a patient-recovery system designed to help dental practices follow up with missed calls and after-hours enquiries. I\'d like to briefly introduce it to the person who handles practice operations."',
          '"I\'m an AI specialist calling to pitch our new automated chatbot."',
          '"Just tell them it\'s [Name], they know what it\'s about."'
        ],
        correctIndex: 1,
        explanation: 'The approved phrasing clearly states the patient-recovery system and operational focus.'
      },
      {
        id: 'sc3',
        question: 'What is the third question in the Golden Discovery sequence?',
        options: [
          '"How much money did your clinic make last year?"',
          '"Roughly how many missed calls would you say the practice receives in a typical week?"',
          '"Why haven’t you upgraded your telephone system?"',
          '"Do you want to buy CliniConnect right now?"'
        ],
        correctIndex: 1,
        explanation: 'Discovery question 3 asks: "Roughly how many missed calls would you say the practice receives in a typical week?"'
      },
      {
        id: 'sc4',
        question: 'In the official product explanation script, how is the relationship with the front desk described?',
        options: [
          '"The aim is to replace your front desk with artificial intelligence."',
          '"The aim is to support your front desk, not replace it."',
          '"The aim is to make receptionists redundant by 2027."',
          '"The aim is to outsource your front desk to an offshore call center."'
        ],
        correctIndex: 1,
        explanation: 'The script specifically emphasizes: "The aim is to support your front desk, not replace it."'
      },
      {
        id: 'sc5',
        question: 'What is the exact closing script for booking the walkthrough?',
        options: [
          '"I\'d love to show you the proposed workflow and get your feedback. Would you be open to a 15-minute walkthrough?"',
          '"Can I sign you up for our monthly contract right now?"',
          '"I\'ll send an invoice over for the $2,500 setup fee."',
          '"Do you have an hour free tomorrow for a sales presentation?"'
        ],
        correctIndex: 0,
        explanation: 'The closing script asks: "I\'d love to show you the proposed workflow and get your feedback. Would you be open to a 15-minute walkthrough?"'
      }
    ]
  },

  objections: {
    id: 'objections',
    courseId: 'objections',
    title: 'Course 08 Assessment: Objection Handling',
    description: 'Master authentic, honest answers to tough customer questions and technical inquiries.',
    passingScore: 80,
    questions: [
      {
        id: 'ob1',
        scenario: 'A practice manager says: "Is this software already being used by other clinics in our city?"',
        question: 'What is the only honest and compliant way to answer?',
        options: [
          '"Yes, we have 40 clinics in your city using it right now."',
          '"I cannot give you their names due to HIPAA/GDPR, but everyone is using it."',
          '"CliniConnect is currently undergoing configuration and active testing. We are speaking with select private practices to walkthrough the proposed workflow and gather feedback before live rollout."',
          '"Change the subject immediately and ask what phone system they use."'
        ],
        correctIndex: 2,
        explanation: 'Never invent customers. Acknowledge openly that CliniConnect is in configuration and testing.'
      },
      {
        id: 'ob2',
        scenario: 'A prospect asks: "Can CliniConnect automatically write bookings into our Dentrix calendar without my receptionists touching it?"',
        question: 'How do you answer this technical capability question accurately?',
        options: [
          '"Yes, our AI has full write permissions to every Dentrix database."',
          '"No, and that is deliberate. Dentists want full control over their surgical diary. CliniConnect guides patients and queues requests for your staff to confirm."',
          '"Dentrix is obsolete, so you won’t need it anymore."',
          '"It does that automatically if you buy the premium package."'
        ],
        correctIndex: 1,
        explanation: 'Explain honestly that CliniConnect avoids direct unattended calendar writes to safeguard diary zoning.'
      },
      {
        id: 'ob3',
        scenario: 'A clinic manager tells you: "We already have an answering machine that records voicemails."',
        question: 'What discovery question addresses the limitation of answering machines?',
        options: [
          '"Why are you still using 1990s technology?"',
          '"In your experience, when prospective patients reach that answering machine, do most of them leave a message or do many simply hang up and call elsewhere?"',
          '"Answering machines are illegal for medical clinics."',
          '"Can you read me the last voicemail you received?"'
        ],
        correctIndex: 1,
        explanation: 'Gently explore caller drop-off: most callers hang up on voicemails and dial competitors.'
      },
      {
        id: 'ob4',
        scenario: 'A prospect asks: "Does this integrate with our legacy on-premise phone server?"',
        question: 'You are not certain about the compatibility of their specific legacy server. What must you do?',
        options: [
          'Say "Yes" to avoid losing the walkthrough',
          'Say "No, it will never work with that"',
          'Confirm that phone compatibility must be verified with our engineering team before making a technical commitment',
          'Pretend you didn’t hear the question'
        ],
        correctIndex: 2,
        explanation: 'When technical facts are unverified, tell the prospect you will verify compatibility rather than inventing answers.'
      },
      {
        id: 'ob5',
        question: 'When a manager says "We\'re too busy to talk", why is that an indicator of potential need?',
        options: [
          'Because busy clinics are the ones where ringing phones interrupt reception and calls leak to voicemail',
          'Because busy clinics always have extra cash',
          'Because busy managers love buying software',
          'Because busy managers never say no'
        ],
        correctIndex: 0,
        explanation: 'Busyness causes front-desk bottlenecks; CliniConnect provides the safety net they need most when overwhelmed.'
      }
    ]
  },

  professionalism: {
    id: 'professionalism',
    courseId: 'professionalism',
    title: 'Course 09 Assessment: Professionalism and Sales Excellence',
    description: 'Verify your understanding of active listening, ethical boundaries, and brand ambassadorship.',
    passingScore: 80,
    questions: [
      {
        id: 'pr1_q',
        question: 'What is the difference between high-pressure selling and confident professional communication?',
        options: [
          'High pressure uses artificial urgency and emotional manipulation; confidence provides clear facts and gives the prospect complete freedom to decide',
          'High pressure is done on the phone; confidence is done over email',
          'High pressure works better in dentistry',
          'There is no difference in modern sales'
        ],
        correctIndex: 0,
        explanation: 'Confidence is calm, transparent, and detached from the immediate sale, giving the clinic freedom to evaluate fit.'
      },
      {
        id: 'pr2_q',
        question: 'Which of the following vocabulary pairs reflects proper professional dental terminology?',
        options: [
          'Referring to "customers" and "dental offices"',
          'Referring to "patients" and "dental surgeries / operatories"',
          'Referring to "buyers" and "workstations"',
          'Referring to "leads" and "treatment booths"'
        ],
        correctIndex: 1,
        explanation: 'In healthcare, we refer to "patients" receiving care in "surgeries / operatories".'
      },
      {
        id: 'pr3_q',
        scenario: 'A prospect seems ready to sign if you simply promise that CliniConnect will recover at least 20 patients during their first month.',
        question: 'Under CliniConnect ethical standards, what MUST you do?',
        options: [
          'Promise the 20 patients so you can close the deal today',
          'Refuse to make unverified guarantees, explain that results depend on clinic demand and follow-up speed, and uphold our ethical standard',
          'Promise 15 patients instead as a compromise',
          'Tell them our legal department guarantees it'
        ],
        correctIndex: 1,
        explanation: 'Never make unverified guarantees to close a deal. Our ethical standards are non-negotiable.'
      },
      {
        id: 'pr4_q',
        question: 'What does "mirroring" mean in active listening during a phone conversation?',
        options: [
          'Holding a physical mirror to watch your smile while speaking',
          'Repeating back the last 2-3 critical words the customer spoke with an inquisitive tone to encourage deeper sharing',
          'Imitating their accent or speech defect',
          'Speaking at the exact same volume as the customer'
        ],
        correctIndex: 1,
        explanation: 'Mirroring repeats the prospect\'s key words, signaling deep listening and prompting them to expand naturally.'
      },
      {
        id: 'pr5_q',
        question: 'Why is logging call outcomes immediately in your records essential for sales excellence?',
        options: [
          'Because computers delete memory if not saved every 30 seconds',
          'Because clean records ensure reliable follow-up, prevent embarrassing duplicate calls, and protect relationship continuity',
          'Because clinic managers review your call logs',
          'To make your daily report look longer'
        ],
        correctIndex: 1,
        explanation: 'Disciplined record-keeping ensures professional follow-through and eliminates chaotic execution.'
      }
    ]
  },

  final: {
    id: 'final',
    title: 'Final CliniConnect Certification Examination',
    description: 'Comprehensive 20-question examination testing all nine domains: workflow, feature boundaries, dental economics, scripts, discovery, objections, and ethical sales excellence. Pass mark: 80% (16/20).',
    passingScore: 80,
    questions: [
      {
        id: 'fin_1',
        question: 'What is the foundational positioning of CliniConnect today?',
        options: [
          'A proven enterprise dental platform deployed across 500 clinics',
          'A proposed patient-recovery workflow currently undergoing configuration and testing',
          'An artificial intelligence bot intended to eliminate dental receptionist jobs',
          'An automated diagnostic tool for emergency dental triage'
        ],
        correctIndex: 1,
        explanation: 'CliniConnect is a proposed patient-recovery system in development and configuration; live integration claims are false.'
      },
      {
        id: 'fin_2',
        question: 'What is the intended primary trigger that initiates the CliniConnect workflow?',
        options: [
          'A patient clicking an Instagram ad',
          'An unanswered inbound phone call or after-hours call event detected by telephony integration',
          'A patient walking into the physical waiting room',
          'A dentist completing a root canal'
        ],
        correctIndex: 1,
        explanation: 'The workflow triggers when an incoming call goes unanswered or occurs outside operating hours.'
      },
      {
        id: 'fin_3',
        question: 'Which communication channel does CliniConnect use for its initial patient engagement follow-up?',
        options: [
          'Direct mail postal postcard',
          'Automated robotic outbound voice call',
          'Practice-branded conversational SMS',
          'Marketing newsletter email'
        ],
        correctIndex: 2,
        explanation: 'CliniConnect utilizes prompt, friendly conversational SMS with a 95%+ open rate.'
      },
      {
        id: 'fin_4',
        question: 'True or False: A dental clinic with zero receptionist vacancies never experiences missed calls.',
        options: ['True', 'False'],
        correctIndex: 1,
        explanation: 'False. Even fully staffed clinics miss calls during morning check-in rushes, lunch breaks, and evenings.'
      },
      {
        id: 'fin_5',
        question: 'What is the proposed pricing structure for CliniConnect?',
        options: [
          '$500 setup and $200 per month',
          '$2,500 setup and $800 per month (proposed and subject to internal confirmation)',
          '10% revenue share of all clinical gross billings',
          'Free trial for 12 months'
        ],
        correctIndex: 1,
        explanation: 'The proposed structure is $2,500 implementation setup and $800 monthly subscription.'
      },
      {
        id: 'fin_6',
        question: 'Which of the following statements about CliniConnect ROI is permitted under company policy?',
        options: [
          '"We guarantee a 5x return on investment within 30 days."',
          '"Our system is intended to safeguard patient enquiries; recovering even one private treatment plan can offset the monthly investment."',
          '"Every clinic makes at least $10,000 extra per month with CliniConnect."',
          '"Your practice will never lose a single patient again, guaranteed."'
        ],
        correctIndex: 1,
        explanation: 'We never guarantee ROI; we speak responsibly of intended benefits and unit economics.'
      },
      {
        id: 'fin_7',
        question: 'Why does CliniConnect guide patients toward consultations rather than booking directly into surgery slots?',
        options: [
          'Because our developers did not want to write the calendar code',
          'Because clinical diary zoning requires human receptionist oversight to ensure correct clinician, chair, and procedure duration',
          'Because dental calendars do not support digital appointments',
          'Because patients refuse to use digital booking'
        ],
        correctIndex: 1,
        explanation: 'Clinical diary zoning and procedure complexity require human reception oversight to prevent diary chaos.'
      },
      {
        id: 'fin_8',
        scenario: 'A prospect asks: "How many active clinics are using this in our region?"',
        question: 'What is the mandated response?',
        options: [
          '"We currently have around 25 clinics in your region."',
          '"CliniConnect is in configuration and testing. We are speaking with select private practices to walkthrough the proposed workflow and gather feedback before live deployment."',
          '"I cannot tell you because our client list is confidential under national security law."',
          '"We are completely sold out in your area."'
        ],
        correctIndex: 1,
        explanation: 'State truthfully that CliniConnect is in configuration and testing, gathering manager feedback.'
      },
      {
        id: 'fin_9',
        question: 'What is the word-for-word RECEPTIONIST OPENER?',
        options: [
          '"Hi, is the clinic owner available to talk about marketing software?"',
          '"Hi, this is [Name]. I\'m speaking with dental practices about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."',
          '"Good morning, this is the healthcare hotline calling regarding patient satisfaction."',
          '"Hello, I need to speak to the person in charge of IT right now."'
        ],
        correctIndex: 1,
        explanation: 'Approved script: "Hi, this is [Name]. I\'m speaking with dental practices about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."'
      },
      {
        id: 'fin_10',
        question: 'What is the word-for-word MANAGER OPENER?',
        options: [
          '"Hi, thanks for taking my call. I\'ll keep it brief. I\'m speaking with dental practices about how they handle missed calls and after-hours enquiries. Can I ask you a quick question?"',
          '"Hi, I’m calling to sell you an AI system for your front desk."',
          '"Hello, did you know your front desk is losing thousands of dollars every week?"',
          '"Hi, do you have 30 minutes to review your annual financial statement?"'
        ],
        correctIndex: 0,
        explanation: 'Approved script: "Hi, thanks for taking my call. I\'ll keep it brief. I\'m speaking with dental practices about how they handle missed calls and after-hours enquiries. Can I ask you a quick question?"'
      },
      {
        id: 'fin_11',
        question: 'Which of the following is the first question in the Golden Discovery Sequence?',
        options: [
          '"When a patient calls after hours and nobody answers, what usually happens?"',
          '"How much do you pay your receptionists per hour?"',
          '"Why don’t you answer your phones on weekends?"',
          '"Do you want to see our software demo?"'
        ],
        correctIndex: 0,
        explanation: 'Question 1: "When a patient calls after hours and nobody answers, what usually happens?"'
      },
      {
        id: 'fin_12',
        question: 'Which of the following is the second question in the Golden Discovery Sequence?',
        options: [
          '"Are you happy with your current telephone provider?"',
          '"Do most patients leave a voicemail, or do many simply move on?"',
          '"How many dental chairs do you have in surgery?"',
          '"What is your marketing budget?"'
        ],
        correctIndex: 1,
        explanation: 'Question 2: "Do most patients leave a voicemail, or do many simply move on?"'
      },
      {
        id: 'fin_13',
        question: 'What is the primary closing call-to-action requested at the end of a sales conversation?',
        options: [
          'A signed 12-month legal contract',
          'A $2,500 credit card transaction',
          'A 15-minute diagnostic walkthrough to review the proposed workflow and gather feedback',
          'An in-person dinner meeting with the principal dentist'
        ],
        correctIndex: 2,
        explanation: 'The closing call-to-action is a low-friction 15-minute walkthrough to review the workflow and gather feedback.'
      },
      {
        id: 'fin_14',
        scenario: 'A practice manager says: "We already have a receptionist who answers our calls."',
        question: 'What is the most effective and respectful way to respond?',
        options: [
          '"Your receptionist cannot possibly answer every call while taking payments at the counter. CliniConnect acts as her overflow safety net when line two rings."',
          '"She is probably missing half your calls without you knowing."',
          '"Our software will allow you to reduce her hours to save payroll."',
          '"Then you don’t need our help, goodbye."'
        ],
        correctIndex: 0,
        explanation: 'Frame CliniConnect as the receptionist\'s overflow safety net during front-counter check-in surges.'
      },
      {
        id: 'fin_15',
        scenario: 'A manager asks: "Can this system integrate directly with Software of Excellence (Exact) or Dentrix?"',
        question: 'How should you respond?',
        options: [
          '"Yes, it already has deep two-way integration with every version of Exact and Dentrix."',
          '"CliniConnect operates primarily on the phone and SMS communication layer alongside your software. Direct PMS sync is on our planned roadmap. Let me confirm your specific version with engineering."',
          '"Exact and Dentrix are terrible systems that you should replace."',
          '"No software in the world can integrate with Dentrix."'
        ],
        correctIndex: 1,
        explanation: 'Explain that CliniConnect sits on the telephony layer alongside the PMS, with direct sync planned, and verify their specific version.'
      },
      {
        id: 'fin_16',
        question: 'What are the four verified readiness categories used in CliniConnect documentation?',
        options: [
          'Alpha, Beta, Release Candidate, Deprecated',
          'Implemented and tested, In development, Planned, Not supported',
          'Gold, Silver, Bronze, Experimental',
          'Active, Pending, Stalled, Cancelled'
        ],
        correctIndex: 1,
        explanation: 'The four verified readiness categories are: Implemented and tested, In development, Planned, Not supported.'
      },
      {
        id: 'fin_17',
        question: 'Why should you avoid technical jargon like "webhooks" or "asynchronous pipeline architecture" when speaking with dental managers?',
        options: [
          'Because practice managers are not interested in engineering plumbing; they care about patient care, receptionist relief, and clinic calm',
          'Because technical terms are copyrighted by telecommunication carriers',
          'Because dental managers are legally prohibited from hearing IT terms',
          'Because technical terms make the software sound too inexpensive'
        ],
        correctIndex: 0,
        explanation: 'Practice managers care about operational patient outcomes and receptionist relief, not technical plumbing.'
      },
      {
        id: 'fin_18',
        question: 'What must you do after asking a closing question like "Would you be open to a 15-minute walkthrough?"',
        options: [
          'Immediately start listing reasons why the walkthrough is free',
          'Offer to call back next month',
          'Pause and stay completely silent, allowing the manager time to think and respond',
          'Hang up before they can say no'
        ],
        correctIndex: 2,
        explanation: 'Maintain tactical silence. Give the prospect space to answer without feeling pressured.'
      },
      {
        id: 'fin_19',
        question: 'Why is it critical to include an emergency clinical disclaimer in after-hours automated messages?',
        options: [
          'To satisfy telecom carrier marketing laws',
          'To ensure patients with acute swelling, severe trauma, or airway compromise seek immediate emergency medical care',
          'To discourage patients from contacting the clinic',
          'Because emergency rooms pay a referral commission'
        ],
        correctIndex: 1,
        explanation: 'Patient safety is paramount. Any medical/dental out-of-hours automation must direct acute emergencies to appropriate emergency care.'
      },
      {
        id: 'fin_20',
        question: 'What is the ethical cornerstone of representing CliniConnect in the dental sector?',
        options: [
          'Closing the deal at all costs, regardless of what promises are made',
          'Absolute honesty: never fabricating live clients, never guaranteeing financial ROI, and accurately stating our development stage',
          'Promising whatever technical integration the customer asks for',
          'Criticizing local competitors to make CliniConnect look superior'
        ],
        correctIndex: 1,
        explanation: 'Absolute honesty and ethical transparency are non-negotiable standards for every CliniConnect representative.'
      }
    ]
  }
};

