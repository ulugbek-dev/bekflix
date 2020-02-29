import React, { useState } from 'react';
import { Wrapper } from './../../styled/Wrapper';
import { useAxios } from './../../hooks/axios';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { MoviesCardStyled } from './styled';
import Card from './../Card/Card';
import axios from 'axios';

export default function MoviesCard() {
    const location = useLocation();
    const dispatch = useDispatch();
    const type = location.pathname.split('/')[2];

    // Fetch and dispatch data
    useAxios(`${type}/top_rated`, `TOP_${type.toUpperCase()}`);

    // Get data from redux
    const data = useSelector(state => state[`top_${type}`]);

    // Load more handle
    const [page, setPage] = useState(2);
    const handleLoadMore = () => {
        axios(`https://api.themoviedb.org/3/${type}/top_rated?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&page=${page}`)
            .then(res => {
                setPage(page+1);
                dispatch({
                    type: `LOAD_MORE_${type.toUpperCase()}`,
                    payload: res.data.results
                });
            })
            .catch(err => console.log(err))
    }

    console.log(data)

    return (
        <Wrapper>
            <MoviesCardStyled animation={data && data}>
                {data && data.map(m => (
                    <Card
                        key={m.id}
                        title={m.title || m.name}
                        image={m.poster_path || m.profile_path}
                        path={`/details/${type}/${m.id}`}
                    />
                ))}
            </MoviesCardStyled>

            <button onClick={() => handleLoadMore()}>Load more</button>
        </Wrapper>
    );
}