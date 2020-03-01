import styled from 'styled-components';
import { linearBg, boxShadow } from './../../styled/variables';

export const SimilarCardStyled = styled.div`
    padding-left: 50px;
    color: #fff;
    height: 180px;
    width: 100%;
    float: right;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    box-shadow: ${boxShadow};
    opacity: .7;
    transition: 200ms;

    :hover {
        opacity: 1;
    }

    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        left: 0;
        background: ${linearBg};
    }

        p {
            position: absolute;
            bottom: 0;
            left: 14px;
        }
    }

`