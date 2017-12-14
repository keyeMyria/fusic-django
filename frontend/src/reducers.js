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
          [id]: state.id + 1,
        };
      else
        return {
          ...state,
          [id]: 1,
        };
    },
    [unsubscribe]: (state, action) => {
      const id = action.payload;
      if (id in state)
        return {
          ...state,
          [id]: state.id + 1,
        };
      else {
        const { [id]: _, ...newState } = state;
        return newState;
      }
    },
  },
  {},
);

function setEntity(entityMap = {}, entity) {
  return {
    ...entityMap,
    [entity.id]: entity,
  };
}

function setEntities(entityMap = {}, entities) {
  const updatedEntities = {};
  for (const entity of entities) {
    updatedEntities[entity.id] = entity;
  }
  return {
    ...entityMap,
    ...updatedEntities,
  };
}

const radioReducer = handleActions(
  {
    [updateRadio]: (state, action) => {
      const { songs, votes, ...radio } = action.payload;

      return {
        radios: setEntity(state.radios, radio),
        songs: setEntities(state.songs, songs),
        votes: setEntities(state.votes, votes),
      };
    },
  },
  {
    radios: {},
    songs: {},
    votes: {},
  },
);

export default function rootReducer(state = {}, action) {
  const subscriptions = subscriptionReducer(state.subscriptions, action);
  const radios = radioReducer(state.radios, action);

  return {
    subscriptions,
    radios,
  };
}
