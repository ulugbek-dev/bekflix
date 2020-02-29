import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Wrapper } from './../../styled/Wrapper';
import { Link } from 'react-router-dom';
import Card from './../Card/Card';
import { SearchResultsStyled } from './styled';

export default function SearchResults() {
    let { search } = useParams();

    const [response, setResponse] = useState('');
    
    // Fetch search result
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&query=${search}&page=1&include_adult=false`)
            .then(res => setResponse(res.data.results))
            .catch(err => console.log(err))
    }, [search]);

    // Filter search results
    const people = response ? response.filter(x => x.known_for_department === 'Acting' && x.profile_path) : [];
    const movie = response ? response.filter(x => x.media_type === 'movie' && x.poster_path) : [];
    const tv = response ? response.filter(x => x.media_type === 'tv' && x.poster_path) : [];

    console.log(people)

    // List cards
    const listCards = (data, title) => (
        <SearchResultsStyled>
            <h3>{title}</h3>
            {data.map(r => (
                <Card
                    key={r.id}
                    title={r.title || r.name}
                    image={r.poster_path || r.profile_path}
                    path={`/details/${r.id}`}
                />
            ))}
        </SearchResultsStyled>
    )

    return (
        <Wrapper>
            {people.length > 0 && listCards(people, 'People')}
            {movie.length > 0 && listCards(movie, 'Movies')}
            {tv.length > 0 && listCards(tv, 'Tv shows')}
            
            {people.length === 0 && movie.length === 0 && tv.length === 0 && (
                <SearchResultsStyled oops>
                    <small>Oops, nothing found :(</small>
                </SearchResultsStyled>
            )}
        </Wrapper>
    );
}