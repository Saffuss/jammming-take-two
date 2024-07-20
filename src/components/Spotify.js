const client_id = '2bb296eed39c4be7bfd5ef153ef3097e';
const redirect_uri = 'http://localhost:3000/';
const accessUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`;
/*let accessToken;
let expiresIn;

const Spotify = {
    getAccessToken() {
      //window.location=accessUrl;
        if (accessToken) {
            return accessToken;
        } else {
          const hash = window.location.hash;
          if (hash) {
              const params = new URLSearchParams(hash.substring(1));
              accessToken = params.get('access_token');
              expiresIn = params.get('expires_in');
              window.setTimeout(() => accessToken='', expiresIn * 1000);
              window.history.pushState('Access Token', null, '/');
              return accessToken;
          } else {
              window.location = accessUrl;
          }
      }
    },

    search(query) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            const result = jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
            return result;
        });
    },

    savePlaylist(playlistName, trackUris) {
      const playlistUrl = `https://api.spotify.com/v1/users/me/playlists`;
      const accessToken = Spotify.getAccessToken();
      let userId;

      if (!accessToken) {
        alert('Please try searching for tracks again. No access token found.');
        return;
      }

      fetch(playlistUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: {
          name: playlistName
        }
      })
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;
      })

      return fetch(`https://api.spotify.com/v1/playlists/${userId}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          uris: trackUris
        }
      })
    }
}

export default Spotify;
*/
const clientId = '2bb296eed39c4be7bfd5ef153ef3097e'; // Your Spotify client ID
const redirectUri = 'http://localhost:3000/'; // Your redirect URI
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      accessToken = params.get('access_token');
      const expiresIn = params.get('expires_in');
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      return response.json();
    })
    .then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
    let userId;

    return fetch('https://api.spotify.com/v1/me', { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        return response.json();
      })
      .then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers,
          method: 'POST',
          body: JSON.stringify({ name })
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create playlist');
        }
        return response.json();
      })
      .then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add tracks to playlist');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error saving playlist:', error);
      });
  }
};

export default Spotify;
