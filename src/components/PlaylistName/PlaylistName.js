import React, { useState } from 'react';

function PlaylistName() {
    const [query, setQuery] = useState('')

    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    return (
        <>
            <input
            type='text'
            placeholder='playlist name'
            value={query}
            onChange={handleInputChange}
            />
        </>
    );
}

export default PlaylistName;