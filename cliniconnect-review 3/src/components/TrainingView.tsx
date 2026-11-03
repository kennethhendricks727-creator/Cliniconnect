import React, { useState } from 'react';
import { CheckCircle2, Circle, ClipboardCheck, Award, ChevronDown, ChevronRight } from 'lucide-react';
import { CourseData, LessonContentData, AppStore } from '../types/training';
import { LessonContent } from './LessonContent';

interface TrainingViewProps {
  courses: CourseData[];
  allLessons: LessonContentData[];
  currentLesson: LessonContentData;
  store: AppStore;
  onSelectLesson: (id: string) => void;
  onToggleComplete: () => void;
  onOpenQuiz: (quizId: string) => void;
}

export const TrainingView: React.FC<TrainingViewProps> = ({
  courses,
  allLessons,
  currentLesson,
  store,
  onSelectLesson,
  onToggleComplete,
  onOpenQuiz
}) => {
  // Course open/collapsed state
  const [openCourseId, setOpenCourseId] = useState<string>(currentLesson.courseId);

  const currentCourse = courses.find(c => c.id === currentLesson.courseId) || courses[0];
  const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : undefined;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : undefined;
  const isLessonCompleted = store.completedLessonIds.includes(currentLesson.id);

  const handleToggleCourse = (courseId: string) => {
    setOpenCourseId(prev => prev === courseId ? '' : courseId);
  };

  return (
    <section className="training-layout">
      {/* Course Curriculum Navigation Sidebar */}
      <aside className="curriculum-sidebar">
        <div className="curriculum-header">
          <span className="eyebrow">ACADEMY CURRICULUM</span>
          <h2>Course Navigation</h2>
          <span className="sub-count">{store.completedLessonIds.length} of {allLessons.length} lessons finished</span>
        </div>

        <div className="curriculum-accordion">
          {courses.map(course => {
            const courseLessons = course.lessons;
            const completedCount = courseLessons.filter(l => store.completedLessonIds.includes(l.id)).length;
            const isOpen = openCourseId === course.id;
            const quizAttempts = store.quizAttempts[course.id] || [];
            const quizPassed = quizAttempts.some(a => a.passed);

            return (
              <div key={course.id} className={`course-nav-accordion-item ${isOpen ? 'open' : ''}`}>
                <div 
                  className="course-accordion-header"
                  onClick={() => handleToggleCourse(course.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="header-left">
                    <span className="course-code-tag">{course.code}</span>
                    <strong className="course-title-text">{course.title}</strong>
                  </div>
                  <div className="header-right">
                    <span className="course-count-tag">{completedCount}/{courseLessons.length}</span>
                    {isOpen ? <ChevronDown className="w-4 h-4 text-emerald-400" /> : <ChevronRight className="w-4 h-4 text-muted" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="course-lessons-dropdown animate-fade">
                    <div className="lessons-btn-list">
                      {courseLessons.map((l, idx) => {
                        const isSelected = l.id === currentLesson.id;
                        const isDone = store.completedLessonIds.includes(l.id);

                        return (
                          <button
                            key={l.id}
                            className={`lesson-nav-btn ${isSelected ? 'selected' : ''}`}
                            onClick={() => onSelectLesson(l.id)}
                          >
                            <span className="lesson-indicator">
                              {isDone ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Circle className="w-3.5 h-3.5 text-neutral-600" />
                              )}
                            </span>
                            <span className="lesson-btn-title">
                              {idx + 1}. {l.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="course-quiz-footer">
                      <button 
                        className={`btn-course-quiz-link ${quizPassed ? 'passed' : ''}`}
                        onClick={() => onOpenQuiz(course.id)}
                      >
                        <ClipboardCheck className="w-4 h-4" />
                        <span>{quizPassed ? 'Course Quiz Passed (Retake)' : 'Take Course Assessment'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Exam Launcher at bottom */}
        <div className="final-exam-nav-card">
          <button className="btn-final-exam-nav" onClick={() => onOpenQuiz('final')}>
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Final Certification Exam</span>
          </button>
        </div>
      </aside>

      {/* Main Lesson Content Pane */}
      <main className="lesson-main-pane">
        <LessonContent
          lesson={currentLesson}
          course={currentCourse}
          completed={isLessonCompleted}
          onToggleComplete={onToggleComplete}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
          onNavigateLesson={onSelectLesson}
        />
      </main>
    </section>
  );
};
