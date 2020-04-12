import React from 'react';

import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <nav>
            <ul>           
                <NavigationItem navlist={props.links} />            
            </ul>
        </nav>
    )
}

export default navigationItems;