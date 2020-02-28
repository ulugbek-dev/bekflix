import styled from 'styled-components';
import { primaryColor } from './../../styled/variables';

export const SliderStyled = styled.div`
    width: calc(100% + 8px);
    margin: 0 -8px 50px -8px;

    h2 {
        padding: 0 8px;
        margin-bottom: 16px;
        font-size: 18px;
        opacity: .85;
    }

    .slick-next {
        right: -18px;

        :before {
            content: '\\203A';
            font-size: 24px;
        }
    }
    .slick-prev {
        left: -18px;
        
        :before {
            content: '\\2039';
            font-size: 24px;
        }
    }

    .slider-card {
        height: 150px;
        padding: 0 8px;

        .card-content {
            box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.35);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 100%;
            border-radius: 6px;
            padding: 10px;
            position: relative;
            opacity: .85;
            transition: 200ms;

            :hover {
                opacity: 1;
            }

            :before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background: rgb(0,0,0);
                background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
            }

            h3 {
                margin: 0;
                position: absolute;
                bottom: 10px;
                font-size: 16px;
                color: #fff;
                font-weight: 400;
            }

            .extra {
                display: inline-flex;
                position: absolute;
                top: 4px;
                right: 4px;
                
                span {
                    padding: 0 4px;
                    align-items: center;
                    border-radius: 6px;
                    margin-left: 4px;
                    color: #232323;
                }

                .rate {
                    background: #F5C518;
                }

                .new {
                    background: ${primaryColor};
                    color: #030303;
                }

                small {
                    margin: 0;
                }

                i {
                    margin-right: 4px;
                }
            }
        }
    }
`