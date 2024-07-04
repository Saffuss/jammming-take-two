import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [query, setQuery] = useState('');

    function handleInputChange(event) {
        setQuery(event.target.value);
    }
    
    return (
        <div className='searchBar'>
            <h2>SearchBar</h2>
            <input type='text' placeholder='Search Songs'/>
        </div>
    );
}

export default SearchBar;