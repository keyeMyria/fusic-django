import { createAction } from 'redux-actions';

import { createVote } from './api';

export const subscribe = createAction('subscribe');
export const unsubscribe = createAction('unsubscribe');

export const upVote = createAction('upVote', function(songId, playlistId) {
  return createVote(songId, playlistId);
});

export const updateRadio = createAction('updateRadio');
