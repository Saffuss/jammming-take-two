const clientId = '2bb296eed39c4be7bfd5ef153ef3097e'; // Your Spotify client ID
const redirectUri = 'http://localhost:3000/'; // Your redirect URI
const scopes = 'playlist-modify-public playlist-modify-private';
const accessURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      accessToken = params.get("access_token");
      const expiresIn = params.get("expires_in");
      const baseURL = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, baseURL);
      setTimeout(()=>{
        accessToken='';
        alert('access token expired');
        window.location = accessURL;
      }, expiresIn * 1000);
      return accessToken;
    } else {
      window.location = accessURL;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        alert('Failed to search');
        throw new Error('Failed to search');
      }
      return response.json();
    })
    .then(response => {
      const tracks = response.tracks.items.map(track => ({
        name: track.name,
        album: track.album.name,
        artist: track.artists[0].name,
        id: track.id,
        uri: track.uri
      }))
      return tracks;
    })
    .catch(error => {
      console.error('Error:', error);
      //alert('Error: ' + error);
    })
  },

  savePlaylist(name, uris) {
    const accessToken = Spotify.getAccessToken();

    return fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        alert('Failed to get user id ' + accessToken);
        throw new Error('Failed to get user id');
      }
      return response.json();
    })
    .then(response => {
      const userId = response.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
      })
      .then(response => {
        if (!response.ok) {
          alert('Failed to create playlist ' + userId);
          throw new Error('Failed to create playlist');
        }
        return response.json();
      })
      .then(response => {
        const playlistId = response.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'uris': uris,
            'position': 0
          })
        })
        .then(response => {
          if (!response.ok) {
            alert('Failed to add tracks to playlist ' + userId + ' ' + playlistId);
            throw new Error('Failed to add tracks to playlist');
          }
        })
      })
    })
    .catch(error => {
      console.error('Error:', error);
      //alert('Error: ' + error);
    })
  },

   getPlaylists() {
    const accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        //alert('Failed to get playlists');
        throw new Error('Failed to get playlists');
      }
      return response.json();
    })
   .then(data => {
    const playlists = data.items.map(playlist => ({
      name: playlist.name,
      id: playlist.id
    }))
    return playlists;
   })
   .then(playlists => {
    return Promise.all(playlists.map(playlist => {
      return fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to get playlist tracks');
        }
        return response.json();
      })
      .then(data => {
        playlist.tracks = data.items.map(t => t.track.name);
        return playlist;
      })
    }))
   })
    .catch(error => {
      //alert('Error: ' + error);
      console.error('Error:', error);
      return [];
    })
  },

  deletePlaylist(playlistId) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        //alert('Failed to delete playlist');
        throw new Error('Failed to delete playlist');
      }
    })
  }
};

export default Spotify;
