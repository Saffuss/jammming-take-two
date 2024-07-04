import React from 'react';
import Track from '../Track/Track';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className='searchResults'>
            <h2>SearchResults</h2>
                {props.searchItems.map(track => (
                    <>
                        <Track track={track} key={track.id} />
                        <button>+</button>
                    </>
                ))}
        </div>
    );
}

export default SearchResults;