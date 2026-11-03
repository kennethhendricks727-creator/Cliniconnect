import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Check, AlertCircle } from 'lucide-react';
import { QuizData, QuizAttempt } from '../types/training';

interface AssessmentModalProps {
  quiz: QuizData;
  attempts: QuizAttempt[];
  onComplete: (score: number, total: number, answers: number[]) => void;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  quiz,
  attempts,
  onComplete,
  onClose
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null);

  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = answeredCount === totalQuestions;

  const handleSelectOption = (questionIdx: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIdx]: optionIdx
    }));
  };

  const handleSubmit = () => {
    if (!isComplete || submitted) return;

    let correctCount = 0;
    const answersArray: number[] = [];

    quiz.questions.forEach((q, idx) => {
      const selected = selectedAnswers[idx];
      answersArray.push(selected);
      if (selected === q.correctIndex) {
        correctCount += 1;
      }
    });

    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const passed = percentage >= quiz.passingScore;

    const attempt: QuizAttempt = {
      score: correctCount,
      total: totalQuestions,
      percentage,
      passed,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      answers: answersArray
    };

    setLastAttempt(attempt);
    setSubmitted(true);
    onComplete(correctCount, totalQuestions, answersArray);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setLastAttempt(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="assessment-container page">
      <button className="back-link" onClick={onClose}>
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Training</span>
      </button>

      <div className="assessment-header">
        <span className="eyebrow">{quiz.courseId ? `COURSE ASSESSMENT` : `FINAL CERTIFICATION EXAMINATION`}</span>
        <h1>{quiz.title}</h1>
        <p className="assessment-desc">{quiz.description}</p>
        <div className="assessment-meta-bar">
          <span className="meta-badge">Pass Requirement: {quiz.passingScore}%</span>
          <span className="meta-badge">{totalQuestions} Questions</span>
          {attempts.length > 0 && (
            <span className="meta-badge history">
              {attempts.length} Previous Attempt{attempts.length > 1 ? 's' : ''} (Best: {Math.max(...attempts.map(a => a.percentage))}%)
            </span>
          )}
        </div>
      </div>

      {/* Submitted Result Banner */}
      {submitted && lastAttempt && (
        <div className={`result-card ${lastAttempt.passed ? 'passed' : 'failed'} animate-fade`}>
          <div className="result-icon-wrap">
            {lastAttempt.passed ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            ) : (
              <XCircle className="w-8 h-8 text-rose-400" />
            )}
          </div>
          <div className="result-content">
            <h2>{lastAttempt.passed ? 'Assessment Passed!' : 'Assessment Not Passed'}</h2>
            <p>
              You scored <strong>{lastAttempt.percentage}%</strong> ({lastAttempt.score} of {lastAttempt.total} questions correct).
              {lastAttempt.passed 
                ? ' Outstanding work! Your passing score has been officially recorded in your training transcript.' 
                : ` You need ${quiz.passingScore}% or higher to satisfy this assessment requirement. Review the explanations below and retake when ready.`}
            </p>
          </div>
          <div className="result-actions">
            {!lastAttempt.passed && (
              <button className="btn-retake" onClick={handleRetake}>
                <RotateCcw className="w-4 h-4" />
                <span>Retake Assessment</span>
              </button>
            )}
            <button className="btn-return" onClick={onClose}>
              <span>{lastAttempt.passed ? 'Continue Training' : 'Close and Study'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="questions-list">
        {quiz.questions.map((question, qIdx) => {
          const selectedOption = selectedAnswers[qIdx];
          const isCorrect = submitted && selectedOption === question.correctIndex;

          return (
            <fieldset key={question.id} className={`question-card ${submitted ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`}>
              <legend className="question-legend">
                <span className="q-number">Question {qIdx + 1} of {totalQuestions}</span>
                {question.scenario && (
                  <div className="scenario-callout">
                    <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Scenario:</strong> {question.scenario}</span>
                  </div>
                )}
                <div className="q-text">{question.question}</div>
              </legend>

              <div className="options-group">
                {question.options.map((option, optIdx) => {
                  const isChecked = selectedOption === optIdx;
                  let optionClass = 'option-label';
                  if (isChecked) optionClass += ' selected';
                  if (submitted) {
                    if (optIdx === question.correctIndex) optionClass += ' correct-answer';
                    else if (isChecked && optIdx !== question.correctIndex) optionClass += ' wrong-answer';
                  }

                  return (
                    <label key={optIdx} className={optionClass}>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        checked={isChecked}
                        disabled={submitted}
                        onChange={() => handleSelectOption(qIdx, optIdx)}
                      />
                      <span className="option-text">{option}</span>
                      {submitted && optIdx === question.correctIndex && (
                        <Check className="w-4 h-4 text-emerald-400 ml-auto shrink-0" />
                      )}
                    </label>
                  );
                })}
              </div>

              {/* Reveal explanation ONLY after submission */}
              {submitted && (
                <div className={`explanation-box ${isCorrect ? 'good' : 'caution'}`}>
                  <strong>{isCorrect ? 'Correct!' : 'Review:'}</strong> {question.explanation}
                </div>
              )}
            </fieldset>
          );
        })}
      </div>

      {/* Footer Submit Bar */}
      {!submitted && (
        <div className="assessment-submit-bar">
          <div className="progress-note">
            <span>{answeredCount} of {totalQuestions} questions answered</span>
            <div className="mini-progress-bar">
              <div 
                className="mini-bar-fill" 
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          <button
            className="btn-submit-assessment"
            disabled={!isComplete}
            onClick={handleSubmit}
          >
            <Check className="w-4 h-4" />
            <span>Submit Assessment</span>
          </button>
        </div>
      )}
    </section>
  );
};
