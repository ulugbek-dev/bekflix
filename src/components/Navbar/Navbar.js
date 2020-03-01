import React from 'react';
import { NavbarStyled } from './styled';
import { Logo } from './../../styled/Logo';
import { Link } from 'react-router-dom';
import Search from './../Search/Search';
import { useWidth } from './../../hooks/width';

export default function Navbar() {
    // Get window width
    const width = useWidth();

    return (
        <NavbarStyled>
            <div className="navbar">
                <div>
                    <Link to="/">
                        <Logo>bek<span>flix</span></Logo>
                    </Link>

                    {width > 768 && (
                        <ul>
                            <Link to={{ pathname: `/top/movie` }}><li>Movies</li></Link>
                            <Link to={{ pathname: `/top/tv` }}><li>TV Shows</li></Link>
                            <Link to={{ pathname: `/top/people` }}><li>People</li></Link>
                        </ul>
                    )}
                </div>

                <Search />
            </div>
        </NavbarStyled>
    );
}