import React from 'react';
import Track from '../Track/Track';
import "./Tracklist.css";

function Tracklist(props) {
    return (
        <div className='tracklist'>
            <h3>Tracklist</h3>
            {/*props.tracklistItems.map(track => (
                <>
                    <ul>
                        <li>{track.name}</li>
                        <li>{track.album}</li>
                        <li>{track.artist}</li>
                    </ul>
                </>
            ))*/}
            {props.tracklistItems.map(track =>(
                <>
                    <Track track={track} />
                    <button>-</button>
                </>
            ))}
        </div>
    );
}

export default Tracklist;