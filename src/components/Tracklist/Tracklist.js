import React from 'react';
import Track from '../Track/Track';
import "./Tracklist.css";

function Tracklist(props) {

    function handleMinus(trackToRemove) {
        const filterTracks = props.tracklistItems.filter((track) => track !== trackToRemove);
        props.setTracklistItems(filterTracks);
    }

    return (
        <div className='tracklist'>
            <h3>Tracklist</h3>
            {props.tracklistItems.map(track =>(
                <>
                    <Track track={track} />
                    <button onClick={() => handleMinus(track)}>-</button>
                </>
            ))}
        </div>
    );
}

export default Tracklist;