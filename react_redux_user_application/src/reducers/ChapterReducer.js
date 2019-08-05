const initialState = {
  allChapter: [],
  currentChapter: {},
  lastChapter: {}
}
export default (state = initialState, action) => {
  let newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ALL_CHAPTER":
      if (action.chapters.length > 0) {
        newstate.allChapter = action.chapters;
        newstate.currentChapter = action.chapters[0];
      } else {
        newstate.allChapter = [];
        newstate.currentChapter = null;
      }
      return newstate;
    case "CURRENT_CHAPTER":
      newstate.lastChapter = action.chapter;
      newstate.currentChapter = action.chapter;
      return newstate;
    case "CLEAR_CHAPTER":
      newstate.currentChapter = null;
      return newstate;
    default:
      return state;
  }
}
