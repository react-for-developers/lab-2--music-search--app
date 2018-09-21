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
