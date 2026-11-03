import React, { useState } from 'react';
import { 
  Play, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  ClipboardCheck, 
  RotateCcw, 
  UserCheck, 
  AlertCircle
} from 'lucide-react';
import { CourseData, LessonContentData, AppStore } from '../types/training';
import MetricCard from './MetricCard';

interface DashboardViewProps {
  store: AppStore;
  courses: CourseData[];
  allLessons: LessonContentData[];
  onOpenLesson: (id: string) => void;
  onOpenTraining: () => void;
  onOpenQuiz: (quizId: string) => void;
  onViewCertificate: () => void;
  onUpdateLearnerName: (name: string) => void;
  onResetProgress: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  store,
  courses,
  allLessons,
  onOpenLesson,
  onOpenTraining,
  onOpenQuiz,
  onViewCertificate,
  onUpdateLearnerName,
  onResetProgress
}) => {
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(store.learner.name);

  const totalLessons = allLessons.length; // 103
  const completedCount = store.completedLessonIds.length;
  const remainingCount = totalLessons - completedCount;
  const completionPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Next incomplete lesson
  const nextLesson = allLessons.find(l => !store.completedLessonIds.includes(l.id)) || allLessons[0];
  const nextLessonCourse = courses.find(c => c.id === nextLesson.courseId);

  // Latest completed lesson
  const lastLesson = store.lastCompletedLessonId 
    ? allLessons.find(l => l.id === store.lastCompletedLessonId)
    : null;

  // Quizzes stats
  const totalCourses = courses.length; // 9
  const passedQuizzesCount = courses.filter(c => {
    const attempts = store.quizAttempts[c.id] || [];
    return attempts.some(a => a.passed);
  }).length;

  const finalExamAttempts = store.quizAttempts['final'] || [];
  const finalExamPassed = finalExamAttempts.some(a => a.passed);

  const isFullyCertified = completionPercentage === 100 && passedQuizzesCount === totalCourses && finalExamPassed;

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateLearnerName(nameInput.trim());
      setEditingName(false);
    }
  };

  return (
    <section className="dashboard-container page animate-fade">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-text-col">
          <div className="welcome-eyebrow-row">
            <span className="eyebrow">YOUR PERSONAL LEARNING DESK</span>
            {isFullyCertified && (
              <span className="cert-pill-glow">
                <Award className="w-3.5 h-3.5" />
                ACCREDITED
              </span>
            )}
          </div>

          <div className="welcome-header-group">
            <h1>
              {isFullyCertified ? (
                <>Welcome back, {store.learner.name}. Certification complete.</>
              ) : (
                <>Build confidence, one honest conversation at a time.</>
              )}
            </h1>
            <p className="welcome-subtitle">
              Learn the proposed CliniConnect patient-recovery workflow, the operational reality of dental front desks, and the disciplined, ethical way to explain both.
            </p>
          </div>

          <div className="welcome-actions">
            {isFullyCertified ? (
              <button className="btn-primary-action cert" onClick={onViewCertificate}>
                <Award className="w-5 h-5" />
                <span>View Official Certificate</span>
              </button>
            ) : (
              <button className="btn-primary-action" onClick={() => onOpenLesson(nextLesson.id)}>
                <Play className="w-4 h-4 fill-current" />
                <span>Continue Learning</span>
              </button>
            )}

            <button className="btn-secondary-action" onClick={onOpenTraining}>
              <span>Browse Curriculum</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Orbit Completion Dial */}
        <div className="orbit-container">
          <div className="orbit-dial">
            <svg className="orbit-svg" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="orbit-track"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                className="orbit-indicator"
                style={{
                  strokeDasharray: 440,
                  strokeDashoffset: 440 - (440 * completionPercentage) / 100
                }}
              />
            </svg>
            <div className="orbit-center-text">
              <strong className="orbit-percentage">{completionPercentage}%</strong>
              <span className="orbit-label">programme<br />complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="metrics-grid">
        <MetricCard
          label="Lessons Completed"
          value={`${completedCount}`}
          change={`${completionPercentage}%`}
          detail={`of ${totalLessons} total lessons`}
          className="metric-card-styled"
        />

        <MetricCard
          label="Lessons Remaining"
          value={`${remainingCount}`}
          change={remainingCount === 0 ? 'Done' : 'Next'}
          detail={remainingCount === 0 ? 'All lessons completed!' : 'Keep up your daily rhythm'}
          className="metric-card-styled"
        />

        <MetricCard
          label="Course Quizzes Passed"
          value={`${passedQuizzesCount} / ${totalCourses}`}
          change={`${Math.round((passedQuizzesCount / totalCourses) * 100)}%`}
          detail="80% pass score required"
          className="metric-card-styled"
        />
      </div>

      {/* Split Panels: Current Learning Position & Readiness Standards */}
      <div className="split-dashboard-grid">
        {/* Current Learning Position */}
        <div className="panel-box next-position-panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow">CURRENT LEARNING POSITION</span>
              <h2>{remainingCount === 0 ? 'All Lessons Finished' : 'Continue Where You Left Off'}</h2>
            </div>
            <button className="text-link" onClick={onOpenTraining}>
              <span>All Courses</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {remainingCount === 0 ? (
            <div className="all-done-card">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <div>
                <h3>You have finished every lesson!</h3>
                <p>Complete any remaining course quizzes and take the Final Certification Examination below.</p>
              </div>
            </div>
          ) : (
            <div className="next-lesson-card">
              <span className="next-lesson-number">
                {String(allLessons.findIndex(l => l.id === nextLesson.id) + 1).padStart(2, '0')}
              </span>
              <div className="next-lesson-info">
                <span className="course-code-tag">{nextLessonCourse?.code} · {nextLessonCourse?.title}</span>
                <h3>{nextLesson.title}</h3>
                <p>{nextLesson.summary.slice(0, 110)}…</p>
              </div>
              <button
                className="btn-round-launch"
                onClick={() => onOpenLesson(nextLesson.id)}
                aria-label={`Open ${nextLesson.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Latest Completed Lesson */}
          {lastLesson && (
            <div className="latest-completed-strip">
              <div className="strip-label">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Latest completed lesson:</span>
              </div>
              <span className="strip-title">{lastLesson.title}</span>
              {store.lastCompletedAt && (
                <span className="strip-date">({store.lastCompletedAt})</span>
              )}
            </div>
          )}
        </div>

        {/* Product Readiness & Integrity */}
        <div className="panel-box readiness-panel">
          <span className="eyebrow">PRODUCT READINESS DISCIPLINE</span>
          <h2>Accuracy is part of the training.</h2>
          <p>
            CliniConnect is undergoing active configuration and testing. Representatives must only present proposed capabilities within these verified readiness tiers.
          </p>
          <div className="chips-grid">
            <span className="chip c0">Implemented and tested</span>
            <span className="chip c1">In development</span>
            <span className="chip c2">Planned</span>
            <span className="chip c3">Not supported</span>
          </div>
          <div className="readiness-rule-callout">
            <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Never promise guaranteed ROI, live client case studies, or automatic direct calendar bookings.</span>
          </div>
        </div>
      </div>

      {/* Course Progress Cards Grid */}
      <section className="panel-box curriculum-overview-panel">
        <div className="panel-head">
          <div>
            <span className="eyebrow">CURRICULUM BREAKDOWN</span>
            <h2>Course Progress & Assessment Status</h2>
          </div>
        </div>

        <div className="courses-table">
          {courses.map(course => {
            const courseLessons = course.lessons;
            const completedInCourse = courseLessons.filter(l => store.completedLessonIds.includes(l.id)).length;
            const coursePct = Math.round((completedInCourse / courseLessons.length) * 100);
            const attempts = store.quizAttempts[course.id] || [];
            const bestAttempt = attempts.length > 0 
              ? attempts.reduce((prev, curr) => curr.percentage > prev.percentage ? curr : prev) 
              : null;
            const quizPassed = bestAttempt && bestAttempt.passed;

            return (
              <div key={course.id} className="course-progress-row">
                <div className="course-col-code">
                  <span className="code-text">{course.code}</span>
                </div>

                <div className="course-col-main">
                  <div className="course-title-row">
                    <span className="course-title-text">{course.title}</span>
                    <span className="course-counts-text">
                      {completedInCourse} / {courseLessons.length} lessons ({coursePct}%)
                    </span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${coursePct}%` }}
                    />
                  </div>
                </div>

                <div className="course-col-quiz">
                  {quizPassed ? (
                    <span className="badge-quiz-passed">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Passed ({bestAttempt.percentage}%)
                    </span>
                  ) : attempts.length > 0 ? (
                    <button className="btn-quiz-retry" onClick={() => onOpenQuiz(course.id)}>
                      <span>Retry ({bestAttempt?.percentage}%)</span>
                    </button>
                  ) : (
                    <button className="btn-quiz-take" onClick={() => onOpenQuiz(course.id)}>
                      <ClipboardCheck className="w-3.5 h-3.5" />
                      <span>Take Quiz</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certification Progress & Final Examination Status */}
      <section className="panel-box certification-status-panel">
        <div className="panel-head">
          <div>
            <span className="eyebrow">CLINICONNECT CERTIFICATION</span>
            <h2>Final Accreditation Status</h2>
          </div>
          {isFullyCertified && (
            <button className="btn-view-cert" onClick={onViewCertificate}>
              <Award className="w-4 h-4" />
              <span>Open Certificate</span>
            </button>
          )}
        </div>

        <div className="cert-requirements-grid">
          <div className={`req-item ${completionPercentage === 100 ? 'done' : ''}`}>
            <div className="req-icon">
              {completionPercentage === 100 ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <div className="dot" />}
            </div>
            <div className="req-text">
              <strong>Complete 103 Lessons</strong>
              <span>{completedCount} of 103 finished</span>
            </div>
          </div>

          <div className={`req-item ${passedQuizzesCount === totalCourses ? 'done' : ''}`}>
            <div className="req-icon">
              {passedQuizzesCount === totalCourses ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <div className="dot" />}
            </div>
            <div className="req-text">
              <strong>Pass All 9 Course Assessments</strong>
              <span>{passedQuizzesCount} of 9 passed (80% minimum)</span>
            </div>
          </div>

          <div className={`req-item ${finalExamPassed ? 'done' : ''}`}>
            <div className="req-icon">
              {finalExamPassed ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <div className="dot" />}
            </div>
            <div className="req-text">
              <strong>Pass Final Certification Examination</strong>
              <span>{finalExamPassed ? 'Passed with distinction' : '20 comprehensive questions'}</span>
            </div>
          </div>
        </div>

        <div className="final-exam-cta-bar">
          <div className="cta-info">
            <h4>Ready to certify your expertise?</h4>
            <p>The Final Examination evaluates product knowledge, workflow accuracy, discovery scripts, and ethical selling.</p>
          </div>
          <button className="btn-start-final" onClick={() => onOpenQuiz('final')}>
            <Award className="w-4 h-4" />
            <span>{finalExamPassed ? 'Review Final Exam' : 'Launch Final Examination'}</span>
          </button>
        </div>
      </section>

      {/* Learner Profile Settings & Local Data Control */}
      <footer className="dashboard-footer-meta">
        <div className="learner-profile-card">
          <div className="learner-header">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Active Learner:</span>
            {editingName ? (
              <form onSubmit={handleSaveName} className="name-edit-form">
                <input
                  type="text"
                  value={nameInput}
                  onChange={e => setNameInput(e.target.value)}
                  className="input-name"
                  autoFocus
                />
                <button type="submit" className="btn-save-name">Save</button>
                <button type="button" onClick={() => setEditingName(false)} className="btn-cancel-name">Cancel</button>
              </form>
            ) : (
              <strong className="learner-name-display" onClick={() => setEditingName(true)} title="Click to edit name">
                {store.learner.name} (Edit)
              </strong>
            )}
          </div>
        </div>

        <button 
          className="btn-reset-data" 
          onClick={() => {
            if (window.confirm("Are you sure you want to reset all training progress and quiz attempts on this device?")) {
              onResetProgress();
            }
          }}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </footer>
    </section>
  );
};
