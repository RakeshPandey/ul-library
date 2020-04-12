import React, { Component } from 'react';

import './Cards.css';
import Card from './Card/Card';

const items = [
    {
        id: 1,
        img: 'https://via.placeholder.com/500x150',
        name: 'Card 1',
        title: 'Card Title 1',
        para: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        link: '',
        label: 'Go somewhere',
        class: 'btn-primary'
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/500x150',
        name: 'Card 2',
        title: 'Card Title 2',
        para: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        link: '',
        label: 'Go somewhere',
        class: 'btn-primary'
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/500x150',
        name: 'Card 3',
        title: 'Card Title 3',
        para: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        link: '',
        label: 'Go somewhere',
        class: 'btn-primary'
    }
]

class Cards extends Component {
    render() {
        return (
            <ul className="Cards">
                <Card list={items} />
            </ul>
        )
    }
}

export default Cards;