import React from 'react';
import Track from '../Track/Track';
import "./Tracklist.css";

function Tracklist() {
    return (
        <div className='tracklist'>
            <h3>Tracklist</h3>
            <Track />
            <Track />
            <Track />
        </div>
    );
}

export default Tracklist;