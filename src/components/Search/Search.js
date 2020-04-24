import React from 'react';
// import styled from 'styled-components';

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