import React from 'react';
import { Stethoscope, Briefcase, UserRound } from 'lucide-react';

export const PracticeRolesGraphic: React.FC = () => {
  return (
    <div className="practice-roles-card">
      <div className="roles-header">
        <span className="eyebrow">PRACTICE ECOSYSTEM</span>
        <h3>Who Holds the Decision-Making Power?</h3>
        <p>Understanding the internal hierarchy and where your message resonates.</p>
      </div>

      <div className="roles-grid">
        <div className="role-card">
          <div className="role-icon-wrap owner">
            <Stethoscope className="w-5 h-5 text-emerald-400" />
          </div>
          <h4>Principal Dentist / Owner</h4>
          <span className="role-subtitle">Clinical Producer & Capital Owner</span>
          <ul className="role-points">
            <li>Treats patients in surgery 30–40 hrs/week</li>
            <li>Cannot answer sales calls during clinic hours</li>
            <li>Cares about: Profitability, reputation, debt service</li>
            <li>Makes final commercial quote approval</li>
          </ul>
        </div>

        <div className="role-card spotlight">
          <div className="role-badge">Primary Target</div>
          <div className="role-icon-wrap manager">
            <Briefcase className="w-5 h-5 text-emerald-300" />
          </div>
          <h4>Practice Manager (PM)</h4>
          <span className="role-subtitle">Operational Commander</span>
          <ul className="role-points">
            <li>Evaluates workflows, schedules, and systems</li>
            <li>Directly manages receptionists and phones</li>
            <li>Cares about: Staff sanity, appointment book fullness</li>
            <li><strong>Your walkthrough champion</strong></li>
          </ul>
        </div>

        <div className="role-card">
          <div className="role-icon-wrap receptionist">
            <UserRound className="w-5 h-5 text-emerald-500" />
          </div>
          <h4>Head Receptionist</h4>
          <span className="role-subtitle">Front-Desk Gatekeeper</span>
          <ul className="role-points">
            <li>Answers inbound calls & greets in-person patients</li>
            <li>Constantly multi-tasking under time stress</li>
            <li>Cares about: Workload relief, not feeling replaced</li>
            <li><strong>Treat as an ally, never trick them</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
