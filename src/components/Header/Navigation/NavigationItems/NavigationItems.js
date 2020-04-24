import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';
// import './NavigationItems.css';

const NavList = styled.ul`
    display: block;
    list-style: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 56px;
    margin: 0;
    padding: 0;
    background: #343a40;
    @media (min-width: 767px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: static; 
        margin: 16px 0;
        background: none;
    }
`;


const navigationItems = (props) => {
    return (
        <nav className={props.show ? 'show' : 'hide'}>
            <NavList>           
                <NavigationItem navlist={props.links} />            
            </NavList>
        </nav>
    )
}

export default navigationItems;