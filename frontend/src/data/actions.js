import { createAction, createActions } from 'redux-actions';
import { WebSocketBridge } from 'django-channels';

import { createVote } from './api';

export const upVote = createAction('upVote', function(songId, playlistId) {
  return createVote(songId, playlistId);
});

export const updateRadio = createAction('updateRadio');

// make a single persistent websocket connection
const ws = new WebSocketBridge();
ws.connect('/api/ws', undefined, { debug: true });
ws.listen(function(action, stream) {
  console.log(action, stream);
});

ws.demultiplex('radios', function(payload) {
  const { action, data, model, pk } = payload;

  // TODO: dispatch updateRadio
});

// the subscriptions we want to have
const subscriptions = {};

ws.socket.onopen = () => {
  console.log('resend subscriptions');
  for (const id in subscriptions) {
    sendSubscribe(id);
  }
};

export function subscribe(radioId) {
  if (radioId in subscriptions) subscriptions[radioId]++;
  else {
    subscriptions[radioId] = 1;

    if (ws.socket.readyState === ws.socket.OPEN) sendSubscribe(radioId);
  }
}

export function unsubscribe(radioId) {
  if (!(radioId in subscriptions))
    throw new Error(`unsubscribe unknown subscription: ${radioId}`);
  subscriptions[radioId]--;
  if (subscriptions[radioId] === 0) sendUnsubscribe(radioId);
}

function sendSubscribe(radioId) {
  console.log('subscribe to', radioId);
  ws.stream('radios').send({
    action: 'sub',
    pk: radioId,
  });
}

function sendUnsubscribe(radioId) {
  console.log('subscribe to', radioId);
  ws.stream('radios').send({
    action: 'unsub',
    pk: radioId,
  });
}
