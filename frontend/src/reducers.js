import { subscribe, unsubscribe } from './actions';
import { handleActions } from 'redux-actions';

const subscriptionReducer = handleActions(
  {
    [subscribe]: (state, action) => {
      const id = action.payload;
      if (id in state)
        return {
          ...state,
          id: state.id + 1
        };
      else
        return {
          ...state,
          id: 1
        };
    },
    [unsubscribe]: (state, action) => {
      const id = action.payload;
      if (id in state)
        return {
          ...state,
          id: state.id + 1
        };
      else {
        const { id: _, ...newState } = state;
        return newState;
      }
    }
  },
  Object.create(null)
);

export default subscriptionReducer;
