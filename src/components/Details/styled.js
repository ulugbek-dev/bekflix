import styled, { css } from 'styled-components';
import { primaryColor, boxShadow } from '../../styled/variables';

export const MovieDetailsStyled = styled.div`
    display: flex;
    justify-content: space-between;

    .content {
        ${props => props.person ? css`width: 100%;` : css`width: 70%;`}
        padding: 30px;
        background: rgba(255, 255, 255, .05);
        box-shadow: ${boxShadow};
        border-radius: 6px;
        @media(max-width: 1023px) {
            width: 100%;
            @media(max-width: 512px) {
                padding: 15px;
            }
        }
        .overview {
            display: flex;
            @media(max-width: 768px) {
                display: block;
            }          
            .image {
                flex: 1;
                img {
                    width: 100%;
                    max-width: 260px;
                    padding-right: 20px;
                    @media(max-width: 768px) {
                        padding-right: 0;
                        display: block;
                        max-width: 300px;
                        margin: auto;
                        margin-bottom: 20px;
                    }     
                }
            }
            .info {
                padding-right: 30px;
                ${props => props.person ? css`flex: 4;` : css`flex: 3;`}
                @media(max-width: 1023px) {
                    padding-right: 0;
                }
                h1 {
                    font-size: 22px;
                    margin: 0;
                }
                .headline {
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;

                    span {
                        margin-left: 20px;

                        i {
                            ${props => props.person ? css`
                                color: #F5C518;
                                font-size: 24px;
                            ` : css`
                                color: ${primaryColor};
                            `}
                            margin: 0 4px;
                        }
                    }
                }
                .item {
                    font-size: 14px;
                    display: flex;
                    align-items: flex-start;
                    ${props => props.person ? css`margin-top: 20px;` : css`margin-top: 35px;`}
                    @media(max-width: 768px) {
                        display: block;
                        margin-toip: 10px;
                    }
                    p {
                        width: 120px;
                        color: ${primaryColor};
                        margin: 0;
                    }
                    span {
                        flex: 1;
                        opacity: .9;
                    }
                }
            }
        }
    }   
`