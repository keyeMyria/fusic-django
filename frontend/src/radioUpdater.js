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

function apiCall(url) {
  console.log('GET:', url);
  return fetch(url).then(function(res) {
    if (res.status === 200) return res.json();
    else throw new Error(res.statusText);
  });
}

export default function radioUpdater(store) {
  // watch all radio subscriptions
  observeStore(store, state => state.subscriptions, function(subscriptions) {
    for (const id of Object.keys(subscriptions)) {
      apiCall(`api/radios/${id}`).then(res => {
        store.dispatch(updateRadio(res));
      });
    }
  });
}
