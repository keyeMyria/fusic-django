import { updateRadio } from './actions';
import { getRadio } from './api';

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

function createUrl(url)
{
  const protocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  return protocol + window.location.host + '/' + url;
}

export default function radioUpdater(store) {
  const ws = new WebSocket(createUrl('api/ws'));
  ws.onmessage = msg => {
    console.log('message', msg);
  };
  ws.onopen = () => {
    ws.send('hello');
  };

  // watch all radio subscriptions
  observeStore(store, state => state.subscriptions, function(subscriptions) {
    for (const id of Object.keys(subscriptions)) {
      getRadio(id).then(res => {
        store.dispatch(updateRadio(res));
      });
    }
  });
}
