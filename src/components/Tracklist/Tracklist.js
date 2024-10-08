import React from 'react';
import Track from '../Track/Track';
import "./Tracklist.modules.css";

function Tracklist(props) {

    function handleMinus(trackToRemove) {
        const filterTracks = props.tracklistItems.filter((track) => track !== trackToRemove);
        props.setTracklistItems(filterTracks);
    }

    return (
        <div className='tracklist'>
            {props.tracklistItems.map(track =>(
                <div className='trackWithButton' key={track.id} onClick={() => handleMinus(track)}>
                    <Track track={track} />
                </div>
            ))}
        </div>
    );
}

export default Tracklist;