import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const PatientJourneyGraphic: React.FC = () => {
  return (
    <div className="journey-comparison-card">
      <div className="journey-title-wrap">
        <span className="eyebrow">PATIENT EXPERIENCE COMPARISON</span>
        <h3>The 60-Second Conversion Window</h3>
        <p>Why rapid SMS capture prevents competitor churn in local dental healthcare.</p>
      </div>

      <div className="journey-columns">
        {/* Traditional path */}
        <div className="journey-col negative">
          <div className="journey-col-header">
            <XCircle className="w-5 h-5 text-rose-400" />
            <div>
              <h4>Traditional Clinic Journey</h4>
              <span>Without CliniConnect</span>
            </div>
          </div>
          <ol className="journey-steps">
            <li>
              <span className="step-tag">1</span>
              <div>
                <strong>Phone Rings Unanswered</strong>
                <p>Front desk is occupied with counter check-in; phone rings out.</p>
              </div>
            </li>
            <li>
              <span className="step-tag">2</span>
              <div>
                <strong>Voicemail Recording Plays</strong>
                <p>75% of callers hang up immediately without leaving audio.</p>
              </div>
            </li>
            <li>
              <span className="step-tag">3</span>
              <div>
                <strong>Competitor Dialed (15s Later)</strong>
                <p>Patient returns to Google Maps and calls the clinic 1 mile away.</p>
              </div>
            </li>
            <li className="final-step bad">
              <strong>Outcome: Lost Patient Opportunity</strong>
              <span>~$1,500+ lifetime clinical value gone forever.</span>
            </li>
          </ol>
        </div>

        {/* Proposed CliniConnect path */}
        <div className="journey-col positive">
          <div className="journey-col-header">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <h4>Proposed CliniConnect Journey</h4>
              <span>Event-Driven Patient Recovery</span>
            </div>
          </div>
          <ol className="journey-steps">
            <li>
              <span className="step-tag">1</span>
              <div>
                <strong>Phone Rings Unanswered</strong>
                <p>Telephony detects no-answer event; starts 60s debounce timer.</p>
              </div>
            </li>
            <li>
              <span className="step-tag">2</span>
              <div>
                <strong>Prompt Courteous SMS Received</strong>
                <p>Caller gets a text: "Sorry we missed you! How can we help today?"</p>
              </div>
            </li>
            <li>
              <span className="step-tag">3</span>
              <div>
                <strong>Immediate Conversational Triage</strong>
                <p>Patient texts back their need; search for competitors stops.</p>
              </div>
            </li>
            <li className="final-step good">
              <strong>Outcome: Qualified Consultation Queued</strong>
              <span>Receptionist confirms booking when desk is clear.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
