import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../PlaylistName/PlaylistName';
import './Playlist.modules.css';

function Playlist(props) {
    return (
        <div className='playlist'>
            <PlaylistName />
            <button type='button'>Save to Spotify</button>
            <Tracklist tracklistItems={props.tracklistItems} setTracklistItems={props.setTracklistItems} />
        </div>
    );
}

export default Playlist;