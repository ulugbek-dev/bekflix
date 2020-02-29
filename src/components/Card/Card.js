import React from 'react';
import { CardStyled } from './styled';

import { Link } from 'react-router-dom';
export default function Card({ title, image, path }) {
    return (
        <span>
            <Link to={{
                pathname: path
            }}>
                <CardStyled style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`}}>
                    <p>{title}</p>
                </CardStyled>
            </Link>
        </span>
    );
}