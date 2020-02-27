import React from 'react';
import { HomeStyled } from './styled';
import MoviesSlider from './../MoviesSlider/MoviesSlider';
import { Wrapper } from './../../styled/Wrapper';

export default function Home() {
    return (
        <Wrapper>
            <HomeStyled>
                <MoviesSlider
                    title="New movies"
                    api="movie/now_playing"
                    type="NEW_MOVIES"
                />
                <MoviesSlider
                    title="Top movies"
                    api="movie/top_rated"
                    type="TOP_MOVIES"
                />
                <MoviesSlider
                    title="Top TV shows"
                    api="tv/top_rated"
                    type="TOP_TV_SHOWS"
                />
            </HomeStyled>
        </Wrapper>
    );
}