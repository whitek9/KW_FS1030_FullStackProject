import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <header className='sticky'> 
            <h3> <NavLink to="/">Kelly White</NavLink> </h3>
       </header>
    );
}
 
export default Navigation;