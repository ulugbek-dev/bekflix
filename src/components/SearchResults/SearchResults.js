import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Wrapper } from './../../styled/Wrapper';
import { Link } from 'react-router-dom';
import Card from './../Card/Card';

export default function SearchResults() {
    let { search } = useParams();

    const [response, setResponse] = useState('');
    
    // Fetching data on search type
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=e0f9357f349cd13298820d389e248b31&language=en-US&query=${search}&page=1&include_adult=false`)
            .then(res => setResponse(res.data.results))
            .catch(err => console.log(err))
    }, [search]);

    return (
        <Wrapper>
            {response && response.map(r => (
                <Link to={{
                    pathname: `/details/${r.id}`
                }}>
                    <Card
                        title={r.title}
                        image={r.poster_path}
                    />
                </Link>
            ))}
        </Wrapper>
    );
}