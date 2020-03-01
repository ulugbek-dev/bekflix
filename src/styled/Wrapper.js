import styled from 'styled-components';
import { maxWidth } from './variables';

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    padding: 0 30px;
    padding-top: 120px;
    
    @media(max-width: 512px) {
        padding: 85px 15px 0 15px;
    }
`