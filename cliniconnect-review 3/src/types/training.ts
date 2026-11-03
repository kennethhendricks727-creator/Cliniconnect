export type ReadinessStatus = 'Implemented and tested' | 'In development' | 'Planned' | 'Not supported';

export interface LessonContentData {
  id: string;
  courseId: string;
  lessonNumber: number;
  title: string;
  readTimeMinutes: number;
  readiness?: ReadinessStatus;
  summary: string;
  sections: {
    heading: string;
    content: string[];
    callout?: {
      type: 'takeaway' | 'caution' | 'script' | 'rule' | 'practice';
      title: string;
      text: string;
    };
  }[];
  keyTakeaway: string;
  practicePrompt: string;
  diagramType?: 'workflow' | 'journey' | 'practice-roles' | 'pricing' | 'readiness' | 'script-breakdown' | 'objection-matrix';
}

export interface CourseData {
  id: string;
  code: string;
  title: string;
  description: string;
  focusArea: string;
  totalLessons: number;
  lessons: LessonContentData[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  scenario?: string;
}

export interface QuizData {
  id: string;
  title: string;
  courseId?: string; // undefined if final certification exam
  description: string;
  passingScore: number; // default 80%
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timestamp: string;
  answers: number[];
}

export interface LearnerProfile {
  name: string;
  email: string;
  title: string;
  enrolledDate: string;
}

export interface CertificateData {
  certificateId: string;
  learnerName: string;
  issuedDate: string;
  score: number;
  verificationCode: string;
}

export interface AppStore {
  learner: LearnerProfile;
  completedLessonIds: string[];
  currentLessonId: string;
  lastCompletedLessonId?: string;
  lastCompletedAt?: string;
  quizAttempts: Record<string, QuizAttempt[]>; // courseId or 'final' -> attempts
  certificate?: CertificateData;
}

