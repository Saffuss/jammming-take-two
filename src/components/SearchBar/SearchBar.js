import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [query, setQuery] = useState('');

    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    function handleSearch() {
        alert('Search button has been pressed.');
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