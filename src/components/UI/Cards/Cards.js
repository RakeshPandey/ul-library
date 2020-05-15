import React, { Component } from 'react';
import styled from 'styled-components';

// import './Cards.css';
import Card from './Card/Card';
import image from '../../../images/index';

const items = [
    {
        id: 1,
        img: `${image.cardImage1}`,
        name: 'Card 1',
        title: 'Card Title 1',
        para: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        link: '',
        label: 'Go somewhere',
        class: 'btn-primary'
    },
    {
        id: 2,
        img: `${image.cardImage2}`,
        name: 'Card 2',
        title: 'Card Title 2',
        para: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        link: '',
        label: 'Go somewhere',
        class: 'btn-primary'
    },
    {
        id: 3,
        img: `${image.cardImage3}`,
        name: 'Card 3',
        title: 'Card Title 3',
        para: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        link: '',
        label: 'Go somewhere',
        class: 'btn-primary'
    }
]

const CardsList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: -4px 0 2rem;
    padding: 0;
`;

class Cards extends Component {
    render() {
        return (
            <CardsList>
                <Card list={items} />
            </CardsList>
        )
    }
}

export default Cards;