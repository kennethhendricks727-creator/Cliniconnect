import React from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Clock, Sparkles, BookOpen } from 'lucide-react';
import { LessonContentData, CourseData } from '../types/training';
import { ProposedWorkflowDiagram } from './visuals/ProposedWorkflowDiagram';
import { PatientJourneyGraphic } from './visuals/PatientJourneyGraphic';
import { PracticeRolesGraphic } from './visuals/PracticeRolesGraphic';
import { PricingGraphic } from './visuals/PricingGraphic';
import { ReadinessMatrixGraphic } from './visuals/ReadinessMatrixGraphic';
import { ScriptBreakdownGraphic } from './visuals/ScriptBreakdownGraphic';
import { ObjectionMatrixGraphic } from './visuals/ObjectionMatrixGraphic';

interface LessonContentProps {
  lesson: LessonContentData;
  course: CourseData;
  completed: boolean;
  onToggleComplete: () => void;
  prevLesson?: LessonContentData;
  nextLesson?: LessonContentData;
  onNavigateLesson: (id: string) => void;
}

export const LessonContent: React.FC<LessonContentProps> = ({
  lesson,
  course,
  completed,
  onToggleComplete,
  prevLesson,
  nextLesson,
  onNavigateLesson
}) => {
  const getReadinessBadge = (status?: string) => {
    switch (status) {
      case 'Implemented and tested':
        return <span className="chip c0">Implemented & Tested</span>;
      case 'In development':
        return <span className="chip c1">In Development</span>;
      case 'Planned':
        return <span className="chip c2">Planned</span>;
      case 'Not supported':
        return <span className="chip c3">Not Supported</span>;
      default:
        return null;
    }
  };

  const renderDiagram = () => {
    switch (lesson.diagramType) {
      case 'workflow':
        return <ProposedWorkflowDiagram />;
      case 'journey':
        return <PatientJourneyGraphic />;
      case 'practice-roles':
        return <PracticeRolesGraphic />;
      case 'pricing':
        return <PricingGraphic />;
      case 'readiness':
        return <ReadinessMatrixGraphic />;
      case 'script-breakdown':
        return <ScriptBreakdownGraphic title={lesson.title} />;
      case 'objection-matrix':
        return <ObjectionMatrixGraphic />;
      default:
        return null;
    }
  };

  return (
    <article className="lesson-container">
      {/* Top Meta Header */}
      <div className="lesson-top-meta">
        <div className="meta-left">
          <span className="course-tag">
            {course.code} · LESSON {String(lesson.lessonNumber).padStart(2, '0')} OF {course.totalLessons}
          </span>
          <span className="read-time">
            <Clock className="w-3.5 h-3.5" />
            {lesson.readTimeMinutes} min read
          </span>
          {lesson.readiness && getReadinessBadge(lesson.readiness)}
        </div>
        <div className="meta-right">
          <span className={`status-tag ${completed ? 'done' : ''}`}>
            {completed ? <><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Completed</> : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <h1 className="lesson-heading">{lesson.title}</h1>

      {/* Lede Summary */}
      <p className="lesson-summary-lede">{lesson.summary}</p>

      {/* Diagram (if present) */}
      {renderDiagram()}

      {/* Lesson Body Content */}
      <div className="lesson-body-content">
        {lesson.sections.map((section, idx) => (
          <div key={idx} className="lesson-section">
            <h2 className="section-title">{section.heading}</h2>
            {section.content.map((p, pIdx) => (
              <p key={pIdx} className="section-paragraph">{p}</p>
            ))}

            {section.callout && (
              <aside className={`callout-box ${section.callout.type}`}>
                <div className="callout-header">
                  <span className="callout-badge">{section.callout.title}</span>
                </div>
                <p className="callout-text">{section.callout.text}</p>
              </aside>
            )}
          </div>
        ))}

        {/* Key Takeaways */}
        <aside className="key-takeaways-card">
          <div className="takeaway-head">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>KEY TAKEAWAY</span>
          </div>
          <p className="takeaway-body">{lesson.keyTakeaway}</p>
        </aside>

        {/* Practical Application Prompt */}
        <aside className="practice-prompt-card">
          <div className="practice-head">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>PRACTICAL EXERCISE</span>
          </div>
          <p className="practice-body">{lesson.practicePrompt}</p>
        </aside>
      </div>

      {/* Bottom Navigation & Action Bar */}
      <div className="lesson-action-bar">
        <button
          className="btn-nav prev"
          disabled={!prevLesson}
          onClick={() => prevLesson && onNavigateLesson(prevLesson.id)}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Lesson</span>
        </button>

        <button
          className={`btn-complete-toggle ${completed ? 'is-complete' : 'mark-complete'}`}
          onClick={onToggleComplete}
        >
          <Check className="w-4 h-4" />
          <span>{completed ? 'Lesson Completed (Click to Undo)' : 'Mark Lesson Complete'}</span>
        </button>

        <button
          className="btn-nav next"
          disabled={!nextLesson}
          onClick={() => nextLesson && onNavigateLesson(nextLesson.id)}
        >
          <span>Next Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
