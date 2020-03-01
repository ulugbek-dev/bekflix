import styled, { css } from 'styled-components';
import { primaryColor, linearBg, boxShadow } from './../../styled/variables';

export const SliderStyled = styled.div`
    width: calc(100% + 8px);
    margin: 0 -8px 50px -8px;
    @media(max-width: 512px) {
        margin-bottom: 30px;
    }
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
        @media(max-width: 512px) {
            right: -12px;
        }
    }
    .slick-prev {
        left: -18px;
        :before {
            content: '\\2039';
            font-size: 24px;
        }
        @media(max-width: 512px) {
            left: -12px;
        }
    }
    .slick-slide {
        opacity: 0;
        transform: scale(.5);
        animation: scaleIn 200ms 200ms forwards;
    }
    .slider-card {
        height: 170px;
        padding: 0 8px;
        .card-content {
            box-shadow: ${boxShadow};
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
                background: ${linearBg};
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