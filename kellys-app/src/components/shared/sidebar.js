import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import '../../css/sidebar.css'

const Sidebar = () => {
  return (
    <Menu right isOpen={ false } >
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/portfolio">PORTFOLIO</NavLink>
        <NavLink to="/resume">RÉSUMÉ</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
    </Menu>
  );
};

export default Sidebar;