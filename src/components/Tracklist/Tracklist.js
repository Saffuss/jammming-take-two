import React from 'react';
import Track from '../Track/Track';
import "./Tracklist.css";

function Tracklist(props) {
    return (
        <div className='tracklist'>
            <h3>Tracklist</h3>
            {props.tracklistItems.map(track => (
                <>
                    <ul>
                        <li>{track.name}</li>
                        <li>{track.album}</li>
                        <li>{track.artist}</li>
                    </ul>
                </>
            ))}
        </div>
    );
}

export default Tracklist;