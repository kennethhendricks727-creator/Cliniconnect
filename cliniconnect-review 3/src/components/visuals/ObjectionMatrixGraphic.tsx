import React from 'react';

export const ObjectionMatrixGraphic: React.FC = () => {
  return (
    <div className="objection-matrix-card">
      <div className="objection-header">
        <span className="eyebrow">OBJECTION ANATOMY</span>
        <h3>The 4-Part Response Architecture</h3>
        <p>How to transform instinctive resistance into an honest, collaborative discussion.</p>
      </div>

      <div className="objection-flow-grid">
        <div className="flow-step">
          <div className="step-badge">1. What They Say</div>
          <h4>The Surface Objection</h4>
          <p>"We already have software" or "We're not interested."</p>
        </div>

        <div className="flow-step">
          <div className="step-badge amber">2. What They Mean</div>
          <h4>The Underlying Concern</h4>
          <p>Fear of disruption, skepticism of aggressive sales, or protection of desk staff.</p>
        </div>

        <div className="flow-step danger">
          <div className="step-badge red">3. What NOT To Say</div>
          <h4>The Defensive Trap</h4>
          <p>"Why not?" or arguing about their phone records. (Destroys rapport instantly).</p>
        </div>

        <div className="flow-step success">
          <div className="step-badge green">4. The Honest Pivot</div>
          <h4>Verified Operational Fact</h4>
          <p>Validate their reality, clarify our front-desk safety-net role, and offer a 15-minute walkthrough.</p>
        </div>
      </div>
    </div>
  );
};
