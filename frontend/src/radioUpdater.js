import { updateRadio } from './actions';

/**
 * Subscribe to a specific slice of the state
 */
function observeStore(store, select, onChange) {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

export default function radioUpdater(store) {
  // watch all radio subscriptions
  observeStore(store, state => state.subscriptions, function(subscriptions) {
    for (const id of Object.keys(subscriptions)) {
      console.log('update', id);
      fetch(`api/radios/${id}`)
        .then(function(res) {
          if (res.status === 200) return res.json();
          else throw new Error(res.statusText);
        })
        .then(res => {
          store.dispatch(updateRadio(res));
        });
    }
  });
}
