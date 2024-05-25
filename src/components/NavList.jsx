import React from 'react';
import  './navList.css';

export const NavList = ({ nav }) => {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
    </li>
  );
};
