import styled from 'styled-components';

export default styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    padding: 8px 20px;
    background-color: ${props => (props.primary ? 'blue' : '#000')};
    color: ${props => (props.primary ? '#fff' : '#fff')};
    cursor: pointer;
    &:hover {
        background-color: ${props => (props.primary ? 'red' : 'blue')};
        color: ${props => (props.primary ? '#000' : '#fff')};
    }
`;