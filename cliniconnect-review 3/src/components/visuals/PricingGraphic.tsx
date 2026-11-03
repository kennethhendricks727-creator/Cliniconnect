import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export const PricingGraphic: React.FC = () => {
  return (
    <div className="pricing-visual-card">
      <div className="pricing-header">
        <span className="eyebrow">COMMERCIAL MODEL</span>
        <h3>Proposed Investment Framework</h3>
        <p className="disclaimer-text">
          <AlertCircle className="w-4 h-4 text-amber-400 inline mr-1 shrink-0" />
          All pricing is <strong>proposed and subject to internal confirmation</strong> before final contractual quotes. Never guarantee ROI.
        </p>
      </div>

      <div className="pricing-tiers-grid">
        <div className="pricing-box setup">
          <div className="tier-tag">One-Time Investment</div>
          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">2,500</span>
            <span className="term">setup</span>
          </div>
          <h4>Telephony Implementation & Onboarding</h4>
          <ul className="tier-checklist">
            <li><Check className="w-4 h-4 text-emerald-400" /> Carrier PBX/VoIP webhook configuration</li>
            <li><Check className="w-4 h-4 text-emerald-400" /> A2P 10DLC brand & campaign regulatory registration</li>
            <li><Check className="w-4 h-4 text-emerald-400" /> Practice-branded SMS conversational prompts</li>
            <li><Check className="w-4 h-4 text-emerald-400" /> Practice manager & receptionist training session</li>
          </ul>
        </div>

        <div className="pricing-box monthly spotlight">
          <div className="tier-tag green">Ongoing Service</div>
          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">800</span>
            <span className="term">/month</span>
          </div>
          <h4>Software License & Maintenance</h4>
          <ul className="tier-checklist">
            <li><Check className="w-4 h-4 text-emerald-400" /> 24/7 Missed-call & after-hours automated triage</li>
            <li><Check className="w-4 h-4 text-emerald-400" /> High-throughput SMS gateway delivery</li>
            <li><Check className="w-4 h-4 text-emerald-400" /> Centralized 2-Way Staff Web Inbox</li>
            <li><Check className="w-4 h-4 text-emerald-400" /> Continuous security patching & technical support</li>
          </ul>
        </div>
      </div>

      <div className="roi-comparison-box">
        <h4>Responsible Value Perspective</h4>
        <p>
          Hiring an additional part-time receptionist costs upwards of <strong>$2,500/month</strong> in wages and benefits.
          Meanwhile, a single recovered private treatment plan (crown, implant, aligner) generates <strong>$2,000 to $5,000</strong>.
          Recovering even one patient per month can completely offset the software investment.
        </p>
      </div>
    </div>
  );
};
