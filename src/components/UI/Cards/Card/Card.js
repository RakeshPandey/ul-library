import React from 'react';

import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import './Card.css';

const card = (props) => {

    const cardlist = props.list.map((card, index) => {
        return (
            <li className="Card">
                <img src={card.img} alt={card.name} />
                <h5>{card.title}</h5>
                <p>{card.title}</p>
                <a href={card.link} className="btn">{card.label}</a>
            </li>
        )
    })

    return (
        <Auxiliary>
            {cardlist}
        </Auxiliary>
    )
}

export default card;