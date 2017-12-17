export function apiCall(promise) {
  return promise.then(function(res) {
    if (res.status === 200) return res.json();
    else throw new Error(res.statusText);
  });
}

export function getRadio(id) {
  return apiCall(fetch(`api/radios/${id}`));
}

export function createVote(songId, radioId) {
  return apiCall(
    fetch(`api/radios/${radioId}/votes`, {
      method: 'POST',
    }),
  );
}
