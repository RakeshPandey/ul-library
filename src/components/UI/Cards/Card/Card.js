import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import { H3, H5, Para } from '../../../Elements/Heading/Heading';
import { Button } from '../../../Elements/Button/Button';
// import './Card.css';

const ImgWrapper = styled.div`
    width: 50%;
    height: 100%;
    background: ${props => props.theme.colors.light};
    position: relative;
    flex: 1;
    transition: all .4s ease;
    a {
        display: inline-block;
        padding: 4rem 0;
    }
    &:hover {
        background: rgba(135,135,135,0.5);  
    }
`;

const Wrapper = styled.div`
    padding: 2rem 3rem;
`;

const TextWrapper = styled.div`
    width: 50%;
    flex: 1;
    h3 {
        &:before {
            width: 6.6667rem;
            border-bottom: .13333rem solid #e1e1e1;
        }
    }
`;

const List = styled.li`
    background: ${props => props.theme.colors.white};
    background-clip: border-box;
    display: flex;
    flex-direction: row;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    &:nth-child(even) {
        :after {
            right: auto;
            left: 50%;
            border-width: .56667rem 0 .56667rem .6rem;
            border-color: transparent transparent transparent #f6f8f9;
        }
        > :first-child {
            order: 2
        };
        > :last-child {
            order: 1
        }
    }
    :after {
        border-style: solid;
        border-width: .56667rem .6rem .56667rem 0;
        border-color: transparent #fafafa transparent transparent;
        display: block;
        position: absolute;
        right: 50%;
        top: 50%;
        content: "";
        z-index: 1;
    }
`;

const CardImg = styled.img`
   max-width: 100%;
   max-height: 100%;
`;

const card = (props) => {

    const cardlist = props.list.map((card, index) => {
        return (
            <List key={card.id}>
                <ImgWrapper>
                    <Link to="/"><CardImg src={card.img} alt={card.name} /></Link>
                </ImgWrapper>
                <TextWrapper>
                    <Wrapper>
                        <H3>{card.title}</H3>
                        <Para>{card.para}</Para>
                        <Para><Button large href={card.link} className="btn">{card.label}</Button></Para>
                    </Wrapper>
                </TextWrapper>
            </List>
        )
    })

    return (
        <Auxiliary>
            {cardlist}
        </Auxiliary>
    )
}

export default card;