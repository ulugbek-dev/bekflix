import styled, { css } from 'styled-components';
import { linearBg, boxShadow } from './../../styled/variables';

export const CardStyled = styled.div`
    display: flex;
    position: relative;
    ${props => props.small ? css`height: 170px;` : css`height: 200px;`}
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 10px;
    border-radius: 6px;
    box-shadow: ${boxShadow};
    color: #fff;
    opacity: .85;
    transition: 200ms;
    @media(max-width: 512px) {
        margin: 5px;
    }

    :hover {
        opacity: 1;
    }

    :before {
        content: '';
        position: absolute;
        height: 50%;
        width: 100%;
        bottom: 0;
        left: 0;
        background: ${linearBg};
    }

    p {
        position: absolute;
        bottom: 0;
        left: 14px;
    }
`