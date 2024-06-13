import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../Spotify';

const initialTracks = [
    {name: 'Migraine', artist: 'BoyWithUke', album: 'Migraine'},
    {name: 'Lose Control', artist: 'Teddy Swims', album: 'Lose Control'},
    {name: 'The Egg (Eggstended)', artist: 'Epic Mountain', album: 'Kurzgesagt, Vol. 6'}
]

function App() {
    const [searchItems, setSearchItems] = useState(initialTracks);

    return (
        <div>
            <h1>App</h1>
            <SearchBar />
            <SearchResults />
            <Playlist />
        </div>
    );
}

export default App;