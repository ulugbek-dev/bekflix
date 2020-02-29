import React from 'react';
import { NavbarStyled } from './styled';
import { Logo } from './../../styled/Logo';
import { Link } from 'react-router-dom';
import Search from './../Search/Search';

export default function Navbar() {

    return (
        <NavbarStyled>
            <div className="navbar">
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

                <Search />
            </div>
        </NavbarStyled>
    );
}