import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import Search from '../Search/Search';

import './Header.css';

class Header extends Component {
    render() {
        let menuList = [
            { label: 'Home', link: '/home', active: 'active' },
            { label: 'About', link: '/about' },
            { label: 'Portfolio', link: '/portfolio' },
            { label: 'Services', link: '/services' },
            { label: 'Contact', link: '/contact' }
        ]
        return (
            <header className="bg-dark">
                <div className="container">
                    <Logo />
                    <NavigationItems links={menuList} />
                    <Search />
                </div>
            </header>
        );
    }
}

export default Header;