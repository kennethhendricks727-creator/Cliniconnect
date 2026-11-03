import React, { useState } from 'react';
import { Activity, ArrowRight, BookOpen, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';
import { supabase } from '../../lib/supabase';

type AuthMode = 'signin' | 'signup' | 'reset';

export const AuthScreen: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const changeMode = (next: AuthMode) => {
    setMode(next);
    setError('');
    setNotice('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setError('');
    setNotice('');

    try {
      if (mode === 'signup') {
        const { data, error: authError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { full_name: name.trim() } },
        });
        if (authError) throw authError;
        if (!data.session) {
          setNotice('Your account has been created. Check your email for the confirmation link, then return here to sign in.');
        } else {
          setNotice('Account created successfully. Your personal training workspace is ready.');
        }
      } else if (mode === 'signin') {
        const { error: authError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (authError) throw authError;
      } else {
        const { error: authError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/`,
        });
        if (authError) throw authError;
        setNotice('If an account exists for that email, a password-reset link has been sent.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-glow auth-glow-one" />
      <div className="auth-glow auth-glow-two" />
      <div className="auth-shell">
        <div className="auth-brand">
          <span className="auth-brand-mark">C</span>
          <div><strong>CliniConnect</strong><span>TRAINING OS</span></div>
        </div>

        <section className="auth-card">
          <div className="auth-card-topline"><span><Activity size={14} /> REPRESENTATIVE LEARNING PORTAL</span><span className="auth-status-dot" /></div>
          <div className="auth-icon"><BookOpen size={23} /></div>
          <p className="auth-eyebrow">YOUR PROFESSIONAL DEVELOPMENT</p>
          <h1>{mode === 'signup' ? 'Create your account' : mode === 'reset' ? 'Reset your password' : 'Welcome back'}</h1>
          <p className="auth-intro">
            {mode === 'signup'
              ? 'Create your individual account to begin your CliniConnect representative training.'
              : mode === 'reset'
                ? 'Enter your account email and we will send you a password-reset link.'
                : 'Sign in to continue your training and pick up where you left off.'}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'signup' && (
              <label className="auth-field"><span>Full name</span><div><UserRound size={17} /><input value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" autoComplete="name" required minLength={2} /></div></label>
            )}
            <label className="auth-field"><span>Email address</span><div><Mail size={17} /><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required /></div></label>
            {mode !== 'reset' && (
              <label className="auth-field"><span>Password</span><div><LockKeyhole size={17} /><input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder={mode === 'signup' ? 'At least 8 characters' : 'Enter your password'} autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} minLength={8} required /><button type="button" className="auth-password-toggle" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>
            )}
            {error && <div className="auth-message auth-error" role="alert">{error}</div>}
            {notice && <div className="auth-message auth-success"><CheckCircle2 size={17} /> <span>{notice}</span></div>}
            <button className="auth-submit" type="submit" disabled={busy || !supabase}>
              {busy ? 'Please wait…' : mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Send reset link' : 'Sign in'}
              {!busy && <ArrowRight size={17} />}
            </button>
          </form>

          {mode === 'signin' && <button className="auth-text-link auth-forgot" onClick={() => changeMode('reset')}>Forgot your password?</button>}
          <div className="auth-switch">
            {mode === 'signup' ? <>Already have an account? <button onClick={() => changeMode('signin')}>Sign in</button></> : mode === 'reset' ? <>Remembered it? <button onClick={() => changeMode('signin')}>Back to sign in</button></> : <>New to CliniConnect Academy? <button onClick={() => changeMode('signup')}>Create an account</button></>}
          </div>
        </section>
        <p className="auth-footer"><span>SECURE INDIVIDUAL WORKSPACE</span><span>Each representative has private progress and assessments.</span></p>
      </div>
    </div>
  );
};
