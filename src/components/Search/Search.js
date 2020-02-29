import React, { useState } from 'react';
import { SearchStyled } from './styled';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function Search() {
    const history = useHistory();

    // Search value
    const [search, setSearch] = useState('');
    const [response, setResponse] = useState('');
    
    // Redirect to search results component
    useEffect(() => {
        function redirect() {
            if(search !== ''){
                return history.push(`/search-results/${search}`);
            }
        }

        redirect();
    }, [search]);

    return (
        <SearchStyled onSubmit={e => e.preventDefault()}>
            <span>
                <input 
                    type="text" 
                    value={search}
                    placeholder="Search"
                    onChange={e => setSearch(e.target.value)}
                />
                <i className="fa fa-search"></i>
            </span>
        </SearchStyled>
    );
}