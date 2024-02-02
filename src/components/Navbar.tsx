import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-around p-10'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='todo'>Todo</NavLink>
      <NavLink to='discord'>Discord</NavLink>
    </nav>
  )
}

export default Navbar