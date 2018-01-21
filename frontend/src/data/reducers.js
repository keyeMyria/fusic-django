import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { wsUpdate } from './actions';

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
    [wsUpdate]: (state, action) => {
      const { modelAction, model, data } = action.payload;
      switch (model) {
        case 'backend.radio':
          const { songs, votes, ...radio } = data;
          return {
            radios: setEntity(state.radios, radio),
            songs: setEntities(state.songs, songs),
            votes: setEntities(state.votes, votes),
          };
        default:
          return state;
      }
    },
  },
  {
    radios: {},
    songs: {},
    votes: {},
  },
);

export default function rootReducer(state = {}, action) {
  const radios = radioReducer(state.radios, action);

  return {
    radios,
  };
}
