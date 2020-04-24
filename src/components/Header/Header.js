import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import Search from '../Search/Search';
import Hamburger from '../Header/Navigation/Hamburger';

// import './Header.css';

const HeaderP = styled.header`
    display: flex;
    flex-direction: row;
    padding: 8px 0 6px;
    &.bg-dark {
        background-color: #343a40!important;
    }
`;

class Header extends Component {

    state = {
        showMenu: false
    }

    showClickedHandler = () => {
        // console.log('hello');
        this.setState({showMenu: !this.state.showMenu});
    }

    render() {
        let menuList = [
            { label: 'Home', link: '/' },
            { label: 'About', link: '/about' },
            { label: 'Portfolio', link: '/portfolio' },
            { label: 'Services', link: '/services' },
            { label: 'Contact', link: '/contacts' }
        ]
        return (
            <HeaderP className="bg-dark">
                <div className="container">
                    <Logo />
                    <NavigationItems show={this.state.showMenu} links={menuList} />
                    <Search />
                    <Hamburger clicked={this.showClickedHandler} />
                </div>
            </HeaderP>
        );
    }
}

export default Header;