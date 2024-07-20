import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../PlaylistName/PlaylistName';
import './Playlist.modules.css';
import Spotify from '../Spotify.js';

function Playlist(props) {
    const [query, setQuery] = useState('');

    function handleClick() {
        Spotify.savePlaylist(query, props.trackUris);
        props.setTracklistItems([]);
        setQuery('')
    }

    return (
        <div className='playlist'>
            <PlaylistName query={query} setQuery={setQuery} />
            <button type='button' onClick={handleClick}>Save to Spotify</button>
            <Tracklist tracklistItems={props.tracklistItems} setTracklistItems={props.setTracklistItems} />
        </div>
    );
}

export default Playlist;