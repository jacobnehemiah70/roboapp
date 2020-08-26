import React from 'react';
import './SearchBox.css';



const SearchBox = (props) => {

    return(
        <div className='p2 input'>
            <input type='text'
                placeholder='search robotss'
                className='pa3  ba b--green bg-lightest-blue weed '
                onChange={props.onSearchChange} />
        </div>
    );
}

export default SearchBox