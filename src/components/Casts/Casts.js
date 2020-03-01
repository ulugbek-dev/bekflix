import React from 'react';
import Slider from "react-slick";
import { SliderStyled } from './styled';
import { useAxios } from './../../hooks/axios';
import { useSelector } from 'react-redux';
import { useWidth } from './../../hooks/width';
import Card from '../Card/Card';

export default function Casts({ title, api, action, type }) {
    // Get api data and dispatch to store
    useAxios(api, action, null, null, 1);
    
    // Get data from redux store
    const credits = useSelector(state => state[action.toLowerCase()]);

    // Get window width
    const width = useWidth();

    // Slider responsiveness handler
    function handleSlides() {
        if(width < 450) return 1;
        if(width < 750) return 2;
        if(width < 980) return 3;
        if(width < 1100) return 4;
        return 5
    }

    // Slick slider settings
    const cards = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: handleSlides(),
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <SliderStyled>
            <p className="title">{title}</p>
            <Slider {...cards}>
                {credits.length !== 0 && credits.cast.map((p, i) => i < 10 && (
                    <Card
                        key={i}
                        title={p.name || p.title}
                        image={p.profile_path || p.poster_path}
                        path={`/details/${type ? type : p.media_type}/${p.id}`}
                    />
                ))}
            </Slider>
        </SliderStyled>
    );
}