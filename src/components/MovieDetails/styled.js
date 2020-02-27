import styled from 'styled-components';
import { primaryColor } from '../../styled/variables';

export const MovieDetailsStyled = styled.div`
    display: flex;

    .content {
        flex: 2.5;

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
                flex: 2.5;
                padding-right: 3    0px;

                h1 {
                    font-size: 22px;
                    margin: 0;
                }

                .headline {
                    display: flex;
                    align-items: center;

                    span {
                        margin-left: 20px;

                        i {
                            color: ${primaryColor};
                            margin: 0 4px;
                        }
                    }
                }

                .item {
                    margin-top: 40px;
                    font-size: 14px;
                    display: flex;
                    align-items: flex-start;

                    p {
                        width: 120px;
                        color: ${primaryColor};
                        margin: 0;
                    }
                    span {
                        flex: 1;
                    }
                }
            }
        }

        .video {
            margin-top: 50px;

            p {
                font-size: 22px;
                margin: 20px 0;
            }

            iframe {
                width: 100%;
                height: 450px;
            }
        }
    }

    .similar {
        flex: 1;
    }
`