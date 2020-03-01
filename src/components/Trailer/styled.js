import styled from 'styled-components';

export const VideoStyled = styled.div`
    margin-top: 50px;

    p {
        font-size: 20px;
        margin: 20px 0;
        opacity: .85;
    }

    iframe {
        width: 100%;
        height: 450px;
        @media(max-width: 768px) {
            height: 400px;
            @media(max-width: 512px) {
                height: 300px;
            }
        }
    }
`