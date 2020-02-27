import React from 'react';
import { Wrapper } from '../../styled/Wrapper';
import { MovieDetailsStyled } from './styled';
import { useLocation } from 'react-router';
import { useAxios } from './../../hooks/axios';
import { useSelector } from 'react-redux';
import SimilarCard from './../SimilarCard/SimilarCard';

export default function MovieDetails() {
    // Get movie/tv id
    const location = useLocation();
    const arr = location.pathname.split('/');
    const type = `/${arr[arr.length-2]}/`;
    const id = arr[arr.length-1];

    // Fetch details about movie
    useAxios(parseInt(id), 'CURRENT_MOVIE', type);

    // Get trailer link
    useAxios(parseInt(id), 'CURRENT_VIDEO', type, '/videos')

    // Get data from store
    const movie = useSelector(state => state['current_movie']);
    const video = useSelector(state => state['current_video']);

    return (
        <Wrapper>
            <MovieDetailsStyled>
                <div className="content">
                    <div className="overview">
                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
                        </div>
                        <div className="info">
                            <div className="headline">
                                <h1>{movie.title || movie.name}</h1>
                                <span>
                                    <i className="fa fa-star"></i>
                                    <b>{movie.vote_average}</b> / <small>10</small>
                                </span>
                            </div>
                            <div className="item">
                                <p>Overview:</p>
                                <span>{movie.overview}</span>
                            </div>
                            <div className="item">
                                <p>Release date:</p>
                                <span>{movie.release_date}</span>
                            </div>
                        </div>
                    </div>

                    {video.results && video.results.length > 0 && (
                        <div className="video">
                            <p>Trailer</p>
                            <iframe src={`https://www.youtube.com/embed/${video.results[0].key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    )}
                </div>

                <div className="similar">
                    <SimilarCard />
                </div>
            </MovieDetailsStyled>
        </Wrapper>
    );
}