import React from 'react';
import { Wrapper } from '../../styled/Wrapper';
import { MovieDetailsStyled } from './styled';
import { useLocation } from 'react-router';
import { useAxios } from '../../hooks/axios';
import { useWidth } from '../../hooks/width';
import { useSelector } from 'react-redux';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import Trailer from '../Trailer/Trailer';
import Casts from '../Casts/Casts';

export default function MovieDetails() {
    // Get movie/tv id
    const location = useLocation();
    const arr = location.pathname.split('/');
    const type = `/${arr[arr.length-2]}/`;
    const id = arr[arr.length-1];

    // Fetch details about movie
    useAxios(id, 'CURRENT_DETAILS', type, null, 1);
    // Fetch trailer
    useAxios(id, 'CURRENT_VIDEO', type, '/videos', 1);

    // Get data from store
    const details = useSelector(state => state['current_details']);
    const video = useSelector(state => state['current_video']);

    // Get window width
    const width = useWidth();

    return (
        <Wrapper>
            <MovieDetailsStyled person={type === '/person/' ? true : false}>
                <div className="content">
                    <div className="overview">
                        {(details.profile_path || details.poster_path) && (
                            <div className="image">
                                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path || details.profile_path}`} alt={details.title || details.name} />
                            </div>
                        )}
                        <div className="info">
                            <div className="headline">
                                <h1>{details.title || details.name}</h1>
                                {type === '/person/' ? (
                                    <a href={`https://www.imdb.com/name/${details.imdb_id}`} target="_blank">
                                        <span>
                                            <i class="fa fa-imdb"></i>
                                        </span>
                                    </a>
                                ) : (
                                    <span>
                                        <i className="fa fa-star"></i>
                                        <b>{details.vote_average}</b> / <small>10</small>
                                    </span>
                                )}
                            </div>
                            {details.gender && (
                                <div className="item">
                                    <p>Gender:</p>
                                    <span>{details.gender === 1 ? 'Female' : 'Male'}</span>
                                </div>
                            )}
                            {(details.overview || details.biography) && (
                                <div className="item">
                                    <p>{type === '/person/' ? 'Biography' : 'Overview'}:</p>
                                    <span>{details.overview || details.biography}</span>
                                </div>
                            )}
                            {(details.release_date || details.birthday) && (
                                <div className="item">
                                    <p>{type === '/person/' ? 'Date of birth' : 'Release date'}:</p>
                                    <span>{details.release_date || details.birthday}</span>
                                </div>
                            )}
                            {details.place_of_birth && (
                                <div className="item">
                                    <p>Place of birth:</p>
                                    <span>{details.place_of_birth}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {type !== '/person/' && (
                        <Casts
                            title="Cast"
                            api={`${type.split('/')[1]}/${id}/credits`}
                            action="CASTS"
                            type="person"
                        />
                    )}

                    {type === '/person/' && (
                        <Casts
                            title="Movies"
                            api={`person/${id}/combined_credits`}
                            action="MOVIE_CREDITS"
                        />
                    )}

                    {video.results && video.results.length > 0 && type !== '/person/' && (
                        <Trailer video={video.results[0].key}/>
                    )}
                </div>

                {type !== '/person/' && width > 1023 && (
                    <SimilarMovies id={id} type={type} />
                )}
            </MovieDetailsStyled>
        </Wrapper>
    );
}