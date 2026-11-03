import React from 'react';
import { ShieldCheck, Clock, Calendar, Ban } from 'lucide-react';

export const ReadinessMatrixGraphic: React.FC = () => {
  const capabilities = [
    {
      feature: 'Missed-Call Inbound Detection (VoIP Webhook)',
      status: 'In development',
      notes: 'Telephony webhook prototypes configured in n8n staging workflows.'
    },
    {
      feature: 'Practice-Branded Outbound SMS Trigger',
      status: 'In development',
      notes: 'SMS dispatch mechanisms tested with simulated carrier numbers.'
    },
    {
      feature: 'Conversational Patient Triage (Intent & Timing)',
      status: 'In development',
      notes: 'Conversational prompt templates undergoing refinement.'
    },
    {
      feature: 'After-Hours Safety & Emergency Escalation',
      status: 'In development',
      notes: 'Standardized clinical disclaimers for 111/999 and hospital routing.'
    },
    {
      feature: 'Direct 2-Way PMS Calendar Write (Dentrix/Exact)',
      status: 'Planned',
      notes: 'Roadmapped for future integration; not currently supported.'
    },
    {
      feature: 'Unattended AI Autonomous Clinical Diagnosis',
      status: 'Not supported',
      notes: 'Strictly prohibited. System is purely administrative triage.'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Implemented and tested':
        return <span className="chip c0"><ShieldCheck className="w-3 h-3 inline mr-1" /> Implemented & Tested</span>;
      case 'In development':
        return <span className="chip c1"><Clock className="w-3 h-3 inline mr-1" /> In Development</span>;
      case 'Planned':
        return <span className="chip c2"><Calendar className="w-3 h-3 inline mr-1" /> Planned</span>;
      case 'Not supported':
      default:
        return <span className="chip c3"><Ban className="w-3 h-3 inline mr-1" /> Not Supported</span>;
    }
  };

  return (
    <div className="readiness-matrix-card">
      <div className="matrix-header">
        <span className="eyebrow">PRODUCT ACCURACY & INTEGRITY</span>
        <h3>Official Capability Readiness Matrix</h3>
        <p>Representatives must strictly abide by these verified readiness classifications.</p>
      </div>

      <div className="matrix-table-wrap">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Feature Capability</th>
              <th>Current Status</th>
              <th>Technical Reality</th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((row, idx) => (
              <tr key={idx}>
                <td className="font-medium text-emerald-100">{row.feature}</td>
                <td>{getStatusBadge(row.status)}</td>
                <td className="text-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

