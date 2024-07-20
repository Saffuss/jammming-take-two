import React, { useState } from 'react';
import Spotify from '../Spotify.js';
import './SearchBar.modules.css';

function SearchBar(props) {
    const [query, setQuery] = useState('');

    function handleInputChange(event) {
        setQuery(event.target.value);
        event.preventDefault();
    }

    function handleSearch() {
        Spotify.search(query).then(tracks =>{
            console.log(tracks);
            props.setSearchItems(tracks);
        })
    }

    return (
        <div className='searchBar'>
            <h2>SearchBar</h2>
            <input
            type='text'
            placeholder='Search Songs'
            onChange={handleInputChange}
            value={query}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;