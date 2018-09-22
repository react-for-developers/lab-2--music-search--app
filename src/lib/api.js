export function searchArtists(query) {
  return fetch(`https://react-api-lab.herokuapp.com/search?query=${query}`)
    .then(response => response.json())
    .then(data => {
      return data.data;
    });
}

export function getArtist(artistId) {
  return fetch(`https://react-api-lab.herokuapp.com/artists/${artistId}`)
    .then(response => response.json())
    .then(data => {
      return data.data;
    });
}

export function getAlbum(albumId) {
  return fetch(`https://react-api-lab.herokuapp.com/albums/${albumId}`)
    .then(response => response.json())
    .then(data => {
      return data.data;
    });
}

export function getPlaylist(playlistId) {
  return fetch(`https://react-api-lab.herokuapp.com/playlists/${playlistId}`)
    .then(response => response.json())
    .then(data => {
      return data.data;
    });
}

export function addTrackToPlaylist(playlistId, track) {
  return fetch(`https://react-api-lab.herokuapp.com/playlists/${playlistId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      track
    })
  })
    .then(response => response.json())
    .then(data => {
      return data.data;
    });
}
