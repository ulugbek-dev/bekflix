import styled, { css } from 'styled-components';
import { primaryColor, linearBg, boxShadow } from './../../styled/variables';

export const SliderStyled = styled.div`
    width: calc(100% + 8px);
    margin: 50px -8px;
    @media(max-width: 512px) {
        margin-bottom: 30px;
    }
    p {
        padding: 0 8px;
        margin-bottom: 4px;
        font-size: 20px;
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
`