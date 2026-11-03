import React, { useState } from 'react';
import { PhoneMissed, MessageSquare, UserCheck, MessageCircle, CalendarCheck, ShieldAlert, CheckCircle, Info } from 'lucide-react';

export const ProposedWorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: 'Inbound Missed Call',
      subtitle: 'Telephony Trigger',
      desc: 'An unanswered patient call or out-of-hours signal triggers a carrier-level webhook event after a 60-second debounce filter.',
      icon: PhoneMissed,
      readiness: 'In development'
    },
    {
      id: 2,
      title: 'Intended SMS Follow-up',
      subtitle: 'Immediate Outbound Text',
      desc: 'System dispatches a friendly practice-branded SMS: "Sorry we missed you! We are with patients at the desk. How can we help?"',
      icon: MessageSquare,
      readiness: 'In development'
    },
    {
      id: 3,
      title: 'Patient Responds',
      subtitle: 'Intent Capture',
      desc: 'The caller replies with their clinical issue (e.g. broken tooth, emergency pain, clear aligner enquiry) within the active SMS thread.',
      icon: UserCheck,
      readiness: 'In development'
    },
    {
      id: 4,
      title: 'Conversation Continues',
      subtitle: 'Conversational Triage',
      desc: 'The conversational agent gathers the patient\'s full name, existing patient status, and general preferred days and time windows.',
      icon: MessageCircle,
      readiness: 'In development'
    },
    {
      id: 5,
      title: 'Guided to Consultation',
      subtitle: 'Front-Desk Confirmation',
      desc: 'Enquiry details are packaged into a neat brief. The front-desk receptionist confirms the slot inside the practice software.',
      icon: CalendarCheck,
      readiness: 'In development'
    }
  ];

  return (
    <figure className="workflow-diagram-card">
      <div className="workflow-header">
        <div className="workflow-badge-group">
          <span className="badge-caution">
            <ShieldAlert className="w-3.5 h-3.5" />
            PROPOSED WORKFLOW · NOT A VERIFIED LIVE INTEGRATION
          </span>
          <span className="badge-chip">Readiness: In Development</span>
        </div>
        <p className="workflow-subtext">
          Interactive workflow architecture. Click any step to inspect the intended operational mechanics.
        </p>
      </div>

      <div className="workflow-track">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === step.id;
          return (
            <React.Fragment key={step.id}>
              <div 
                className={`workflow-node ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveStep(isSelected ? null : step.id)}
                role="button"
                tabIndex={0}
              >
                <div className="node-number">0{step.id}</div>
                <div className="node-icon-wrap">
                  <Icon className="node-icon" />
                </div>
                <h4 className="node-title">{step.title}</h4>
                <span className="node-subtitle">{step.subtitle}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="workflow-arrow" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#3b634b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {activeStep && (
        <div className="workflow-detail-box animate-fade">
          <div className="detail-head">
            <Info className="w-4 h-4 text-emerald-400" />
            <strong>Step 0{activeStep}: {steps.find(s => s.id === activeStep)?.title}</strong>
          </div>
          <p>{steps.find(s => s.id === activeStep)?.desc}</p>
        </div>
      )}

      <figcaption className="workflow-footer">
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          <strong>Operational boundary:</strong> CliniConnect queues qualified enquiries for human staff confirmation; it does not overwrite the clinic diary without front-desk review.
        </span>
      </figcaption>
    </figure>
  );
};

