const initialState = {
  nanoDegree: [],
  freeCourse: [],
  currentCourse: null,
  lastCourse: null
}
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_COURSE":
      if (action.course.courseType === 'COURSE') {
        newstate.freeCourse.push(action.course);
      } else {
        newstate.nanoDegree.push(action.course);
      }
      state = newstate;
      return state;
    case "CURRENT_COURSE":
      newstate.currentCourse = action.course;
      newstate.lastCourse = action.course;
      state = newstate;
      return state;
    case "CLEAR_COURSES":
      newstate.freeCourse = [];
      newstate.nanoDegree = [];
      newstate.currentCourse = null;
      return newstate;
    default:
      return state;
  }
}
