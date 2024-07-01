import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../PlaylistName/PlaylistName';
import './Playlist.css';

function Playlist() {
    return (
        <div className='playlist'>
            <PlaylistName />
            <Tracklist />
        </div>
    );
}

export default Playlist;