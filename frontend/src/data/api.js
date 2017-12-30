import Cookies from 'js-cookie';

export function apiCall(input, init = {}) {
  const { headers = {}, ...initCopy } = init;
  headers['X-CSRFToken'] = Cookies.get('csrftoken');
  return fetch(input, {
    ...initCopy,
    headers: headers,
    credentials: 'same-origin',
  });
}

export function getRadio(id) {
  return apiCall(`api/radios/${id}`).then(function(res) {
    if (res.status === 200) return res.json();
    else throw new Error(res.statusText);
  });
}

export function createVote(songId, radioId) {
  return apiCall(`api/radios/${radioId}/upvote/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      song_id: songId,
    }),
  }).then(function(res) {
    if (res.status === 201) return;
    else throw new Error(res.statusText);
  });
}
