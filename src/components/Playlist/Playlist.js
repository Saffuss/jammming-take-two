import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../PlaylistName/PlaylistName';
import './Playlist.modules.css';

function Playlist(props) {
    return (
        <div className='playlist'>
            <PlaylistName />
            <Tracklist tracklistItems={props.tracklistItems} setTracklistItems={props.setTracklistItems} />
            <button type='button'>Save to Spotify</button>
        </div>
    );
}

export default Playlist;