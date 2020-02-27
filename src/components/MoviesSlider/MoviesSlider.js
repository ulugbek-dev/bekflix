import React from 'react';
import Slider from "react-slick";
import { SliderStyled } from './../../styled/SliderStyled';
import { useAxios } from './../../hooks/axios';
import { useSelector } from 'react-redux';

export default function MoviesSlider({ title, api, type }) {
    // Get api data and dispatch to store
    useAxios(api, type);
    
    const movies = useSelector(state => state.home[type.toLowerCase()]);

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
                        <div 
                            className="card-content"
                            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${m.backdrop_path})`}}
                        >
                            <h3>{m.title || m.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </SliderStyled>
    );
}