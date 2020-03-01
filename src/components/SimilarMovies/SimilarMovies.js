import React from 'react';
import { Wrapper } from '../../styled/Wrapper';
import { MovieDetailsStyled } from './styled';
import { useLocation } from 'react-router';
import { useAxios } from '../../hooks/axios';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { SimilarMoviesStyled } from './styled';

export default function SimilarMovies({ id, type }) {
    // Fetch details about movie
    useAxios(id, 'SIMILAR_MOVIES', type, '/similar', 1);

    // Get data from store
    const similar = useSelector(state => state['similar_movies']);

    return (
        <SimilarMoviesStyled>
            <h3>Similar movies</h3>
            {similar.length > 0 ? (
                similar.map((m, i) => i < 5 && (
                    <Card
                        sidebar={true}
                        title={m.title || m.name}
                        image={m.backdrop_path}
                        path={`/details${type}${m.id}`}
                    />
            ))) : (
                <small>Oops, similar movies are not available for some movies</small>
            )}
        </SimilarMoviesStyled>
    );
}