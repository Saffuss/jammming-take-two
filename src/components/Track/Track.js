import React from 'react';
import './Track.css';

function Track(props) {
    return (
        <div>
            <p className='track'>Track</p>
            <h1>{props.track.name}</h1>
            <p>{props.track.artist}</p>
            <p>{props.track.album}</p>
        </div>
    );
}

export default Track;