import React from 'react';
import styled from 'styled-components';

const SiteLogo = styled.div`
    width:250px;
    h1 {
        color: #fff;
        font-family: 'Lobster', cursive;
        font-size: 21px; 
        margin: 8px;
        @media (min-width: 767px) {
            font-size: 28px;
        }
    }
    @media (min-width: 767px) {
        width: 150px;
    }
`;


// import './Logo.css';

const logo = (props) => {
    return (
        <SiteLogo>
            {/* <img src="./logo.png" alt="UI Library" /> */}
            <h1>UI Library</h1>
        </SiteLogo>
    )
}

export default logo;