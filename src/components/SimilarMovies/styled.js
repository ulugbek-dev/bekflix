import styled from 'styled-components';
import { boxShadow } from '../../styled/variables';

export const SimilarMoviesStyled = styled.div`
    flex: 1;
    padding: 30px;
    display: table;
    background: rgba(255, 255, 255, .05);
    box-shadow: ${boxShadow};
    border-radius: 6px;
    margin-left: 30px;
    h3 {
        opacity: .9;
        font-weight: 500;
        margin-top: 0;
    }
    small {
        background: rgba(255, 0, 0, .4);
        padding: 8px;
        display: block;
        border-radius: 6px;
        color: #f3f3f3;
    }
`