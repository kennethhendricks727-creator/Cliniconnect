import React from 'react';
import { Menu, Award, LogOut, Cloud, CloudCheck, AlertCircle } from 'lucide-react';
import { LearnerProfile } from '../types/training';

interface HeaderProps {
  onToggleMenu: () => void;
  learner: LearnerProfile;
  isCertified: boolean;
  onSignOut: () => void;
  saveStatus: 'saved' | 'saving' | 'error';
}

export const Header: React.FC<HeaderProps> = ({ onToggleMenu, learner, isCertified, onSignOut, saveStatus }) => {
  const getInitials = (name: string) => name.split(' ').map(part => part[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'LR';

  return (
    <header className="app-header">
      <button className="menu-btn" aria-label="Toggle navigation menu" onClick={onToggleMenu}><Menu className="w-5 h-5" /></button>
      <div className="header-meta"><span className="eyebrow">CLINICONNECT ACADEMY · REPRESENTATIVE PORTAL</span></div>
      <div className="header-right">
        <span className={`cloud-save-status ${saveStatus}`} title={saveStatus === 'saved' ? 'Your progress is saved to your account' : saveStatus === 'saving' ? 'Saving your progress' : 'Progress could not be saved'}>
          {saveStatus === 'saved' ? <CloudCheck size={14} /> : saveStatus === 'saving' ? <Cloud size={14} /> : <AlertCircle size={14} />}
          <span>{saveStatus === 'saved' ? 'Saved' : saveStatus === 'saving' ? 'Saving' : 'Save issue'}</span>
        </span>
        {isCertified && <span className="cert-pill-small"><Award className="w-3.5 h-3.5 text-emerald-400" />Certified</span>}
        <div className="profile-badge" title={`${learner.name} (${learner.email})`}>{getInitials(learner.name)}</div>
        <button className="signout-btn" onClick={onSignOut} title="Sign out"><LogOut size={16} /><span>Sign out</span></button>
      </div>
    </header>
  );
};
