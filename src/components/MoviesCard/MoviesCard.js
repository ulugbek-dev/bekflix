import React, { useState, useEffect } from 'react';
import { Wrapper } from './../../styled/Wrapper';
import { useAxios } from './../../hooks/axios';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { MoviesCardStyled } from './styled';
import Card from './../Card/Card';

export default function MoviesCard() {
    const location = useLocation();
    const type = location.pathname.split('/')[2];

    // Fetch and dispatch data
    useAxios(`${type}/top_rated`, `TOP_${type.toUpperCase()}`);

    // Get data from redux
    const data = useSelector(state => state[`top_${type === 'people' ? 'person' : type}`]);

    // Load more handle
    const [page, setPage] = useState(1);
    
    // Dispatch data to store
    useAxios(type === 'people' ? 'person/popular' : type+'/top_rated', 
        page === 1 
            ? `TOP_${type === 'people' ? 'PERSON' : type.toUpperCase()}`
            : `LOAD_MORE_${type === 'people' ? 'PERSON' : type.toUpperCase()}`,
        null,
        null,
        page
    );

    // Load more handler
    const handleLoadMore = () => {
        setPage(page+1);
    }

    // Reset laod more 
    useEffect(() => {
        setPage(1);
    }, [location]);

    return (
        <Wrapper>
            <MoviesCardStyled>
                {data && data.map(m => (
                    <Card small
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