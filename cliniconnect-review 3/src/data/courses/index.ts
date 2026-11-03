import { course1Foundations } from './course1';
import { course2Workflow } from './course2';
import { course3Product } from './course3';
import { course4Dental } from './course4';
import { course5Pricing } from './course5';
import { course6Calling } from './course6';
import { course7Scripts } from './course7';
import { course8Objections } from './course8';
import { course9Professionalism } from './course9';
import { CourseData, LessonContentData } from '../../types/training';

export const allCourses: CourseData[] = [
  course1Foundations,
  course2Workflow,
  course3Product,
  course4Dental,
  course5Pricing,
  course6Calling,
  course7Scripts,
  course8Objections,
  course9Professionalism
];

export const allLessonsFlat: LessonContentData[] = allCourses.flatMap(c => c.lessons);

export const courseMap: Record<string, CourseData> = allCourses.reduce((acc, c) => {
  acc[c.id] = c;
  return acc;
}, {} as Record<string, CourseData>);

export const lessonMap: Record<string, LessonContentData> = allLessonsFlat.reduce((acc, l) => {
  acc[l.id] = l;
  return acc;
}, {} as Record<string, LessonContentData>);

