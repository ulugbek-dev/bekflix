import styled from 'styled-components';

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
                    width: 50%;
                    @media(max-width: 399px) {
                        width: 100%;
                    }
                }
            }
        }
    }
`