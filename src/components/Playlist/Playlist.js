import React, { useState, useCallback } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../PlaylistName/PlaylistName';
import './Playlist.modules.css';
import Spotify from '../Spotify.js';

function Playlist(props) {
    const [query, setQuery] = useState('');

    const handleClick = useCallback(() => {
        Spotify.savePlaylist(query, props.trackUris)
        .then(() => {
            props.setTracklistItems([]);
            setQuery('');
            props.retrievePlaylists();
        });
    }, [query, props]);

    return (
        <div className='playlist'>
            <h2>New Playlist</h2>
            <PlaylistName query={query} setQuery={setQuery} />
            <button type='button' onClick={handleClick}>Save to Spotify</button>
            <Tracklist tracklistItems={props.tracklistItems} setTracklistItems={props.setTracklistItems} />
        </div>
    );
}

export default Playlist;