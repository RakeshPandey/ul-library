import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Auxiliary from '../../../../../hoc/Auxiliary/Auxiliary.js';
// import './NavigationItem.css';

const NavItem = styled.li`
    display: block;
    color: rgba(255,255,255,0.5);
    border-top: 1px solid #fff;
    a {
        display: block;
        text-decoration: none;
        color: rgba(255,255,255,0.5);
        padding: 10px;
        outline: none;
        &:hover, &:active, &.active {
            color: rgba(255,255,255,1);
        }
    }
    @media (min-width: 767px) {
        display: block;
        padding: 0;
        border: 0;
        a {
            padding-top: 0;
            padding-bottom: 0; 
        }
    }
`;



const navigationItem = (props) => {
    const navigationList =  props.navlist.map((links, index) => {
        return (
            <NavItem key={links.label} className="NavList">
                <NavLink to={links.link}>{links.label}</NavLink>
            </NavItem>
        )
    })
    return (
        <Auxiliary>
            {navigationList}
        </Auxiliary>
    )
}

export default navigationItem;