import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { subscribe, unsubscribe, updateRadio } from './actions';

const subscriptionReducer = handleActions(
  {
    [subscribe]: (state, action) => {
      const id = action.payload;
      if (id in state)
        return {
          ...state,
          [id]: state.id + 1
        };
      else
        return {
          ...state,
          [id]: 1
        };
    },
    [unsubscribe]: (state, action) => {
      const id = action.payload;
      if (id in state)
        return {
          ...state,
          [id]: state.id + 1
        };
      else {
        const { [id]: _, ...newState } = state;
        return newState;
      }
    }
  },
  {}
);

function setEntity(entityMap = {}, entity) {
  entityMap[entity.id] = entity;
}

const radioReducer = handleActions(
  {
    [updateRadio]: (state, action) => {
      const { songs, votes, ...radio } = action.payload;

      state = { ...state };
      setEntity(state.radios, radio);
      for (const song of songs) {
        setEntity(state.songs, song);
      }
      for (const vote of votes) {
        setEntity(state.votes, vote);
      }

      return state;
    }
  },
  {
    radios: {},
    songs: {},
    votes: {}
  }
);

export default function rootReducer(state = {}, action) {
  const subscriptions = subscriptionReducer(state.subscriptions, action);
  const radios = radioReducer(state.radios, action);

  return {
    subscriptions,
    radios
  };
}
