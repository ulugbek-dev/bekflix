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
    @media(max-width: 512px) {
        margin: -5px -5px 40px -5px;
    }
    h3 {
        padding: 0 10px;
        margin-bottom: 2px;
        opacity: .85;
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
                        min-width: 100px;
                        width: 50%;
                    }
                }
            }
        }
    }

`