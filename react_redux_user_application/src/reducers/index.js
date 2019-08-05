import { combineReducers } from 'redux';
import user from './UserReducer';
import course from './CourseReducer';
import lesson from './LessonReducer';
import chapter from './ChapterReducer';
import content from './ContentReducer';
import knowledge from './PostReducer';
export default combineReducers({
  user,
  course,
  lesson,
  chapter,
  content,
  knowledge
});
