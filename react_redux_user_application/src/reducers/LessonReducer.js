const initialState = {
  allLesson: [],
  currentLesson: null,
  lastLesson: null
}
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_LESSON":
      newstate.allLesson = action.lesson
      newstate.currentLesson = null;
      return newstate;
    case "CURRENT_LESSON":
      newstate.currentLesson = action.lesson;
      newstate.lastLesson = action.lesson
      return newstate;
    case "CLEAR_LESSON":
      newstate.currentLesson = null;
      newstate.lastLesson = null;
      return newstate;
    default:
      return state;
  }
}
