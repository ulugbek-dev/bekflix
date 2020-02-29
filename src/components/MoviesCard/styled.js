import styled, { css } from 'styled-components';

let delay = 200;

export const MoviesCardStyled = styled.section`
    margin: -10px;
    margin-bottom: 50px;

    span {
        opacity: 0;
        transform: scale(.5);

        ${props => props.animation.map((x, i) => (css`
            :nth-child(${i}) {
                animation: scaleIn ${delay}ms ${props.animation = i ? delay += 10 : delay = 200}ms forwards;
            }
        `))}
    }

    h3 {
        padding: 0 10px;
        margin-bottom: 15px;
    }

    span {
        display: inline-block;
        min-width: 180px;
        width: 16.6%;
        @media(max-width: 1119px) {
            width: 20%;
            @media(max-width: 939px) {
                width: 25%;
                @media(max-width: 759px) {
                    width: 33%;
                    @media(max-width: 579px) {
                        width: 50%;
                        @media(max-width: 399px) {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`