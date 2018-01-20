import { createAction, createActions } from 'redux-actions';
import { Bridge } from 'django-channels';

import { createVote } from './api';

export const upVote = createAction('upVote', function(songId, playlistId) {
  return createVote(songId, playlistId);
});

export const wsUpdate = createAction('wsUpdate', (stream, payload) => ({
  stream,
  payload,
}));

export const subscribe = createAction(
  'subscribe',
  radioId => ({
    action: 'sub',
    pk: radioId,
  }),
  () => ({ ws: { stream: 'radios' } }),
);

export const unsubscribe = createAction(
  'unsubscribe',
  radioId => ({
    action: 'unsub',
    pk: radioId,
  }),
  () => ({ ws: { stream: 'radios' } }),
);
