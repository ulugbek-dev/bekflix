import React from 'react';
import { FooterStyled } from './styled';

export default function Footer() {
    return (
        <FooterStyled>
            <p>	&#169; {new Date().getFullYear()} Bekflix</p>
        </FooterStyled>
    );
}