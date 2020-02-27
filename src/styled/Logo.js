import styled from 'styled-components';
import { primaryColor } from './variables';

export const Logo = styled.h1`
    text-transform: uppercase;
    font-size: 28px;
    font-family: 'Righteous';
    color: #fff;
    padding: 6px 0 6px 0;
    border-radius: 8px;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    color: ${primaryColor};
    transition: 200ms ease;

    :hover {
        filter: grayscale(40%);
    }

    span {
        padding: 1px 5px;
        border-radius: 8px;
        background: ${primaryColor};
        color: #fff;
        margin: 0 5px;
    }
`