import React from 'react';
import { Award, Printer, ArrowLeft } from 'lucide-react';
import { CertificateData, LearnerProfile } from '../types/training';

interface CertificateViewProps {
  certificate: CertificateData;
  learner: LearnerProfile;
  onBack: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  certificate,
  learner,
  onBack
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="certificate-page page animate-fade">
      <div className="no-print mb-6">
        <button className="back-link" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>
      </div>

      <div className="certificate-wrapper">
        <div className="certificate-border">
          <div className="certificate-inner">
            {/* Header / Brand */}
            <div className="cert-header">
              <div className="cert-mark">C</div>
              <h2>CLINICONNECT TRAINING ACADEMY</h2>
              <span className="cert-tagline">OFFICIAL CERTIFICATION OF ACCREDITATION</span>
            </div>

            <p className="cert-proclamation">This is to officially certify that</p>

            <h1 className="cert-recipient-name">{learner.name}</h1>

            <p className="cert-statement">
              has completed the comprehensive 103-lesson curriculum, demonstrated verified mastery over the proposed
              CliniConnect patient-recovery workflow, passed all 9 course assessments with distinction, and achieved
              an accredited score of <strong>{certificate.score}%</strong> on the Final CliniConnect Certification Examination.
            </p>

            {/* Competency badges */}
            <div className="cert-competencies">
              <span>✓ Ethical Medical B2B Communication</span>
              <span>✓ Front-Desk Safety Net Architecture</span>
              <span>✓ Patient Recovery Workflow Mastery</span>
              <span>✓ Objection Handling & Transparency</span>
            </div>

            {/* Signatures & Verification Details */}
            <div className="cert-footer-row">
              <div className="cert-signature-block">
                <div className="signature-line">CliniConnect Academy Board</div>
                <span className="signature-title">Academic & Operational Standards Director</span>
              </div>

              <div className="cert-seal">
                <Award className="w-12 h-12 text-emerald-400" />
                <span>OFFICIALLY VERIFIED</span>
              </div>

              <div className="cert-meta-block">
                <div>
                  <strong>Issued Date:</strong> {certificate.issuedDate}
                </div>
                <div>
                  <strong>Credential ID:</strong> {certificate.certificateId}
                </div>
                <div>
                  <strong>Verification Code:</strong> {certificate.verificationCode}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cert-actions-bar no-print">
        <button className="btn-print-cert" onClick={handlePrint}>
          <Printer className="w-4 h-4" />
          <span>Print / Export PDF Certificate</span>
        </button>
      </div>
    </section>
  );
};
