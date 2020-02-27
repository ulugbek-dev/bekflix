import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    padding: 0 30px;
    ${props => props.afterNav && css`padding-top: 120px;`}
`