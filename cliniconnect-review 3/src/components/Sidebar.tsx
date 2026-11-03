import React from 'react';
import { LayoutDashboard, BookOpen, ShieldCheck, Award } from 'lucide-react';

interface SidebarProps {
  currentScreen: 'dashboard' | 'training';
  onNavigate: (screen: 'dashboard' | 'training') => void;
  isOpen: boolean;
  onClose: () => void;
  certified?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentScreen,
  onNavigate,
  isOpen,
  onClose,
  certified
}) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          <span className="mark">C</span>
          <div className="brand-text">
            <span>CliniConnect</span>
            <b>Training OS</b>
          </div>
        </div>

        <nav>
          <button
            className={currentScreen === 'dashboard' ? 'active' : ''}
            onClick={() => {
              onNavigate('dashboard');
              onClose();
            }}
          >
            <LayoutDashboard className="nav-icon" />
            <span>Dashboard</span>
          </button>

          <button
            className={currentScreen === 'training' ? 'active' : ''}
            onClick={() => {
              onNavigate('training');
              onClose();
            }}
          >
            <BookOpen className="nav-icon" />
            <span>Training</span>
          </button>
        </nav>

        {certified && (
          <div className="certified-badge-pill">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Certified Representative</span>
          </div>
        )}

        <div className="side-note">
          <div className="side-note-header">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <strong>Private Learner Workspace</strong>
          </div>
          <small>Your progress is saved securely to your account</small>
        </div>
      </aside>

      {isOpen && <div className="scrim" onClick={onClose} aria-hidden="true" />}
    </>
  );
};

