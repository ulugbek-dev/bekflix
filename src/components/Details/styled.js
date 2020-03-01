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

        .overview {
            display: flex;
            
            .image {
                flex: 1;
                img {
                    width: 100%;
                    max-width: 260px;
                    padding-right: 20px;
                }
            }

            .info {
                padding-right: 30px;
                ${props => props.person ? css`flex: 4;` : css`flex: 3;`}

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

    .similar {
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
        }

        small {
            background: rgba(255, 0, 0, .4);
            padding: 8px;
            display: block;
            border-radius: 6px;
            color: #f3f3f3;
        }
    }
`