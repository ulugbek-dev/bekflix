import React, { useState } from 'react';
import { NavbarStyled } from './styled';
import { Logo } from './../../styled/Logo';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [search, setSearch] = useState('');

    return (
        <NavbarStyled>
            <div>
                <Link to="/">
                    <Logo>bek<span>flix</span></Logo>
                </Link>

                <ul>
                    <li>Genre</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Release</li>
                    <li>Trending</li>                
                </ul>
            </div>

            <form>
                <span>
                    <input 
                        type="text" 
                        value={search}
                        placeholder="Search"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <i className="fa fa-search"></i>
                </span>
            </form>
        </NavbarStyled>
    );
}