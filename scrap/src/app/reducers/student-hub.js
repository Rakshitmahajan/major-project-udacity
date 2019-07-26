import Actions from 'actions';

const initialState = {
  lobbyAsyncFulfilled: false,
  lobby: {}
};

export default function(state = initialState, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case Actions.Types.FETCH_STUDENT_HUB_LOBBY_COMPLETED:
      state = {
        ...state,
        lobby: action.payload,
        lobbyAsyncFulfilled: true
      };
      break;
    case Actions.Types.FETCH_STUDENT_HUB_UNREADS_COMPLETED:
      state = {
        ...state,
        lobby: {
          ...state.lobby,
          unreads: action.payload
        }
      };
      break;
    case Actions.Types.FETCH_MENTOR_CONVERSATIONS_COMPLETE:
      state = {
        ...state,
        lobby: {
          ...state.lobby,
          mentor_conversations: action.payload
        }
      };
      break;
  }

  return state;
}
