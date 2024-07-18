import React from 'react';
import Track from '../Track/Track';
import './SearchResults.modules.css';

function SearchResults(props) {

    function handlePlus(trackToAdd) {
        const generateRandom = Math.random();

        const trackToAddWithInfo = {
            ...trackToAdd,
            info: generateRandom
        }

        props.setTracklistItems([...props.tracklistItems, trackToAddWithInfo]);
    }

    return (
        <div className='searchResults'>
            <h2>SearchResults</h2>
                {props.searchItems.map(track => (
                    <div className='searchResultsTrack' onClick={() => handlePlus(track)}>
                        <Track track={track} key={track.id} />
                    </div>
                ))}
        </div>
    );
}

export default SearchResults;