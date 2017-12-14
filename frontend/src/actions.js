// Import functions
import { createAction } from 'redux-actions';

export const subscribe = createAction('subscribe');
export const unsubscribe = createAction('unsubscribe');

export const upVote = createAction('upVote', function(songId, playlistId) {
  console.log(songId, playlistId);
});
export const updateRadio = createAction('updateRadio');
