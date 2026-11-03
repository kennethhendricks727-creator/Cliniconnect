import React, { useState } from 'react';
import { Copy, Check, MessageSquare, Volume2, Pause } from 'lucide-react';

export const ScriptBreakdownGraphic: React.FC<{ scriptText?: string; title?: string }> = ({ 
  scriptText, 
  title = "Core Sales Script" 
}) => {
  const [copied, setCopied] = useState(false);

  const defaultScript = scriptText || `"Hi, thanks for taking my call. I'll keep it brief. I'm speaking with dental practices about how they handle missed calls and after-hours enquiries. Can I ask you a quick question?"`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(defaultScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="script-breakdown-card">
      <div className="script-top-bar">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="eyebrow">{title.toUpperCase()}</span>
        </div>
        <button className="copy-btn" onClick={copyToClipboard} title="Copy script to clipboard">
          {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Script</>}
        </button>
      </div>

      <blockquote className="script-quote">
        {defaultScript}
      </blockquote>

      <div className="script-cue-grid">
        <div className="cue-item">
          <Volume2 className="w-4 h-4 text-emerald-400" />
          <div>
            <strong>Vocal Delivery</strong>
            <p>Calm downward inflection; speak at 75% of your normal conversational speed.</p>
          </div>
        </div>
        <div className="cue-item">
          <Pause className="w-4 h-4 text-amber-400" />
          <div>
            <strong>Tactical Pause</strong>
            <p>Hold a full 3-second silence immediately after the final question mark.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

