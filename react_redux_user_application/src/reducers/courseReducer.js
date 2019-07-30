const initialState = {
  nanodegreeCourse: [],
  freeCourse: []
}
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_COURSE":
      if (action.course.courseType === 'COURSE') {
        let flag = 0;
        newstate.freeCourse.map(data => {
          if (data.courseId === action.course.courseId)
            flag = 1;
          return data;
        })
        if (flag === 0) newstate.freeCourse.push(action.course);
      } else {
        let flag = 0;
        newstate.nanpdegreeCourse.map(data => {
          if (data.courseId === action.course.courseId)
            flag = 1;
          return data;
        })
        if (flag === 0) newstate.nanpdegreeCourse.push(action.course);
      }
      state = newstate;
      return state;
    default:
      return state;
  }
}
/*
case "DELETE_COMPANY":
  newstate = newstate.filter(data => data.title !== action.title);
  state = newstate;
  return state;
case "ADD_COMPANY":
  newstate.push(action.response);
  state = newstate;
  return state;
case "UPDATE_COMPANY":
  newstate = newstate.filter(data => {
    if (data.title === action.response.title) return action.response;
    return data;
  });
  state = newstate;
  return state;
  */