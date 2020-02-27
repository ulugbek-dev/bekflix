import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
    display: flex;

    .content {
        flex: 3;
        display: flex;
        
        .image {
            flex: 1;
            img {
                width: 100%;
                max-width: 300px;
                padding-right: 20px;
            }
        }

        .info {
            flex: 2;

            h1 {
                font-size: 24px;
                margin-top: 0;
            }
        }
    }

    .similar {
        flex: 1;
    }
`