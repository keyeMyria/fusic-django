import { createAction } from 'redux-actions';

import { createVote } from './api';

export const upVote = createAction('upVote', function(songId, playlistId) {
  return createVote(songId, playlistId);
});

export const wsUpdate = createAction('wsUpdate');

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
