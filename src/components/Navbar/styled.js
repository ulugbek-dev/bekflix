import styled from 'styled-components';
import { maxWidth } from './../../styled/variables';

export const NavbarStyled = styled.nav`
    position: fixed;
    background: rgba(0, 0, 0, .9);
    z-index: 9;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    @media(max-width: 512px) {
        height: 60px;
    }
    .navbar {
        width: 100%;
        max-width: ${maxWidth};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px;
        @media(max-width: 512px) {
            padding: 15px;
        }
        div {
            display: flex;
            align-items: center;
        }
    }
    
    ul {
        margin: 0;
        display: flex;
        list-style: none;
        font-size: 14px;
        @media(max-width: 660px) {
            position: absolute;
            top: 60px;
            background: rgba(0, 0, 0, .9);
            width: 100%;
            padding: 15px;
            justify-content: space-between;
        }
        li {
            margin: 0 10px;
            color: rgba(255, 255, 255, .75);
            transition: 200ms;
            cursor: pointer;
            :hover {
                color: rgba(255, 255, 255, 1);
            }
        }
    }
`