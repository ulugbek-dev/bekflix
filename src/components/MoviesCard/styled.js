import styled from 'styled-components';
import { primaryColor } from './../../styled/variables';

export const MoviesCardStyled = styled.section`
    margin: -10px;
    margin-bottom: 50px;

    span {
        opacity: 0;
        transform: scale(.7);
        animation: scaleIn 200ms forwards 200ms;
    }
    h3 {
        padding: 0 10px;
        margin-bottom: 15px;
    }
    span {
        display: inline-block;
        min-width: 180px;
        width: 20%;
        @media(max-width: 939px) {
            width: 25%;
            @media(max-width: 759px) {
                width: 33%;
                @media(max-width: 579px) {
                    min-width: 150px;
                    width: 50%;
                    @media(max-width: 350px) {
                        width: 100%;
                    }
                }
            }
        }
    }
    button {
        color: ${primaryColor};
        display: block; 
        margin: auto;
        background: transparent;
        border: 1px solid transparent;
        cursor: pointer;
        margin-top: 30px;
        padding: 8px;
        border-radis: 6px;
        border: 1px solid ${primaryColor};
        transition: 200ms;
        opacity: .8;
        :hover {
            opacity: 1;
        }
    }
`