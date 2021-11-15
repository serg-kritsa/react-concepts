import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => (
  <input
    className='search-box'
    type='text'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
);
