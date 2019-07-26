import Actions from 'actions';

export default function(state = {}, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case Actions.Types.FETCH_CAREER_SERVICES_COMPLETED:
      state = {
        ...state,
        ..._.keyBy(action.payload.services, 'meta.course_key')
      };
      return state;
      break;
    case Actions.Types.FETCH_COURSE_NAME_COMPLETED:
      const {title, key} = action.payload;
      state = {
        ...state,
        [key]: _.assign({}, state[key], {name: title})
      };
      return state;
      break;
    default:
      return state;
  }
}
