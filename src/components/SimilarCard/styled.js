import styled from 'styled-components';

export const SimilarCardStyled = styled.div`
    padding-left: 50px;
    color: #fff;
    height: 150px;
    width: 100%;
    float: right;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.35);
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
        background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    }

        p {
            position: absolute;
            bottom: 0;
            left: 14px;
        }
    }

`