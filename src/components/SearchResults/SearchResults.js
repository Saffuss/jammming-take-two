import React from 'react';
import Track from '../Track/Track';
import './SearchResults.css';

function SearchResults(props) {

    function handlePlus(trackToAdd) {
        for (const alreadyTrack in props.tracklistItems) {
            if (trackToAdd === alreadyTrack) {
                return;
            }
        }

        props.tracklistItems.forEach((alreadyTrack) => {
            if (alreadyTrack === trackToAdd) {
                return;
            }
        })

        props.setTracklistItems([...props.tracklistItems, trackToAdd]);
    }

    return (
        <div className='searchResults'>
            <h2>SearchResults</h2>
                {props.searchItems.map(track => (
                    <>
                        <Track track={track} key={track.id} />
                        <button onClick={() => handlePlus(track)}>+</button>
                    </>
                ))}
        </div>
    );
}

export default SearchResults;