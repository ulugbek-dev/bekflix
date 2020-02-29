import styled, { css } from 'styled-components';

export const SearchResultsStyled = styled.div`
    margin: -10px;
    margin-bottom: 50px;
    ${props => props.oops && css`
        height: calc(100vh - 250px);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .7;
    `}

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