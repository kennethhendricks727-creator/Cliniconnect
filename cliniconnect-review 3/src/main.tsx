import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import type { Session, User } from '@supabase/supabase-js';
import { allCourses, allLessonsFlat, lessonMap } from './data/courses';
import { quizzes } from './data/quizzes';
import { AppStore, QuizAttempt, CertificateData } from './types/training';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { TrainingView } from './components/TrainingView';
import { AssessmentModal } from './components/AssessmentModal';
import { CertificateView } from './components/CertificateView';
import { AuthScreen } from './components/auth/AuthScreen';
import { PasswordUpdateScreen } from './components/auth/PasswordUpdateScreen';
import { isSupabaseConfigured, supabase } from './lib/supabase';
import './styles.css';

function createInitialStore(user: User): AppStore {
  const displayName = String(user.user_metadata?.full_name || '').trim() || user.email?.split('@')[0] || 'Learner';
  return {
    learner: {
      name: displayName,
      email: user.email || '',
      title: 'CliniConnect Representative',
      enrolledDate: new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    },
    completedLessonIds: [],
    currentLessonId: allLessonsFlat[0].id,
    quizAttempts: {},
  };
}

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [passwordRecovery, setPasswordRecovery] = useState(false);
  const [store, setStore] = useState<AppStore | null>(null);
  const [storeLoading, setStoreLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved');
  const [screen, setScreen] = useState<'dashboard' | 'training' | 'certificate'>('dashboard');
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      return;
    }
    let mounted = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return;
      if (error) console.error('Unable to restore session:', error);
      setSession(data.session);
      setAuthLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, nextSession) => {
      if (event === 'PASSWORD_RECOVERY') setPasswordRecovery(true);
      setSession(nextSession);
      if (!nextSession) {
        setStore(null);
        setScreen('dashboard');
        setActiveQuizId(null);
      }
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session?.user || !supabase) {
      setStore(null);
      setStoreLoading(false);
      return;
    }
    let cancelled = false;
    const user = session.user;
    setStoreLoading(true);
    setStore(null);
    (async () => {
      const { data, error } = await supabase!
        .from('learner_progress')
        .select('data')
        .eq('user_id', user.id)
        .maybeSingle();

      if (cancelled) return;
      if (error) {
        console.error('Unable to load learner progress:', error);
        setSaveStatus('error');
        setStore(createInitialStore(user));
      } else if (data?.data) {
        const saved = data.data as AppStore;
        setStore({
          ...createInitialStore(user),
          ...saved,
          learner: {
            ...createInitialStore(user).learner,
            ...(saved.learner || {}),
            email: user.email || saved.learner?.email || '',
          },
        });
      } else {
        setStore(createInitialStore(user));
      }
      setStoreLoading(false);
    })();
    return () => { cancelled = true; };
  }, [session?.user?.id]);

  useEffect(() => {
    if (!session?.user || !store || storeLoading || !supabase) return;
    setSaveStatus('saving');
    const timeout = window.setTimeout(async () => {
      const { error } = await supabase!
        .from('learner_progress')
        .upsert({ user_id: session.user.id, data: store, updated_at: new Date().toISOString() }, { onConflict: 'user_id' });
      setSaveStatus(error ? 'error' : 'saved');
      if (error) console.error('Unable to save learner progress:', error);
    }, 450);
    return () => window.clearTimeout(timeout);
  }, [store, session?.user?.id, storeLoading]);

  const currentLesson = store ? (lessonMap[store.currentLessonId] || allLessonsFlat[0]) : allLessonsFlat[0];
  const is100PctComplete = Boolean(store && store.completedLessonIds.length === allLessonsFlat.length);
  const allQuizzesPassed = Boolean(store && allCourses.every(c => (store.quizAttempts[c.id] || []).some(a => a.passed)));
  const finalExamPassed = Boolean(store && (store.quizAttempts['final'] || []).some(a => a.passed));
  const isFullyCertified = is100PctComplete && allQuizzesPassed && finalExamPassed;

  useEffect(() => {
    if (!store || !isFullyCertified || store.certificate) return;
    const bestFinal = (store.quizAttempts['final'] || []).reduce(
      (prev, curr) => curr.percentage > prev.percentage ? curr : prev,
      { percentage: 0 } as QuizAttempt
    );
    const newCert: CertificateData = {
      certificateId: `CC-OS-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
      learnerName: store.learner.name,
      issuedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      score: bestFinal.percentage,
      verificationCode: crypto.randomUUID().replace(/-/g, '').toUpperCase(),
    };
    setStore(current => current ? ({ ...current, certificate: newCert }) : current);
  }, [isFullyCertified, store?.certificate, store?.learner.name, store?.quizAttempts]);

  const handleSelectLesson = (lessonId: string) => {
    setStore(s => s ? ({ ...s, currentLessonId: lessonId }) : s);
    setScreen('training');
    setActiveQuizId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = () => {
    if (!store) return;
    const isCompleted = store.completedLessonIds.includes(currentLesson.id);
    const now = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    setStore(s => {
      if (!s) return s;
      const nextCompleted = isCompleted
        ? s.completedLessonIds.filter(id => id !== currentLesson.id)
        : [...s.completedLessonIds, currentLesson.id];
      return {
        ...s,
        completedLessonIds: nextCompleted,
        lastCompletedLessonId: !isCompleted ? currentLesson.id : s.lastCompletedLessonId,
        lastCompletedAt: !isCompleted ? now : s.lastCompletedAt,
      };
    });
  };

  const handleOpenQuiz = (quizId: string) => {
    setActiveQuizId(quizId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRecordQuizAttempt = (score: number, total: number, answers: number[]) => {
    if (!activeQuizId) return;
    const percentage = Math.round((score / total) * 100);
    const attempt: QuizAttempt = {
      score, total, percentage, passed: percentage >= 80,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      answers,
    };
    setStore(s => s ? ({
      ...s,
      quizAttempts: { ...s.quizAttempts, [activeQuizId]: [...(s.quizAttempts[activeQuizId] || []), attempt] },
    }) : s);
  };

  const handleUpdateLearnerName = async (name: string) => {
    const cleanedName = name.trim();
    if (!cleanedName || !supabase) return;
    const { error } = await supabase.auth.updateUser({ data: { full_name: cleanedName } });
    if (error) {
      console.error('Unable to update profile name:', error);
      return;
    }
    setStore(s => s ? ({
      ...s,
      learner: { ...s.learner, name: cleanedName },
      certificate: s.certificate ? { ...s.certificate, learnerName: cleanedName } : undefined,
    }) : s);
  };

  const handleResetProgress = async () => {
    if (!store || !session?.user || !supabase) return;
    const resetStore = createInitialStore(session.user);
    setStore(resetStore);
    setScreen('dashboard');
    setActiveQuizId(null);
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  if (!isSupabaseConfigured) {
    return <div className="setup-screen"><div className="setup-card"><span className="auth-brand-mark">C</span><h1>Connect your training portal</h1><p>Supabase is not configured yet. Add your project URL and publishable anon key to the local <code>.env</code> file, then restart the app.</p><p className="setup-code">VITE_SUPABASE_URL<br />VITE_SUPABASE_ANON_KEY</p></div></div>;
  }

  if (authLoading) return <div className="app-loading"><div className="loading-mark">C</div><span>Loading your secure workspace…</span></div>;
  if (!session) return <AuthScreen />;
  if (passwordRecovery) return <PasswordUpdateScreen onComplete={() => setPasswordRecovery(false)} />;
  if (storeLoading || !store) return <div className="app-loading"><div className="loading-mark">C</div><span>Loading your personal training progress…</span></div>;

  return (
    <div className="app">
      <Sidebar
        currentScreen={screen === 'dashboard' ? 'dashboard' : 'training'}
        onNavigate={s => { setScreen(s); setActiveQuizId(null); }}
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        certified={isFullyCertified}
      />
      <main className="app-main">
        <Header
          onToggleMenu={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          learner={store.learner}
          isCertified={isFullyCertified}
          onSignOut={handleSignOut}
          saveStatus={saveStatus}
        />
        {activeQuizId ? (
          <AssessmentModal quiz={quizzes[activeQuizId] || quizzes['final']} attempts={store.quizAttempts[activeQuizId] || []} onComplete={handleRecordQuizAttempt} onClose={() => setActiveQuizId(null)} />
        ) : screen === 'certificate' && store.certificate ? (
          <CertificateView certificate={store.certificate} learner={store.learner} onBack={() => setScreen('dashboard')} />
        ) : screen === 'dashboard' ? (
          <DashboardView store={store} courses={allCourses} allLessons={allLessonsFlat} onOpenLesson={handleSelectLesson} onOpenTraining={() => setScreen('training')} onOpenQuiz={handleOpenQuiz} onViewCertificate={() => setScreen('certificate')} onUpdateLearnerName={handleUpdateLearnerName} onResetProgress={handleResetProgress} />
        ) : (
          <TrainingView courses={allCourses} allLessons={allLessonsFlat} currentLesson={currentLesson} store={store} onSelectLesson={handleSelectLesson} onToggleComplete={handleToggleComplete} onOpenQuiz={handleOpenQuiz} />
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
