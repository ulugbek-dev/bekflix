import React from 'react';
import MoviesSlider from './../MoviesSlider/MoviesSlider';
import { Wrapper } from './../../styled/Wrapper';

export default function Home() {
    return (
        <Wrapper>
            <MoviesSlider
                title="New movies"
                api="movie/now_playing"
                type="NEW_MOVIE"
            />
            <MoviesSlider
                title="Top movies"
                api="movie/top_rated"
                type="TOP_MOVIE"
            />
            <MoviesSlider
                title="Top TV shows"
                api="tv/top_rated"
                type="TOP_TV"
            />
        </Wrapper>
    );
}