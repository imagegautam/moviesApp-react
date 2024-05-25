import React from 'react';
import { NavList } from '../components/NavList';
import './topNav.css';
import navListData from '../data/navListData';
import Search from '../components/Search';

const TopNav = () => {
  return (
    <header>
        <a href="/" className='logo'>Movies Collection</a>
        <ul className="nav">
            {navListData.map(nav => (
                <NavList key={nav._id} nav={nav} />
            ))}
        </ul>

       <Search />
    </header>
  );
}

export default TopNav;
