import React from 'react';
import Track from '../Track/Track';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className='searchResults'>
            <h2>SearchResults</h2>
            <p>{props.searchItems[0].name}</p>
                {props.searchItems.map(track => (
                    <>
                        <ul>
                            <li>{track.name}</li>
                            <li>{track.album}</li>
                            <li>{track.artist}</li>
                        </ul>
                    </>
                ))}
            <Track track={props.searchItems[0]} />
        </div>
    );
}

export default SearchResults;