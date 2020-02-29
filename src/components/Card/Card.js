import React from 'react';
import { CardStyled } from './styled';

export default function Card({ title, image }) {
    return (
        <CardStyled style={{backgroundImage: `url(image)`}}>
            <p>{title}</p>
        </CardStyled>
    );
}