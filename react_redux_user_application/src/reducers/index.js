import { combineReducers } from "redux";
import userData from './userReducer';
import courseData from "./courseReducer";
import lessonData from './lessonReducer';

export default combineReducers({
  userData,
  courseData,
  lessonData
})