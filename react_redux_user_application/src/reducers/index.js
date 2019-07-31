import { combineReducers } from "redux";
import userData from './userReducer';
import courseData from "./courseReducer";
import lessonData from './lessonReducer';
import contentData from './contentReducer';
import contentTitle from './contentTitleReducer';
export default combineReducers({
  userData,
  courseData,
  lessonData,
  contentTitle,
  contentData
})