import Actions from 'actions';

export const initialState = [];

export default function(state = initialState, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case Actions.Types.FETCH_AD_EXPERIMENTS_COMPLETED:
      return action.payload;
    default:
      return state;
  }
}
