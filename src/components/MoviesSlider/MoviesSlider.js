import React from 'react';
import Slider from "react-slick";
import { SliderStyled } from './styled';
import { useAxios } from './../../hooks/axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MoviesSlider({ title, api, type }) {
    // Get api data and dispatch to store
    useAxios(api, type);
    
    // Get data from redux store
    const movies = useSelector(state => state[type.toLowerCase()]);

    // Slick slider settings
    const banner = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <SliderStyled>
            <h2>{title}</h2>
            <Slider {...banner}>
                {movies.map((m, i) => (
                    <div key={i} className="slider-card">
                        <Link to={{
                            pathname: `/details/${api.split('/')[0]}/${m.id}`
                        }}>
                            <div 
                                className="card-content"
                                style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${m.backdrop_path})`}}
                            >
                                <div className="extra">
                                    {m.release_date && m.release_date.split('-')[0] === '2020' && (
                                        <span className="new">
                                            <small>NEW</small>
                                        </span>
                                    )}
                                    <span className="rate">
                                        <i className="fa fa-star-o"></i>
                                        <small>{m.vote_average}</small>
                                    </span>
                                </div>
                                <h3>{m.title || m.name}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </SliderStyled>
    );
}