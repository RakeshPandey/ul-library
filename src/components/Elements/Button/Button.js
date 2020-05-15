import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.theme.colors.base};
    color: #fff;
    font-size: 1rem;
    padding: .75rem 2rem;
    border: 1px solid ${props => props.theme.colors.base};
    border-radius: .13333rem;
    transition: all .3s ease;
    text-decoration: none;
    text-align: center;
    min-width: ${props => props.theme.sizes.small};
    &:hover {
        background: transparent;
        color: ${props => props.theme.colors.base};
    }

    ${({primary}) => primary && css`
        background: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
        &:hover {
            background: transparent;
            color: ${props => props.theme.colors.primary};
        }
    `}

    ${({secondary}) => secondary && css`
        background: ${props => props.theme.colors.secondary};
        border: 1px solid ${props => props.theme.colors.secondary};
        &:hover {
            background: transparent;
            color: ${props => props.theme.colors.secondary};
        }
    `}

    ${({danger}) => danger && css`
        background: ${props => props.theme.colors.danger};
        border: 1px solid ${props => props.theme.colors.danger};
        &:hover {
            background: transparent;
            color: ${props => props.theme.colors.danger};
        }
    `}

    ${({small}) => small && css`
        min-width: ${props => props.theme.sizes.small};
    `}

    ${({medium}) => medium && css`
        min-width: ${props => props.theme.sizes.medium};
    `}

    ${({large}) => large && css`
        min-width: ${props => props.theme.sizes.large};
    `}  
`;

 

// const ButtonSecondary = styled(Button)`
//     background : ${props => props.theme.secondary};
// `; 

// const ButtonDanger = styled(Button)`
//     background : ${props => props.theme.danger};
// `; 


export const Button = ({ primary, secondary, danger, small, medium, large, children }) => {
    return (
        <StyledButton as="a" href="#" 
            small={small} medium={medium} large={large} 
            secondary={secondary} primary={primary} 
            danger={danger}>{children}</StyledButton>
    )
}

// export const ButtonPrimary = styled(Button)`
//     background: ${props => props.theme.colors.primary};
//     border: 1px solid ${props => props.theme.colors.primary};
// `;
