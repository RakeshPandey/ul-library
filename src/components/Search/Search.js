import React from 'react';

import './Search.css';

const search = (props) => {
    return (
        <div className="searchForm">
                <input type="text" placeholder="Search..." />
                <div className="search"></div>
        </div>
    )
}

export default search;