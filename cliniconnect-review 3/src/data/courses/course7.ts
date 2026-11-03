import { CourseData } from '../../types/training';

export const course7Scripts: CourseData = {
  id: 'scripts',
  code: '07',
  title: 'CliniConnect Sales Scripts',
  description: 'The complete script library: word-for-word openers, discovery prompts, product explanations, and closing phrasing with full conversational context.',
  focusArea: 'Exact script wording, delivery tempo, pauses, and avoiding common traps.',
  totalLessons: 10,
  lessons: [
    {
      id: 'scripts-1',
      courseId: 'scripts',
      lessonNumber: 1,
      title: 'Receptionist opener',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The word-for-word script for opening calls with the dental front desk with courtesy and clarity.',
      sections: [
        {
          heading: 'The Official Script',
          content: [
            '"Hi, this is [Name]. I\'m speaking with dental practices about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word Receptionist Script',
            text: '"Hi, this is [Name]. I\'m speaking with dental practices about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."'
          }
        },
        {
          heading: 'Script Execution Breakdown',
          content: [
            '• When to use it: The moment the front-desk receptionist answers the phone.',
            '• Why it works: It states who you are immediately, states the exact operational topic, and politely asks for directions rather than demanding a transfer.',
            '• How to deliver naturally: Speak with a calm, friendly downward inflection. Do not rush your name.',
            '• What to avoid: Never pretend to be a personal friend of the doctor or use deceptive trickery.'
          ]
        },
        {
          heading: 'Example Dialogue',
          content: [
            'Receptionist: "Good morning, Oak Dental, Lisa speaking, how can I help?"',
            'You: "Hi Lisa, this is James. I\'m speaking with dental practices in Bristol about missed calls and after-hours patient enquiries. Could you point me towards the practice manager or owner? I\'d like to ask a couple of quick questions."',
            'Receptionist: "Sure, that would be Karen. Let me check if she is in her office."'
          ]
        }
      ],
      keyTakeaway: 'The receptionist opener is polite, transparent, and asks for guidance without entitlement.',
      practicePrompt: 'Deliver the receptionist opener three times, focusing on calm pacing and clear articulation.',
      diagramType: 'script-breakdown'
    },
    {
      id: 'scripts-2',
      courseId: 'scripts',
      lessonNumber: 2,
      title: 'If asked why',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The exact phrasing to use when a gatekeeper asks what your call is regarding before transferring.',
      sections: [
        {
          heading: 'The Official Script',
          content: [
            '"I\'m working on a patient-recovery system designed to help dental practices follow up with missed calls and after-hours enquiries. I\'d like to briefly introduce it to the person who handles practice operations."'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word "If Asked Why" Script',
            text: '"I\'m working on a patient-recovery system designed to help dental practices follow up with missed calls and after-hours enquiries. I\'d like to briefly introduce it to the person who handles practice operations."'
          }
        },
        {
          heading: 'Script Execution Breakdown',
          content: [
            '• When to use it: When the receptionist asks "Can I ask what this is regarding?" or "What company are you with?"',
            '• Why it works: It frames the conversation around "patient recovery" and "practice operations"—words that signal genuine B2B operational relevance rather than spam.',
            '• How to deliver naturally: Keep your tone collaborative, not defensive. Smile as you say it.',
            '• What to avoid: Do not say "I\'m calling to sell software" or "It\'s a sales call."'
          ]
        },
        {
          heading: 'Example Dialogue',
          content: [
            'Receptionist: "Can I tell Karen what this is regarding?"',
            'You: "Of course! I\'m working on a patient-recovery system designed to help dental practices follow up with missed calls and after-hours enquiries. I\'d like to briefly introduce it to the person who handles practice operations."',
            'Receptionist: "Understood. One moment, connecting you now."'
          ]
        }
      ],
      keyTakeaway: 'Framing the purpose around "patient recovery" and "practice operations" validates your call legitimacy.',
      practicePrompt: 'Practice answering the receptionist’s screening question with confidence and zero hesitation.'
    },
    {
      id: 'scripts-3',
      courseId: 'scripts',
      lessonNumber: 3,
      title: 'Manager opener',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The exact script for greeting the practice manager and securing permission to discuss clinic operations.',
      sections: [
        {
          heading: 'The Official Script',
          content: [
            '"Hi, thanks for taking my call. I\'ll keep it brief. I\'m speaking with dental practices about how they handle missed calls and after-hours enquiries. Can I ask you a quick question?"'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word Manager Opener Script',
            text: '"Hi, thanks for taking my call. I\'ll keep it brief. I\'m speaking with dental practices about how they handle missed calls and after-hours enquiries. Can I ask you a quick question?"'
          }
        },
        {
          heading: 'Script Execution Breakdown',
          content: [
            '• When to use it: As soon as the practice manager says "Hello" or identifies themselves.',
            '• Why it works: It immediately respects their busy schedule ("I\'ll keep it brief"), frames the industry peer context, and asks for permission.',
            '• How to deliver naturally: Pause for a full second after asking "Can I ask you a quick question?" Let them say "Sure, what is it?"',
            '• What to avoid: Never launch into a monologue without waiting for their consent.'
          ]
        },
        {
          heading: 'Example Dialogue',
          content: [
            'Manager: "Hello, this is Karen, Practice Manager."',
            'You: "Hi Karen, thanks for taking my call. I\'ll keep it brief. I\'m speaking with dental practices in the area about how they handle missed calls and after-hours enquiries. Can I ask you a quick question?"',
            'Manager: "Sure, go ahead, what\'s on your mind?"'
          ]
        }
      ],
      keyTakeaway: 'The manager opener builds immediate rapport by prioritizing brevity and asking permission.',
      practicePrompt: 'Deliver the manager opener and practice staying completely silent while waiting for the prospect\'s response.'
    },
    {
      id: 'scripts-4',
      courseId: 'scripts',
      lessonNumber: 4,
      title: 'Discovery questions',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The three foundational diagnostic discovery questions designed to uncover clinic communication pain.',
      sections: [
        {
          heading: 'The Official Scripts',
          content: [
            'Question 1: "When a patient calls after hours and nobody answers, what usually happens?"',
            'Question 2: "Do most patients leave a voicemail, or do many simply move on?"',
            'Question 3: "Roughly how many missed calls would you say the practice receives in a typical week?"'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word Discovery Questions',
            text: '1. "When a patient calls after hours and nobody answers, what usually happens?"\n2. "Do most patients leave a voicemail, or do many simply move on?"\n3. "Roughly how many missed calls would you say the practice receives in a typical week?"'
          }
        },
        {
          heading: 'Script Execution Breakdown',
          content: [
            '• When to use them: Sequentially after the manager grants permission to ask a question.',
            '• Why they work: They prompt self-diagnosis. When the manager admits that most patients do not leave voicemails and move on, the need for CliniConnect becomes self-evident.',
            '• How to deliver naturally: Ask one question at a time. Never stack questions.',
            '• What to avoid: Do not challenge their answer. If they claim they miss zero calls, accept it gracefully and move to Question 1 (after hours).'
          ]
        }
      ],
      keyTakeaway: 'Ask the three discovery questions one by one; let the manager articulate the uncaptured call problem in their own words.',
      practicePrompt: 'Practice asking Question 2 and nodding silently while the prospect describes patient voicemail drop-off.'
    },
    {
      id: 'scripts-5',
      courseId: 'scripts',
      lessonNumber: 5,
      title: 'Product explanation',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The core product explanation script that frames CliniConnect as an operational front-desk safety net.',
      sections: [
        {
          heading: 'The Official Script',
          content: [
            '"That\'s the problem CliniConnect is being designed to solve. It\'s a patient-recovery system intended to follow up with missed calls and after-hours enquiries by SMS, help guide patients towards consultations, follow up with treatment leads and send appointment reminders. The aim is to support your front desk, not replace it."'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word Product Explanation Script',
            text: '"That\'s the problem CliniConnect is being designed to solve. It\'s a patient-recovery system intended to follow up with missed calls and after-hours enquiries by SMS, help guide patients towards consultations, follow up with treatment leads and send appointment reminders. The aim is to support your front desk, not replace it."'
          }
        },
        {
          heading: 'Script Execution Breakdown',
          content: [
            '• When to use it: Immediately after the manager acknowledges missed calls or voicemail abandonment.',
            '• Why it works: It directly bridges their pain into our solution and eliminates their fear of staff replacement in the final sentence.',
            '• How to deliver naturally: Emphasize "designed to solve" and "support your front desk, not replace it."',
            '• What to avoid: Do not dive into technical plumbing (APIs, webhooks, language models).'
          ]
        }
      ],
      keyTakeaway: 'The product explanation directly connects the uncovered problem to our SMS workflow while reassuring front-desk staff security.',
      practicePrompt: 'Deliver the product explanation script word-for-word until you can recite it effortlessly.'
    },
    {
      id: 'scripts-6',
      courseId: 'scripts',
      lessonNumber: 6,
      title: 'Closing a walkthrough',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The low-friction closing script that secures a 15-minute diagnostic walkthrough.',
      sections: [
        {
          heading: 'The Official Script',
          content: [
            '"I\'d love to show you the proposed workflow and get your feedback. Would you be open to a 15-minute walkthrough?"'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word Walkthrough Close',
            text: '"I\'d love to show you the proposed workflow and get your feedback. Would you be open to a 15-minute walkthrough?"'
          }
        },
        {
          heading: 'Script Execution Breakdown',
          content: [
            '• When to use it: Right after delivering the product explanation.',
            '• Why it works: Asking for "feedback" is non-threatening. It positions the manager as an industry consultant rather than a sales target.',
            '• How to deliver naturally: Keep your tone light and inviting.',
            '• What to avoid: Do not say "Can I book a demo to sell you this?"'
          ]
        },
        {
          heading: 'Example Dialogue',
          content: [
            'You: "That\'s the problem CliniConnect is being designed to solve... I\'d love to show you the proposed workflow and get your feedback. Would you be open to a 15-minute walkthrough?"',
            'Manager: "Well, we are pretty busy this week, but I suppose I could do 15 minutes on Thursday afternoon."'
          ]
        }
      ],
      keyTakeaway: 'The walkthrough close invites feedback in 15 minutes, lowering resistance and securing high conversion.',
      practicePrompt: 'Pair up or practice closing for a Thursday afternoon walkthrough.'
    },
    {
      id: 'scripts-7',
      courseId: 'scripts',
      lessonNumber: 7,
      title: 'Making scripts sound natural',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'Techniques for internalizing scripts so they sound like spontaneous, empathetic thoughts rather than wooden recitations.',
      sections: [
        {
          heading: 'From Memorization to Internalization',
          content: [
            'When actors learn Shakespeare, they first memorize the lines word-for-word, and then practice until they can speak them while pouring a cup of coffee.',
            'To make scripts sound conversational:',
            '1. Vary your inflection: Do not end every sentence with a rising pitch.',
            '2. Insert conversational fillers naturally (e.g. "Got it," "Makes total sense").',
            '3. Listen actively: If the manager mentions a specific detail ("We have three dentists here"), incorporate that into your next sentence.'
          ]
        }
      ],
      keyTakeaway: 'Internalize the script so deeply that you can focus 100% of your energy on listening to the manager.',
      practicePrompt: 'Read the manager opener script while intentionally smiling and pacing around your room.'
    },
    {
      id: 'scripts-8',
      courseId: 'scripts',
      lessonNumber: 8,
      title: 'Knowing when to pause',
      readTimeMinutes: 4,
      readiness: 'In development',
      summary: 'The strategic power of silence: why the pause is your most persuasive conversational tool.',
      sections: [
        {
          heading: 'Embracing the Tactical Silence',
          content: [
            'Untrained representatives rush to fill silence because anxiety makes seconds feel like hours.',
            'When you ask: "Would you be open to a 15-minute walkthrough?", STOP TALKING.',
            'The first person who speaks after a closing question dictates the outcome. If you speak first ("...or if you\'re too busy I can send an email..."), you surrender the close.',
            'Give the manager 3 to 5 full seconds to think. They will respect your confidence.'
          ]
        }
      ],
      keyTakeaway: 'Silence demonstrates authority. Never interrupt the prospect\'s thinking time after asking a closing question.',
      practicePrompt: 'Practice holding a 4-second count of silence after asking the walkthrough close.'
    },
    {
      id: 'scripts-9',
      courseId: 'scripts',
      lessonNumber: 9,
      title: 'A professional voicemail',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'What to say when leaving a concise, professional voicemail for a practice manager.',
      sections: [
        {
          heading: 'The 20-Second Voicemail Script',
          content: [
            '"Hi Sarah, this is [Name] calling regarding [Clinic Name]. I\'m reaching out to share a quick idea on how dental practices in [Area] are recovering missed patient calls and evening enquiries without adding front-desk hours. I will send you a brief note via email as well. If you\'d like to connect, my direct number is [Number]. Thanks Sarah, have a great day."'
          ],
          callout: {
            type: 'script',
            title: 'Word-For-Word Voicemail Script',
            text: '"Hi Sarah, this is [Name] calling regarding [Clinic Name]. I\'m reaching out to share a quick idea on how dental practices are recovering missed patient calls and evening enquiries without adding front-desk hours. I will send you a brief note via email as well. My direct number is [Number]. Have a great day."'
          }
        }
      ],
      keyTakeaway: 'Keep voicemails under 25 seconds, focus on patient recovery, and promise a follow-up email.',
      practicePrompt: 'Leave a practice voicemail on your own phone and listen to evaluate your pace and clarity.'
    },
    {
      id: 'scripts-10',
      courseId: 'scripts',
      lessonNumber: 10,
      title: 'Follow-up email language',
      readTimeMinutes: 5,
      readiness: 'In development',
      summary: 'The clean, respectful follow-up email template sent immediately after leaving a voicemail.',
      sections: [
        {
          heading: 'The Clean Follow-Up Email Template',
          content: [
            'Subject: Missed calls & evening enquiries at [Clinic Name]',
            'Hi [Manager Name],',
            'I just left a brief voicemail for you at the clinic.',
            'We are currently configuring a patient-recovery workflow called CliniConnect, designed to assist dental receptionists by following up with unanswered calls and after-hours enquiries via prompt SMS.',
            'I’d love to show you the proposed 5-step workflow and get your feedback as an experienced practice manager. Would you be open to a 15-minute walkthrough sometime this Thursday or Friday?',
            'Best regards,',
            '[Your Name] | CliniConnect'
          ]
        }
      ],
      keyTakeaway: 'The follow-up email is concise, professional, references the proposed workflow, and offers two specific days for the walkthrough.',
      practicePrompt: 'Draft the follow-up email customized for a clinic manager you researched earlier.'
    }
  ]
};

