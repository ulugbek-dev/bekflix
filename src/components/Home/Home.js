import React from 'react';
import { HomeStyled } from './styled';
import MoviesSlider from './../MoviesSlider/MoviesSlider';
import { Wrapper } from './../../styled/Wrapper';

export default function Home() {
    return (
        <Wrapper afterNav>
            <HomeStyled>
                <MoviesSlider
                    title="New movies"
                    api="3/movie/now_playing?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&page=1"
                    type="NEW_MOVIES"
                />
                <MoviesSlider
                    title="Top movies"
                    api="3/movie/top_rated?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&page=1&region=US"
                    type="TOP_MOVIES"
                />
                <MoviesSlider
                    title="Top TV shows"
                    api="3/tv/top_rated?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&page=1"
                    type="TOP_TV_SHOWS"
                />
            </HomeStyled>
        </Wrapper>
    );
}