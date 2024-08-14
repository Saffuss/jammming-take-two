import React, { useState, useEffect } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlaylistList from '../PlaylistList/PlaylistList';
import "./App.modules.css";
import Spotify from '../Spotify';

function App() {
    const [searchItems, setSearchItems] = useState([]);
    const [tracklistItems, setTracklistItems] = useState([]);
    const [playlistListItems, setPlaylistListItems] = useState([]);

    const trackUris = tracklistItems.map(t => t.uri);

    function retrievePlaylists() {
        Spotify.getPlaylists().then(playlists => setPlaylistListItems(playlists));
    }

    useEffect(() => {
        Spotify.getAccessToken();
    })

    return (
        <div className='app'>
            <h1 className='title'>Jammming</h1>
            <SearchBar setSearchItems={setSearchItems} />
            <div className='dual'>
                <SearchResults searchItems={searchItems} tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
                <Playlist trackUris={trackUris} tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} setPlaylistListItems={setPlaylistListItems} retrievePlaylists={retrievePlaylists} />
                <PlaylistList playlistListItems={playlistListItems} setPlaylistListItems={setPlaylistListItems} retrievePlaylists={retrievePlaylists} />
            </div>
        </div>
    );
}

export default App;