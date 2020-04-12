import React from 'react';

import Auxiliary from '../../../../../hoc/Auxiliary/Auxiliary.js';
import './NavigationItem.css';

const navigationItem = (props) => {
    const navigationList =  props.navlist.map((links, index) => {
        return (
            <li key={links.label} className="NavList">
                <a href={links.link} className={links.active ? 'active' : null}>{links.label}</a>
            </li>
        )
    })
    return (
        <Auxiliary>
            {navigationList}
        </Auxiliary>
    )
}

export default navigationItem;