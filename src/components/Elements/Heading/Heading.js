import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 4.2rem;
    line-height: 4.93333rem;
    font-weight: 300;
    color: ${props => props.theme.colors.secondary};
`;
export const H2 = styled.h2`
    font-size: 1.33333rem;
    line-height: 1.6rem;
    margin: 0 0 .66667rem;
    font-weight: 300;
    color: ${props => props.theme.colors.secondary};

    @media (min-width: 767px) {
        font-size: 3.8rem;
        line-height: 4.5rem; 
        margin-bottom: 1rem;       
    }
`;

export const H3 = styled.h3`
    font-size: 3.33333rem;
    font-weight: 300;
    line-height: 3rem;
    color: ${props => props.theme.colors.secondary};
`;

export const H4 = styled.h4`
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${props => props.theme.colors.secondary};
`;

export const H5 = styled.h5`
    font-size: 1.8rem;
    line-height: 2rem;
    color: ${props => props.theme.colors.secondary};
`;

export const H6 = styled.h6`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8rem;
    margin: 0 0 1rem;
    color: ${props => props.theme.colors.secondary};
`;

export const Para = styled.p`
    font-size: 1rem;
    line-height: 1.8rem;
    color: ${props => props.theme.colors.secondary};
`;