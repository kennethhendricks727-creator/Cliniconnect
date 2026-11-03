import React, { useState } from 'react';
import { CheckCircle2, LockKeyhole, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface PasswordUpdateScreenProps { onComplete: () => void; }

export const PasswordUpdateScreen: React.FC<PasswordUpdateScreenProps> = ({ onComplete }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (password.length < 8) { setError('Use at least 8 characters for your new password.'); return; }
    if (password !== confirmPassword) { setError('The passwords do not match.'); return; }
    if (!supabase) return;
    setBusy(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (updateError) setError(updateError.message);
    else setSuccess(true);
  };

  return (
    <div className="auth-page"><div className="auth-shell">
      <div className="auth-brand"><span className="auth-brand-mark">C</span><div><strong>CliniConnect</strong><span>TRAINING OS</span></div></div>
      <section className="auth-card">
        <div className="auth-icon"><LockKeyhole size={23} /></div>
        <p className="auth-eyebrow">ACCOUNT SECURITY</p>
        <h1>{success ? 'Password updated' : 'Choose a new password'}</h1>
        <p className="auth-intro">{success ? 'Your password has been changed successfully.' : 'Create a new password for your CliniConnect representative account.'}</p>
        {!success ? <form className="auth-form" onSubmit={submit}>
          <label className="auth-field"><span>New password</span><div><LockKeyhole size={17} /><input type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={8} autoComplete="new-password" required placeholder="At least 8 characters" /></div></label>
          <label className="auth-field"><span>Confirm new password</span><div><LockKeyhole size={17} /><input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} minLength={8} autoComplete="new-password" required placeholder="Enter it again" /></div></label>
          {error && <div className="auth-message auth-error" role="alert">{error}</div>}
          <button className="auth-submit" type="submit" disabled={busy}>{busy ? 'Updating…' : 'Update password'} <ArrowRight size={17} /></button>
        </form> : <div className="auth-form"><div className="auth-message auth-success"><CheckCircle2 size={17} />Your new password is ready to use.</div><button className="auth-submit" onClick={onComplete}>Continue to training <ArrowRight size={17} /></button></div>}
      </section>
    </div></div>
  );
};
