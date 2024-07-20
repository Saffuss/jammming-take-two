import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import "./App.modules.css";
import Spotify from '../Spotify';

const initialTracks = [
    {id: 0, name: 'Migraine', artist: 'BoyWithUke', album: 'Migraine', uri: ' as;lkfj '},
    {id: 1, name: 'Lose Control', artist: 'Teddy Swims', album: 'Lose Control', uri: ' aopisuenfl '},
    {id: 2, name: 'The Egg (Eggstended)', artist: 'Epic Mountain', album: 'Kurzgesagt, Vol. 6', uri: ' askbuoiflsk '}
]

function App() {
    const [searchItems, setSearchItems] = useState([]);
    const [tracklistItems, setTracklistItems] = useState([]);

    const trackUris = tracklistItems.map(t => t.uri);

    return (
        <div className='app'>
            <h1 className='title'>Jammming</h1>
            <SearchBar setSearchItems={setSearchItems} />
            <div className='dual'>
                <SearchResults searchItems={searchItems} tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
                <Playlist trackUris={trackUris} tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
            </div>
            {/*Spotify.getAccessToken()*/}
            {trackUris[1]}
        </div>
    );
}

export default App;