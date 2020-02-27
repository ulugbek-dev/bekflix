import React from 'react';
import { Wrapper } from '../../styled/Wrapper';
import { MovieDetailsStyled } from './styled';
import { useLocation } from 'react-router';
import { useAxios } from './../../hooks/axios';
import { useSelector } from 'react-redux';

export default function MovieDetails() {
    // Get movie/tv id
    const location = useLocation();
    const arr = location.pathname.split('/');
    const type = `/${arr[arr.length-2]}/`;
    const id = arr[arr.length-1];

    // Fetch details about movie
    useAxios(parseInt(id), 'CURRENT_MOVIE', type);

    // Get data from store
    const movie = useSelector(state => state['current_movie']);

    return (
        <Wrapper>
            <MovieDetailsStyled>
                <div className="content">
                    <div className="image">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
                    </div>
                    <div className="info">
                        <h1>{movie.title || movie.name}</h1>
                    </div>
                </div>
                <div className="similar">

                </div>
            </MovieDetailsStyled>
        </Wrapper>
    );
}