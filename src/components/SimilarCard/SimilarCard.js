import React from 'react';
import { SimilarCardStyled } from './styled';

export default function SimilarCard({ image, title, redirect }) {

    return (
        <SimilarCardStyled style={{backgroundImage: `url(${image})`}}>
            <p>{title}</p>
        </SimilarCardStyled>
    );
}