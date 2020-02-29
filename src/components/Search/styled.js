import styled from 'styled-components';

export const SearchStyled = styled.form`
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
`