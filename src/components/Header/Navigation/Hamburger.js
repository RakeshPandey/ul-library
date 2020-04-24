import React from 'react';
import styled from 'styled-components';

const HamburgerMenu = styled.div`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    margin: 0 10px;
    width: 25px;
    height: 25px;
    display: block;
    position: absolute;
    right: 0;
    top: 10px;
    z-index: 100;
    cursor: pointer;
    .bar {
        background-color: #fff;
        height: 3px;
        margin: 4px 0;
    }
    @media (min-width: 767px) {
        display: none;
    }
`;

const hambuger = (props) => {
    return (
        <HamburgerMenu onClick={props.clicked}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </HamburgerMenu>
    )
}

export default hambuger;