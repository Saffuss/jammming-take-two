import React from 'react';

function PlaylistName(props) {

    function handleInputChange(event) {
        props.setQuery(event.target.value);
    }

    return (
        <>
            <input
            type='text'
            placeholder='playlist name'
            value={props.query}
            onChange={handleInputChange}
            />
        </>
    );
}

export default PlaylistName;