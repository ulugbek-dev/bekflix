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
                        <Link to={{ pathname: `/top/movie` }}><li>Movies</li></Link>
                        <Link to={{ pathname: `/top/tv` }}><li>TV Shows</li></Link>
                        <Link to={{ pathname: `/top/people` }}><li>People</li></Link>
                    </ul>
                </div>

                <Search />
            </div>
        </NavbarStyled>
    );
}