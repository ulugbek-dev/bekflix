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
    
    .navbar {
        width: 100%;
        max-width: ${maxWidth};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px;

        div {
            display: flex;
            align-items: center;

            ul {
                margin: 0;
                display: flex;
                list-style: none;
                font-size: 14px;

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

        }

        form {
            span {
                position: relative;
                display: flex;
                align-items: center;

                input {
                    background: rgba(255, 255, 255, .15);
                    border-radius: 6px;
                    border: 1px solid transparent;
                    padding: 6px 10px;
                    transition: 200ms;
                    width: 200px;
                    color: #fff;

                    :hover {
                        background: rgba(255, 255, 255, .2);
                    }
                    :focus {
                        background: rgba(255, 255, 255, .2);
                        width: 230px;
                    }
                }
                
                i {
                    position: absolute;
                    right: 12px;
                    color: rgba(255, 255, 255, .6);
                }
            }
        }
    }
`