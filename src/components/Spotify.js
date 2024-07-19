const client_id = '2bb296eed39c4be7bfd5ef153ef3097e';
const redirect_uri = 'http://localhost:3000/';
let accessToken;
let expiresIn;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const hash = window.location.hash;
        if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            accessToken = params.get('access_token');
            expiresIn = params.get('expires_in');
            window.setTimeout(() => accessToken='', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`;
            window.location = accessUrl;
        }
    }
}

export default Spotify;