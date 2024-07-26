import React, { useState, useEffect } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import "./App.modules.css";
import Spotify from '../Spotify';

function App() {
    const [searchItems, setSearchItems] = useState([]);
    const [tracklistItems, setTracklistItems] = useState([]);

    const trackUris = tracklistItems.map(t => t.uri);

    useEffect(() => {
        Spotify.getAccessToken();
    })

    return (
        <div className='app'>
            <h1 className='title'>Jammming</h1>
            <SearchBar setSearchItems={setSearchItems} />
            <div className='dual'>
                <SearchResults searchItems={searchItems} tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
                <Playlist trackUris={trackUris} tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
            </div>
        </div>
    );
}

export default App;